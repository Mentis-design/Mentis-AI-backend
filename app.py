from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere
import os

app = Flask(__name__, static_folder="static")
CORS(app)

co = cohere.Client(os.environ.get("COHERE_API_KEY"))

@app.route("/")
def home():
    return send_from_directory("static", "index.html")

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "")

    if not question:
        return jsonify({"answer": "Please ask a question."})

    response = co.chat(
        message=question,
        model="command"
    )

    return jsonify({
        "answer": response.text
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
