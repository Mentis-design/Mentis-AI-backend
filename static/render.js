const steps = [
  { key: "country", text: "Which country are you studying in?", placeholder: "Country" },
  { key: "curriculum", text: "Which curriculum?", placeholder: "Cambridge / IB / National" },
  { key: "goal", text: "What’s your goal?", placeholder: "Study / Exam prep" },
  { key: "subject", text: "Main subject?", placeholder: "Biology, Maths…" },
  { key: "deadline", text: "Any deadline?", placeholder: "Optional" }
];

let step = 0;
let user = JSON.parse(localStorage.getItem("mentis_user")) || {};

const onboarding = document.getElementById("onboarding");
const home = document.getElementById("home");

function init() {
  if (!user.country) {
    showOnboarding();
  } else {
    showHome();
  }
}

function showOnboarding() {
  onboarding.classList.remove("hidden");
  home.classList.add("hidden");
  updateStep();
}

function showHome() {
  onboarding.classList.add("hidden");
  home.classList.remove("hidden");
  document.getElementById("lastTopic").innerText =
    user.lastQuestion || "Ask your first question";
}

function updateStep() {
  document.getElementById("stepText").innerText = steps[step].text;
  document.getElementById("onboardInput").placeholder = steps[step].placeholder;
  document.getElementById("progressBar").style.width =
    ((step) / steps.length) * 100 + "%";
}

function nextStep() {
  const input = document.getElementById("onboardInput").value;
  user[steps[step].key] = input;
  document.getElementById("onboardInput").value = "";
  step++;

  if (step >= steps.length) {
    localStorage.setItem("mentis_user", JSON.stringify(user));
    showHome();
  } else {
    updateStep();
  }
}

async function askMentis() {
  const q = document.getElementById("question").value;
  if (!q) return;

  user.lastQuestion = q;
  localStorage.setItem("mentis_user", JSON.stringify(user));

  const res = await fetch("/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: q })
  });

  const data = await res.json();
  document.getElementById("answer").innerHTML = data.answer;
  MathJax.typesetPromise();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

init();
