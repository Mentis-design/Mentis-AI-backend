<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Mentis 🧠</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- MathJax for equations -->
  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
      },
      svg: { fontCache: 'global' }
    };
  </script>
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>

  <style>
    :root {
      --bg: #0f172a;
      --card: #111827;
      --accent: #38bdf8;
      --text: #e5e7eb;
      --muted: #94a3b8;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background: radial-gradient(circle at top, #020617, var(--bg));
      color: var(--text);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      padding: 40px 16px;
    }

    .app {
      width: 100%;
      max-width: 900px;
    }

    header {
      margin-bottom: 24px;
    }

    h1 {
      font-size: 2.4rem;
      font-weight: 700;
      margin: 0;
    }

    .subtitle {
      color: var(--muted);
      margin-top: 6px;
    }

    .card {
      background: linear-gradient(180deg, #020617, var(--card));
      border: 1px solid #1f2937;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 20px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.4);
    }

    textarea {
      width: 100%;
      min-height: 80px;
      background: #020617;
      border: 1px solid #1f2937;
      border-radius: 12px;
      padding: 14px;
      font-size: 1rem;
      color: var(--text);
      resize: vertical;
      outline: none;
    }

    textarea::placeholder {
      color: var(--muted);
    }

    button {
      margin-top: 12px;
      background: linear-gradient(135deg, #38bdf8, #0ea5e9);
      border: none;
      border-radius: 12px;
      padding: 12px 20px;
      font-size: 1rem;
      font-weight: 600;
      color: #020617;
      cursor: pointer;
    }

    button:hover {
      opacity: 0.9;
    }

    .answer {
      margin-top: 24px;
      line-height: 1.7;
      font-size: 1.05rem;
    }

    .answer h3 {
      margin-top: 24px;
      margin-bottom: 8px;
    }

    .answer ul {
      padding-left: 20px;
    }

    .answer li {
      margin-bottom: 6px;
    }

    .footer {
      text-align: center;
      color: var(--muted);
      margin-top: 30px;
      font-size: 0.9rem;
    }
  </style>
</head>

<body>
  <div class="app">
    <header>
      <h1>Mentis 🧠</h1>
      <div class="subtitle">Learn clearly. Understand deeply.</div>
    </header>

    <div class="card">
      <textarea id="question" placeholder="Ask anything (e.g. What is photosynthesis?)"></textarea>
      <button onclick="ask()">Ask Mentis</button>
    </div>

    <div class="card answer" id="answer"></div>

    <div class="footer">
      Built with curiosity ✨
    </div>
  </div>

  <script>
    async function ask() {
      const q = document.getElementById('question').value;
      const answerDiv = document.getElementById('answer');
      answerDiv.innerHTML = "Thinking…";

      try {
        const res = await fetch('/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: q })
        });

        const data = await res.json();
        answerDiv.innerHTML = data.answer;

        // Re-render equations every time new content loads
        MathJax.typesetPromise();
      } catch (e) {
        answerDiv.innerHTML = "Something went wrong.";
      }
    }
  </script>
</body>
</html>
