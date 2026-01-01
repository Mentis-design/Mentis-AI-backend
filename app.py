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

RULES FOR ANSWERS:
- Use clear headings for each section
- Use short paragraphs
- Use bullet points properly (each bullet on its own line)
- Use numbered lists when steps follow a sequence
- NEVER put equations inline with text
- ALWAYS put equations on their own line
- Keep explanations concise and readable
- Only include equations when necessary

FORMAT EXAMPLE:

Title
[Blank line]
Explanation paragraph
[Blank line]
- Bullet point 1
- Bullet point 2
[Blank line]
1. Numbered step 1
2. Numbered step 2
[Blank line]
Equation (if necessary, on its own line using $$)

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
