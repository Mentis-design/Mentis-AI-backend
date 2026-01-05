import os
import requests
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder="static")
CORS(app)

# =====================
# API KEYS
# =====================
GROQ_API_KEY = os.environ.get("GROQ_API_KEY")
COHERE_API_KEY = os.environ.get("COHERE_API_KEY")
HF_API_KEY = os.environ.get("HF_API_KEY")

# =====================
# HOME
# =====================
@app.route("/")
def home():
    return send_from_directory("static", "index.html")

# =====================
# PROVIDERS
# =====================

def ask_groq(prompt):
    if not GROQ_API_KEY:
        return None

    payload = {
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.4
    }

    # Groq automatically routes to best available model
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    r = requests.post(
        "https://api.groq.com/openai/v1/chat/completions",
        headers=headers,
        json={**payload, "model": "auto"},
        timeout=12
    )

    if r.status_code == 200:
        return r.json()["choices"][0]["message"]["content"]

    return None


def ask_cohere(prompt):
    if not COHERE_API_KEY:
        return None

    r = requests.post(
        "https://api.cohere.ai/v1/chat",
        headers={
            "Authorization": f"Bearer {COHERE_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            # Cohere routes internally to best Command model
            "message": prompt,
            "temperature": 0.4
        },
        timeout=15
    )

    if r.status_code == 200:
        return r.json().get("text")

    return None


def ask_huggingface(prompt):
    if not HF_API_KEY:
        return None

    # HF auto-selects best compatible model via inference routing
    r = requests.post(
        "https://api-inference.huggingface.co/models/text-generation",
        headers={
            "Authorization": f"Bearer {HF_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "inputs": prompt,
            "parameters": {
                "temperature": 0.4,
                "max_new_tokens": 700
            }
        },
        timeout=20
    )

    if r.status_code == 200 and isinstance(r.json(), list):
        return r.json()[0].get("generated_text")

    return None

# =====================
# ASK ROUTE
# =====================
@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json(force=True)
    question = data.get("question", "").strip()

    if not question:
        return jsonify({"error": "No question provided"}), 400

    prompt = f"""
You are Mentis 🧠, a clean, mobile-first study assistant.

RULES FOR ANSWERS:
- Use clear headings
- Short readable paragraphs
- Proper bullet points (one per line)
- Numbered steps when sequential
- NEVER inline equations
- Equations must be on their own line using $$ $$

QUESTION:
{question}
"""

    try:
        answer = (
            ask_groq(prompt)
            or ask_cohere(prompt)
            or ask_huggingface(prompt)
        )

        if not answer:
            return jsonify({"error": "All AI providers failed"}), 503

        return jsonify({"answer": answer})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# =====================
# RUN
# =====================
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
