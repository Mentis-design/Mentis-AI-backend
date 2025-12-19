from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere
import os

# Initialize Flask app
app = Flask(__name__, static_folder="static", static_url_path="")
CORS(app)

# Initialize Cohere client
COHERE_API_KEY = os.environ.get("COHERE_API_KEY")
co = cohere.Client(COHERE_API_KEY)

# Serve the frontend
@app.route("/")
def home():
    return app.send_static_file("index.html")

# Endpoint for handling questions
@app.route("/ask", methods=["POST"])
def ask():
    try:
        data = request.get_json(force=True)
        question = data.get("question", "").strip()
        premium = data.get("premium", False)

        if not question:
            return jsonify({"answer": "Please ask a question."})

        # Cohere Chat for free users
        if not premium:
            response = co.chat(
                model="command-xlarge-nightly",  # Use currently available model
                message=question
            )
            answer_text = response.text
        else:
            # Placeholder for premium/OpenAI users
            answer_text = "Premium AI not yet implemented."

        return jsonify({"answer": answer_text})

    except Exception as e:
        return jsonify({"answer": f"Server error: {str(e)}"}), 500

# Run app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
