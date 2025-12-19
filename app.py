from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere
import os

app = Flask(__name__, static_folder="static", static_url_path="")
CORS(app)

co = cohere.Client(os.environ.get("COHERE_API_KEY"))

# Serve frontend
@app.route("/")
def index():
    return send_from_directory("static", "index.html")

# Chat endpoint
@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "")
    premium = data.get("premium", False)

    if not question:
        return jsonify({"answer": "Please ask a question."})

    try:
        response = co.chat(
            model="command-r",
            message=question,
            temperature=0.3 if not premium else 0.6
        )

        return jsonify({"answer": response.text})

    except Exception as e:
        return jsonify({"answer": f"Error: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
