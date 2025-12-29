const md = window.markdownit({ html:false, linkify:true, breaks:true });

// Dark mode toggle
const darkToggle = document.getElementById("dark-toggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// LocalStorage: continue last session
const lastQuestion = localStorage.getItem("lastQuestion");
const lastAnswer = localStorage.getItem("lastAnswer");

const continueCard = document.getElementById("continue-card");
const lastSessionText = document.getElementById("last-session");
if(lastQuestion && lastAnswer){
  continueCard.classList.remove("hidden");
  lastSessionText.textContent = `Last asked: "${lastQuestion}"`;
}

document.getElementById("resume-btn")?.addEventListener("click", ()=>{
  document.getElementById("question").value = lastQuestion;
  renderAnswer(lastAnswer);
});

// Ask Mentis
document.getElementById("ask-btn").addEventListener("click", async ()=>{
  const q = document.getElementById("question").value;
  if(!q) return;

  const res = await fetch("/ask", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({ question:q })
  });

  const data = await res.json();
  const answerText = data.error ? "Error: "+data.error : data.answer;

  // Save session
  localStorage.setItem("lastQuestion", q);
  localStorage.setItem("lastAnswer", answerText);

  renderAnswer(answerText);
});

// Render answer with Markdown & Math
function renderAnswer(raw){
  const container = document.getElementById("answer");
  container.innerHTML = md.render(raw);
  MathJax.typesetPromise();
  }
