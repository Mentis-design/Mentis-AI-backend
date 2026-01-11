// static/lessons.js
import { grade8MathLessons } from "./data/grade8MathLessons.js";

/* ---------------- STATE ---------------- */
let currentLesson = null;
let questions = [];
let qIndex = 0;
let score = 0;
let xp = 0;
let mode = "normal";
let timer = null;
let timeLeft = 0;

/* ---------------- ELEMENT ---------------- */
const app = document.querySelector(".app");

/* ---------------- HELPERS ---------------- */
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function compliment() {
  const list = [
    "Great job!",
    "Nice work!",
    "Fantastic!",
    "Amazing!",
    "That was a hard one 👏"
  ];
  return list[Math.floor(Math.random() * list.length)];
}

/* ---------------- LESSON LIST ---------------- */
function renderLessons() {
  app.innerHTML = `
    <h1>Mentis 🧠 - Grade 8 Maths</h1>
  `;

  grade8MathLessons.forEach((lesson, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${lesson.title}</h3>
      <p>${lesson.summary}</p>
      <button>Start Lesson</button>
    `;
    card.querySelector("button").onclick = () => chooseMode(i);
    app.appendChild(card);
  });
}

/* ---------------- MODE SELECTION ---------------- */
function chooseMode(index) {
  currentLesson = grade8MathLessons[index];

  app.innerHTML = `
    <div class="card">
      <h3>${currentLesson.title}</h3>
      <button id="normal">Normal Mode</button>
      <button id="timed">Timed Mode</button>
    </div>
  `;

  document.getElementById("normal").onclick = () => startLesson("normal");
  document.getElementById("timed").onclick = () => startLesson("timed");
}

/* ---------------- START LESSON ---------------- */
function startLesson(selectedMode) {
  mode = selectedMode;
  score = 0;
  xp = 0;
  qIndex = 0;

  questions = mode === "timed"
    ? shuffle(currentLesson.questions)
    : [...currentLesson.questions];

  if (mode === "timed") startTimer();

  renderQuestion();
}

/* ---------------- TIMER ---------------- */
function startTimer() {
  timeLeft = questions.length * 10;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `⏱ ${timeLeft}s`;
    if (timeLeft <= 0) finishLesson();
  }, 1000);
}

/* ---------------- RENDER QUESTION ---------------- */
function renderQuestion() {
  const q = questions[qIndex];
  const progress = Math.floor((qIndex / questions.length) * 100);

  app.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <div class="progress">
        <div class="progress-fill" style="width:${progress}%"></div>
      </div>
      ${mode === "timed" ? `<div id="timer">⏱ ${timeLeft}s</div>` : ""}
    </div>

    <p>Question ${qIndex + 1} of ${questions.length}</p>

    <div class="card">
      <h3>${q.question}</h3>
      ${q.options.map((opt, i) =>
        `<div class="option" onclick="selectAnswer(${i})">${opt}</div>`
      ).join("")}
    </div>
  `;
}

/* ---------------- ANSWER ---------------- */
window.selectAnswer = function (index) {
  const q = questions[qIndex];
  const options = document.querySelectorAll(".option");

  if (index === q.correct) {
    options[index].style.background = "#22c55e";
    score++;
    xp += q.xp || 10;

    if (mode === "normal") {
      options[index].innerText += ` ✓ ${compliment()}`;
    }
  } else {
    options[index].style.background = "#ef4444";
    options[q.correct].style.background = "#22c55e";

    if (mode === "normal") {
      const exp = document.createElement("p");
      exp.innerText = q.explanation;
      app.appendChild(exp);
    }
  }

  setTimeout(() => {
    qIndex++;
    qIndex < questions.length ? renderQuestion() : finishLesson();
  }, mode === "timed" ? 600 : 1200);
};

/* ---------------- FINISH ---------------- */
function finishLesson() {
  clearInterval(timer);
  const percent = Math.round((score / questions.length) * 100);

  app.innerHTML = `
    <div class="card">
      <h2>Lesson Complete 🎉</h2>
      <p>Score: ${percent}%</p>
      <p>XP Earned: +${xp}</p>
      <button onclick="renderLessons()">Back to Lessons</button>
    </div>
  `;
}

/* ---------------- INIT ---------------- */
renderLessons();
