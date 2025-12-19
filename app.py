from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere
import os

app = Flask(__name__, static_folder="static")
CORS(app)

# Initialize Cohere client with your API key stored as environment variable
co = cohere.Client(os.environ.get("COHERE_API_KEY"))

@app.route("/")
def home():
    # Serve the index.html from the static folder
    return send_from_directory("static", "index.html")

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "")
    premium = data.get("premium", False)  # can be used later for different models

    if not question:
        return jsonify({"answer": "Please ask a question."})

    # Cohere Chat API
    response = co.chat(
        message=question,
        model="command"  # Use a supported model from Cohere
    )

    return jsonify({
        "answer": response.text
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Render provides PORT automatically
    app.run(host="0.0.0.0", port=port)
