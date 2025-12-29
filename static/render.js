const steps = [
  { key: "country", text: "Which country are you studying in?", placeholder: "e.g. South Africa" },
  { key: "curriculum", text: "Which curriculum?", placeholder: "CAPS, IGCSE, IB…" },
  { key: "goal", text: "What’s your goal?", placeholder: "Study / Exam prep" },
  { key: "subject", text: "Main subject?", placeholder: "Biology, Maths…" },
  { key: "deadline", text: "Any deadline?", placeholder: "YYYY-MM-DD" }
];

let currentStep = 0;
let userData = {};

const onboarding = document.getElementById("onboarding");
const main = document.getElementById("main");

function init() {
  const saved = localStorage.getItem("mentis_user");
  if (saved) {
    showMain();
  } else {
    showOnboarding();
  }
}

function showOnboarding() {
  onboarding.classList.remove("hidden");
  main.classList.add("hidden");
  renderStep();
}

function renderStep() {
  document.getElementById("step-text").innerText = steps[currentStep].text;
  const input = document.getElementById("input");
  input.placeholder = steps[currentStep].placeholder;
  input.value = "";
  document.getElementById("progress-bar").style.width =
    ((currentStep / steps.length) * 100) + "%";
}

function nextStep() {
  const input = document.getElementById("input");
  if (!input.value) return;

  userData[steps[currentStep].key] = input.value;
  currentStep++;

  if (currentStep === steps.length) {
    userData.onboardingComplete = true;
    localStorage.setItem("mentis_user", JSON.stringify(userData));
    showMain();
  } else {
    renderStep();
  }
}

function showMain() {
  onboarding.classList.add("hidden");
  main.classList.remove("hidden");
}

async function askMentis() {
  const q = document.getElementById("question").value;
  if (!q) return;

  const res = await fetch("/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: q })
  });

  const data = await res.json();
  document.getElementById("answer").innerHTML =
    data.error ? "Error: " + data.error : data.answer;

  MathJax.typesetPromise();
}

init();
