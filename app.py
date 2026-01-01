import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere

app = Flask(__name__, static_folder="static")
CORS(app)

co = cohere.Client(os.environ.get("COHERE_API_KEY"))

@app.route("/")
def home():
    return send_from_directory("static", "index.html")

@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json(force=True)
    question = data.get("question", "").strip()

    if not question:
        return jsonify({"error": "No question provided"}), 400

    prompt = f"""
You are Mentis 🧠, a clean, mobile-first study assistant.

STRICT RULES (must follow):
- Use clear headings
- Use short paragraphs (max 2–3 lines)
- Use bullet points properly (each item on its own line)
- NEVER put equations inline with text
- ALWAYS put equations on their own line
- Use LaTeX ONLY inside $$ blocks
- Only include equations when necessary
- Do NOT repeat equations at the end
- Keep spacing clean and readable
- Do NOT escape LaTeX with backslashes
- Keep equations short for mobile
- If an equation is long, split it into multiple lines
- Avoid unnecessary symbols

REQUIRED FORMAT:

Title

Short explanation paragraph.

Key steps:
- Bullet point
- Bullet point
- Bullet point

Equation:
$$
equation_here
$$

QUESTION:
{question}
"""

    try:
        response = co.chat(message=prompt)
        return jsonify({"answer": response.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
