from flask import Flask, request, jsonify
from flask_cors import CORS
import cohere
import os

app = Flask(__name__)
CORS(app)

# Cohere API key
co = cohere.Client(os.environ.get("COHERE_API_KEY"))

# Load static formatting rules
with open("static/prompt_rules.txt", "r") as f:
    formatting_rules = f.read()

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    user_question = data.get("question", "").strip()

    if not user_question:
        return jsonify({"error": "No question provided"}), 400

    # Prepend formatting rules
    full_prompt = f"{formatting_rules}\nQuestion: {user_question}"

    try:
        response = co.generate(
            model=None,  # let Cohere choose working model
            prompt=full_prompt,
            max_tokens=500,
            temperature=0.7,
            stop_sequences=[]
        )
        answer_text = response.generations[0].text.strip()
        return jsonify({"answer": answer_text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
