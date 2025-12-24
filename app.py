import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere

app = Flask(__name__, static_folder="static")
CORS(app)

co = cohere.Client(os.environ.get("COHERE_API_KEY"))

# ✅ Correct path to prompt rules
PROMPT_RULES_PATH = os.path.join(app.static_folder, "prompt_rules.txt")

with open(PROMPT_RULES_PATH, "r", encoding="utf-8") as f:
    PROMPT_RULES = f.read()


@app.route("/")
def home():
    return send_from_directory("static", "index.html")


@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "").strip()

    if not question:
        return jsonify({"error": "No question provided"}), 400

    prompt = f"""
You are Mentis, a study assistant.

{PROMPT_RULES}

Question:
{question}
"""

    try:
        response = co.chat(
            message=prompt
        )
        return jsonify({"answer": response.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
