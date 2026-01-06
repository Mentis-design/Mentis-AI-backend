import os
import requests
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere

# Gemini SDK
try:
    import google.generativeai as genai
except ImportError:
    genai = None  # Will skip if not installed

app = Flask(__name__, static_folder="static")
CORS(app)

# ======================
# API KEYS
# ======================
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
HF_API_KEY = os.getenv("HUGGINGFACE_API_KEY")

# ======================
# INITIALIZE PROVIDERS
# ======================
co = cohere.Client(COHERE_API_KEY) if COHERE_API_KEY else None

gemini_model = None
if GEMINI_API_KEY and genai:
    genai.configure(api_key=GEMINI_API_KEY)
    try:
        gemini_model = genai.GenerativeModel("gemini-pro")
    except Exception as e:
        print("Gemini initialization failed:", e)

# ======================
# PROMPT BUILDER
# ======================
def build_prompt(question: str) -> str:
    return f"""
You are Mentis 🧠, a clean, mobile-first study assistant.

RULES FOR ANSWERS:
- Use clear headings
- Short paragraphs
- Bullet points (each on its own line)
- Numbered steps when appropriate
- NEVER put equations inline
- Equations must be on their own line using $$ if needed
- No clutter, no emojis

FORMAT:

Title

Explanation paragraph

- Bullet
- Bullet

1. Step
2. Step

QUESTION:
{question}
""".strip()

# ======================
# AI PROVIDER FUNCTIONS
# ======================
def ask_groq(prompt):
    if not GROQ_API_KEY:
        raise Exception("Groq key missing")
    res = requests.post(
        "https://api.groq.com/openai/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "llama3-70b-8192",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.4
        },
        timeout=15
    )
    res.raise_for_status()
    data = res.json()
    return data.get("choices", [{}])[0].get("message", {}).get("content", "")

def ask_cohere(prompt):
    if not co:
        raise Exception("Cohere key missing")
    try:
        res = co.chat(message=prompt)
        return getattr(res, "text", getattr(res, "output_text", ""))
    except Exception as e:
        raise Exception(f"Cohere error: {e}")

def ask_gemini(prompt):
    if not gemini_model:
        raise Exception("Gemini key missing or not initialized")
    try:
        res = gemini_model.generate_content(prompt)
        # Safe handling for different response structures
        return getattr(res, "text", getattr(res, "output_text", res.output[0].content[0].text if hasattr(res, "output") else ""))
    except Exception as e:
        raise Exception(f"Gemini error: {e}")

def ask_huggingface(prompt):
    if not HF_API_KEY:
        raise Exception("HuggingFace key missing")
    try:
        res = requests.post(
            "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
            headers={"Authorization": f"Bearer {HF_API_KEY}"},
            json={"inputs": prompt},
            timeout=30
        )
        res.raise_for_status()
        data = res.json()
        if isinstance(data, list) and "generated_text" in data[0]:
            return data[0]["generated_text"]
        elif isinstance(data, dict) and "generated_text" in data:
            return data["generated_text"]
        else:
            raise Exception("HF returned unexpected format")
    except Exception as e:
        raise Exception(f"HuggingFace error: {e}")

# ======================
# ROUTES
# ======================
@app.route("/")
def home():
    return send_from_directory("static", "index.html")

@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json(force=True)
    question = data.get("question", "").strip()

    if not question:
        return jsonify({"error": "No question provided"}), 400

    prompt = build_prompt(question)

    # Priority order: Groq → Cohere → Gemini → HF
    providers = [
        ("Groq", ask_groq),
        ("Cohere", ask_cohere),
        ("Gemini", ask_gemini),
        ("HuggingFace", ask_huggingface),
    ]

    errors = []
    for name, provider in providers:
        try:
            answer = provider(prompt)
            if answer:
                return jsonify({"answer": answer})
        except Exception as e:
            print(f"{name} failed:", e)
            errors.append(f"{name}: {e}")

    # All providers failed
    return jsonify({
        "error": "All AI providers failed",
        "details": errors
    }), 500

# ======================
# RUN
# ======================
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
