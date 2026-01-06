import os
import requests
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere
import google.generativeai as genai

app = Flask(__name__, static_folder="static")
CORS(app)

# ======================
# API KEYS
# ======================
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
HF_API_KEY = os.getenv("HUGGINGFACE_API_KEY")

co = cohere.Client(COHERE_API_KEY) if COHERE_API_KEY else None

if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
    gemini_model = genai.GenerativeModel("gemini-pro")
else:
    gemini_model = None


# ======================
# PROMPT
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
# PROVIDERS
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
    return res.json()["choices"][0]["message"]["content"]


def ask_cohere(prompt):
    if not co:
        raise Exception("Cohere key missing")

    res = co.chat(message=prompt)
    return res.text


def ask_gemini(prompt):
    if not gemini_model:
        raise Exception("Gemini key missing")

    res = gemini_model.generate_content(prompt)
    return res.text


def ask_huggingface(prompt):
    if not HF_API_KEY:
        raise Exception("HF key missing")

    res = requests.post(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
        headers={"Authorization": f"Bearer {HF_API_KEY}"},
        json={"inputs": prompt},
        timeout=30
    )

    res.raise_for_status()
    data = res.json()
    return data[0]["generated_text"]


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
            return jsonify({"answer": answer})
        except Exception as e:
            errors.append(f"{name}: {str(e)}")

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
