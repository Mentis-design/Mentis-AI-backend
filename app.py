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
    try:
        data = request.get_json()
        question = data.get("question", "").strip()

        if not question:
            return jsonify({"answer": "Please enter a question."})

        response = co.chat(
            model="command-r",
            message=question
        )

        return jsonify({"answer": response.text})

    except Exception as e:
        return jsonify({"answer": f"Server error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
