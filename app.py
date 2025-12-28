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
    question = request.json.get("question", "")

    prompt = f"""
You are Mentis, a study assistant.

Rules:
- Use LaTeX ONLY inside $$ blocks
- Do NOT repeat equations
- Write explanations in normal text

Question:
{question}
"""

    response = co.chat(message=prompt)
    return jsonify({"answer": response.text})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
