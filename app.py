from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import cohere
import os

app = Flask(__name__, static_folder="static")
CORS(app)

co = cohere.Client(os.getenv("COHERE_API_KEY"))

with open("prompt_rules.txt") as f:
    RULES = f.read()

@app.route("/")
def home():
    return send_from_directory("static", "index.html")

@app.route("/ask", methods=["POST"])
def ask():
    q = request.json.get("question", "")

    prompt = f"{RULES}\n\nQuestion:\n{q}"

    try:
        res = co.chat(message=prompt)
        return jsonify({"answer": res.text})
    except Exception as e:
        return jsonify({"answer": f"⚠️ Error: {str(e)}"})
