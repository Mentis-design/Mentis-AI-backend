const askBtn = document.getElementById("askBtn");
const input = document.getElementById("questionInput");
const answerBox = document.getElementById("answerBox");
const themeToggle = document.getElementById("themeToggle");

askBtn.addEventListener("click", askMentis);

async function askMentis() {
  const question = input.value.trim();
  if (!question) return;

  answerBox.innerHTML = "Thinking…";

  try {
    const res = await fetch("/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });

    const data = await res.json();
    answerBox.innerHTML = data.answer;

    MathJax.typesetPromise();
  } catch (err) {
    answerBox.innerHTML = "Error talking to Mentis.";
  }
}

/* Dark mode */
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
