from flask import Flask, request, jsonify
import os
import openai
import cohere

app = Flask(__name__)

# API keys from environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")
co = cohere.Client(os.getenv("COHERE_API_KEY"))

@app.route("/")
def home():
    return "Mentis backend is running"

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "")
    premium = data.get("premium", False)

    # Prompt instructs AI to respond in structured Markdown
    markdown_prompt = f"""
You are Mentis, a smart AI tutor. Answer the question in **clear, structured Markdown**:
- Use headings (###) for main sections
- Use bullets (-) or numbered lists if needed
- Include formulas in LaTeX format if applicable
- Provide concise but informative explanations
Question: {question}
"""

    if premium:
        # OpenAI GPT for premium users
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": markdown_prompt}]
        )
        answer = response.choices[0].message.content
    else:
        # Cohere Chat for free users (Chat API)
        response = co.chat(
            model="command-light",
            query=markdown_prompt
        )
        answer = response.message

    return jsonify({"answer": answer})

if __name__ == "__main__":
    # Use 0.0.0.0 for Render, port from environment or default 10000
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
