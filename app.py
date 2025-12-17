from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import openai
import cohere

app = Flask(__name__)
CORS(app)  # <-- Fixes Network error: Failed to fetch

# Load API keys from environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")
co = cohere.Client(os.getenv("COHERE_API_KEY"))

@app.route("/")
def home():
    return "Mentis backend is running"

@app.route("/ask", methods=["POST"])
def ask():
    try:
        data = request.json
        question = data.get("question", "").strip()
        premium = data.get("premium", False)

        if not question:
            return jsonify({"error": "No question provided"}), 400

        # Premium users → OpenAI GPT
        if premium:
            response = openai.ChatCompletion.create(
                model="gpt-4o-mini",
                messages=[{"role": "user", "content": question}]
            )
            answer = response.choices[0].message.content

        # Free users → Cohere Chat API
        else:
            response = co.chat(
                model="command",
                messages=[{"role": "user", "content": question}],
                max_tokens=200
            )
            answer = response.output_text

        return jsonify({"answer": answer})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    # Render provides the port in environment variable
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
