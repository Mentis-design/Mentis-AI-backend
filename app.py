from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere
import os

app = Flask(__name__, static_folder="static")
CORS(app)

# Initialize Cohere client with your API key
co = cohere.Client(os.environ.get("COHERE_API_KEY"))

@app.route("/")
def home():
    # Serve the frontend
    return send_from_directory("static", "index.html")

@app.route("/ask", methods=["POST"])
def ask():
    try:
        data = request.get_json(force=True)
        question = data.get("question", "").strip()

        if not question:
            return jsonify({"answer": "Please ask a question."})

        # Use a valid Cohere model
        response = co.chat(
            message=question,
            model="command-r-plus"
        )

        return jsonify({"answer": response.text})

    except Exception as e:
        return jsonify({"answer": f"Server error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
