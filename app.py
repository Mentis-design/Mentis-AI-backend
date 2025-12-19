from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import cohere
from openai import OpenAI

app = Flask(__name__)
CORS(app)

# API keys from environment variables
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

co = cohere.Client(COHERE_API_KEY)
openai_client = OpenAI(api_key=OPENAI_API_KEY)

@app.route("/")
def home():
    return "Mentis backend is running"

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "").strip()
    premium = data.get("premium", False)

    if not question:
        return jsonify({"error": "No question provided"}), 400

    try:
        # PREMIUM USERS → OpenAI
        if premium:
            response = openai_client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "user", "content": question}
                ]
            )
            answer = response.choices[0].message.content

        # FREE USERS → COHERE CHAT
        else:
            response = co.chat(
                model="command-r-plus",
                message=question
            )
            answer = response.text

        return jsonify({"answer": answer})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
