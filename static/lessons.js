import { grade8MathLessons } from "./data/grade8MathLessons.js";

const appDiv = document.querySelector(".app");

// --- STATE ---
let currentLesson = null;
let currentQuestionIndex = 0;

// --- RENDER LESON LIST ---
function renderLessons() {
  appDiv.innerHTML = `
    <header>
      <h1>Mentis 🧠 - Grade 8 Maths</h1>
    </header>
  `;

  grade8MathLessons.forEach((lesson, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${lesson.title}</h3>
      <p>${lesson.summary}</p>
      <button>Start Lesson</button>
    `;

    card.querySelector("button").onclick = () => startLesson(index);
    appDiv.appendChild(card);
  });
}

// --- START LESSON ---
function startLesson(index) {
  currentLesson = grade8MathLessons[index];
  currentQuestionIndex = 0;
  renderQuestion();
}

// --- RENDER QUESTION ---
function renderQuestion() {
  const q = currentLesson.questions[currentQuestionIndex];

  appDiv.innerHTML = `
    <div class="card">
      <p>Question ${currentQuestionIndex + 1} of ${currentLesson.questions.length}</p>
      <h3>${q.question}</h3>
      <div id="options"></div>
      <p id="feedback"></p>
    </div>
  `;

  const optionsDiv = document.getElementById("options");
  const feedback = document.getElementById("feedback");

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.style.marginBottom = "10px";

    btn.onclick = () => {
      if (i === q.correctIndex) {
        feedback.textContent = q.correctMessage;
        feedback.style.color = "#22c55e";
      } else {
        feedback.textContent = q.explanation;
        feedback.style.color = "#f87171";
      }
    };

    optionsDiv.appendChild(btn);
  });
}

// --- INIT ---
document.addEventListener("DOMContentLoaded", renderLessons);
