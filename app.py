from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import cohere
import os

app = Flask(__name__)
CORS(app)

co = cohere.Client(os.environ.get("COHERE_API_KEY"))

SYSTEM_PROMPT = """
You are Mentis, a study tutor.
Rules:
- Use clear headings and bullet points
- Always format equations in LaTeX
- Use $$ ... $$ for block equations
- Use $ ... $ for inline equations
- Never repeat equations unless needed
- Explain step-by-step like a textbook
"""

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "").strip()

    if not question:
        return jsonify({"answer": "Please ask a question."})

    try:
        response = co.chat(
            message=f"{SYSTEM_PROMPT}\n\nQuestion: {question}"
            # ⚠️ NO MODEL SPECIFIED — Cohere auto-picks
        )

        return jsonify({"answer": response.text})

    except Exception as e:
        return jsonify({"answer": f"Server error: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(debug=True)
