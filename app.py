from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere
import os

app = Flask(__name__, static_folder="static")
CORS(app)

# Initialize Cohere client
co = cohere.Client(os.environ.get("COHERE_API_KEY"))

def get_working_model():
    """
    Fetch available models from Cohere and select the first supported chat model.
    """
    try:
        models = co.list_models().models  # returns a list of model names
        for model_name in models:
            if model_name.startswith("command"):
                print(f"Selected model: {model_name}")
                return model_name
    except Exception as e:
        print(f"Error fetching models: {e}")
    # fallback if something goes wrong
    return "command-xlarge"

# Refresh the model each time server starts
DEFAULT_MODEL = get_working_model()

@app.route("/")
def home():
    return send_from_directory("static", "index.html")

@app.route("/ask", methods=["POST"])
def ask():
    try:
        data = request.get_json(force=True)
        question = data.get("question", "").strip()

        if not question:
            return jsonify({"answer": "Please ask a question."})

        response = co.chat(
            model=DEFAULT_MODEL,
            message=question
        )

        return jsonify({"answer": response.text})

    except Exception as e:
        return jsonify({"answer": f"Server error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
