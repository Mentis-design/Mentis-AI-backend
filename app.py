from flask import Flask, request, jsonify
import os
import openai
import cohere

app = Flask(__name__)

openai.api_key = os.getenv("OPENAI_API_KEY")
co = cohere.Client(os.getenv("COHERE_API_KEY"))

@app.route("/")
def home():
    return "Mentis backend is running"

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "")
    premium = data.get("premium", False)

    if premium:
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": question}]
        )
        answer = response.choices[0].message.content
    else:
        response = co.generate(
            model="command",
            prompt=question,
            max_tokens=200
        )
        answer = response.generations[0].text

    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run()
