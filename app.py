import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere

# Initialize Flask app
app = Flask(__name__, static_folder="static")
CORS(app)

# Initialize Cohere client
co = cohere.Client(os.environ.get("COHERE_API_KEY"))

# Load prompt rules from static folder
try:
    with open(os.path.join("static", "prompt_rules.txt"), "r") as f:
        prompt_rules = f.read()
except FileNotFoundError:
    prompt_rules = """
Formatting rules:
- Use LaTeX ONLY inside $$ blocks
- Only include equations when necessary
- Do NOT repeat equations at the end
- Write explanations in normal text
- Keep spacing clean and readable
"""

# Serve index.html
@app.route("/")
def home():
    return send_from_directory("static", "index.html")


# Ask Mentis endpoint
@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "").strip()

    if not question:
        return jsonify({"error": "No question provided"}), 400

    # Build prompt
    prompt = f"""
You are Mentis, a helpful study assistant.

{prompt_rules}

Question:
{question}
"""

    try:
        # Cohere chat call - automatically picks a working model
        response = co.chat(message=prompt)
        answer = response.text
        return jsonify({"answer": answer})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    # Bind to all interfaces for Render
    app.run(host="0.0.0.0", port=port)
