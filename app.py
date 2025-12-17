from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import openai
import cohere

# Create Flask app
app = Flask(__name__)
CORS(app)

# Load API keys from environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")
co = cohere.Client(os.getenv("COHERE_API_KEY"))

@app.route("/")
def home():
    return "Mentis backend is running"

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json or {}
    question = data.get("question", "")
    premium = data.get("premium", False)

    if not question:
        return jsonify({"error": "No question provided"}), 400

    try:
        if premium:
            # Premium users → OpenAI
            response = openai.ChatCompletion.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "You are Mentis, a helpful AI tutor."},
                    {"role": "user", "content": question}
                ]
            )
            answer = response.choices[0].message.content
        else:
            # Free users → Cohere
            response = co.generate(
                model="command",
                prompt=question,
                max_tokens=200
            )
            answer = response.generations[0].text

        return jsonify({"answer": answer})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# REQUIRED FOR RENDER
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
