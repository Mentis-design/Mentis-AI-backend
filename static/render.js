const answerBox = document.getElementById("answer");
const askBtn = document.getElementById("askBtn");
const input = document.getElementById("question");
const toggle = document.getElementById("themeToggle");

// Ask Mentis
askBtn.onclick = async () => {
  const q = input.value.trim();
  if (!q) return;

  answerBox.innerHTML = "<p>Thinking…</p>";

  const res = await fetch("/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: q })
  });

  const data = await res.json();
  answerBox.innerHTML = data.error || data.answer;

  MathJax.typesetPromise();
};

// Dark mode toggle
toggle.onclick = () => {
  const root = document.documentElement;
  const dark = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", dark ? "light" : "dark");
  toggle.textContent = dark ? "🌙" : "☀️";
};
