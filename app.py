from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import openai
import cohere

app = Flask(__name__, static_folder="static")
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")
co = cohere.Client(os.getenv("COHERE_API_KEY"))

@app.route("/")
def home():
    return app.send_static_file("index.html")

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "")
    premium = data.get("premium", False)

    if not question:
        return jsonify({"answer": "Please ask a question."})

    try:
        if premium:
            response = openai.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{"role": "user", "content": question}]
            )
            answer = response.choices[0].message.content
        else:
            response = co.chat(
                model="command-r",
                message=question
            )
            answer = response.text

        return jsonify({"answer": answer})

    except Exception as e:
        return jsonify({"answer": f"Error: {str(e)}"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
