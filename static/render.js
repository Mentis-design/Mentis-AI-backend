const askBtn = document.getElementById("askBtn");
const answerBox = document.getElementById("answer");
const toggle = document.getElementById("themeToggle");

askBtn.addEventListener("click", askMentis);

async function askMentis() {
  const q = document.getElementById("question").value.trim();
  if (!q) return;

  answerBox.innerHTML = "Thinking…";

  const res = await fetch("/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: q })
  });

  const data = await res.json();
  answerBox.innerHTML = data.error ? data.error : data.answer;

  MathJax.typesetPromise();
}

toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    current === "dark" ? "light" : "dark"
  );
});
