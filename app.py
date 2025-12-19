from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere
import os

app = Flask(__name__, static_folder="static")
CORS(app)

# Initialize Cohere client with environment variable
co = cohere.Client(os.environ.get("COHERE_API_KEY"))

@app.route("/")
def home():
    return send_from_directory("static", "index.html")

@app.route("/ask", methods=["POST"])
def ask():
    try:
        data = request.get_json(force=True)
        question = data.get("question", "").strip()
        premium = data.get("premium", False)

        if not question:
            return jsonify({"answer": "Please ask a question."})

        # Choose a current Chat API model from Cohere
        model_name = "xlarge"  # Replace if you want a different model

        # Cohere Chat API call
        response = co.chat(
            model=model_name,
            messages=[{"role": "user", "content": question}]
        )

        answer = response.choices[0].message.content

        return jsonify({"answer": answer})

    except Exception as e:
        return jsonify({"answer": f"Server error: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
