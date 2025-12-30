// Redirect first-time users
if (!localStorage.getItem("mentis_onboarded")) {
  if (!window.location.pathname.includes("onboarding")) {
    window.location.href = "/onboarding";
  }
}

const askBtn = document.getElementById("askBtn");
const input = document.getElementById("questionInput");
const answerBox = document.getElementById("answerBox");
const themeToggle = document.getElementById("themeToggle");

askBtn?.addEventListener("click", async () => {
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
    answerBox.innerHTML = data.answer || data.error;

    MathJax.typesetPromise();
  } catch (e) {
    answerBox.innerHTML = "Something went wrong.";
  }
});

// Dark mode
themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
