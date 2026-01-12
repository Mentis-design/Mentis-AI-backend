import { grade8MathLessons } from "./data/grade8MathLessons.js";

/* ================= STATE ================= */

let currentLesson = null;
let currentQuestionIndex = 0;
let currentMode = null; // "normal" | "timed"
let score = 0;
let xp = 0;
let locked = false;
let timerInterval = null;
let timeLeft = 0;

const app = document.querySelector(".app");

/* ================= ENTRY ================= */

document.addEventListener("DOMContentLoaded", renderLessons);

/* ================= LESSON LIST ================= */

function renderLessons() {
  clearTimers();
  app.innerHTML = `<h1>Mentis 🧠 - Grade 8 Maths</h1>`;

  grade8MathLessons.forEach((lesson, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${lesson.title}</h3>
      <p>${lesson.summary}</p>
      <button onclick="selectMode(${i})">Start Lesson</button>
    `;
    app.appendChild(card);
  });
}

/* ================= MODE SELECT ================= */

window.selectMode = function (lessonIndex) {
  currentLesson = grade8MathLessons[lessonIndex];

  app.innerHTML = `
    <div class="card">
      <h3>${currentLesson.title}</h3>
      <p>Select a mode</p>

      <button class="mode-btn" onclick="startLesson('normal')">
        Normal Mode
      </button>

      <button class="mode-btn" onclick="startLesson('timed')">
        Timed Mode ⏱
      </button>
    </div>
  `;
};

/* ================= START LESSON ================= */

window.startLesson = function (mode) {
  currentMode = mode;
  currentQuestionIndex = 0;
  score = 0;
  xp = 0;
  locked = false;

  if (mode === "timed") {
    timeLeft = currentLesson.questions.length * 6;
    startTimer();
  }

  renderQuestion();
};

/* ================= TIMER ================= */

function startTimer() {
  clearTimers();
  timerInterval = setInterval(() => {
    timeLeft--;
    const timer = document.getElementById("timer");
    if (timer) timer.textContent = `⏱ ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearTimers();
      showCompletion();
    }
  }, 1000);
}

function clearTimers() {
  if (timerInterval) clearInterval(timerInterval);
}

/* ================= QUESTION ================= */

function renderQuestion() {
  locked = false;
  const q = currentLesson.questions[currentQuestionIndex];
  const progress = Math.round(
    ((currentQuestionIndex + 1) / currentLesson.questions.length) * 100
  );

  app.innerHTML = `
    <div class="progress">
      <div class="progress-fill" style="width:${progress}%"></div>
    </div>

    <div class="question-header">
      <span>Question ${currentQuestionIndex + 1} of ${currentLesson.questions.length}</span>
      ${currentMode === "timed" ? `<span id="timer">⏱ ${timeLeft}s</span>` : ""}
    </div>

    <div class="card">
      <h3>${q.question}</h3>
      <div id="options"></div>
      <div id="feedback"></div>
      ${currentMode === "normal" ? `<button onclick="nextQuestion()">Next</button>` : ""}
    </div>
  `;

  const optionsDiv = document.getElementById("options");
  q.options.forEach((opt, i) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = opt;
    btn.onclick = () => submitAnswer(i, btn);
    optionsDiv.appendChild(btn);
  });
}

/* ================= ANSWER HANDLING ================= */

function submitAnswer(index, element) {
  if (locked) return;
  locked = true;

  const q = currentLesson.questions[currentQuestionIndex];
  const correct = index === q.correctIndex;

  document.querySelectorAll(".option").forEach(o => o.style.pointerEvents = "none");

  if (correct) {
    element.classList.add("correct");
    score++;
    xp += Number(currentLesson.xpPerQuestion || 0);

    showFlash("✔ " + q.options[q.correctIndex], "green");
  } else {
    element.classList.add("wrong");
    document.querySelectorAll(".option")[q.correctIndex].classList.add("correct");

    showFlash("✖ " + q.options[q.correctIndex], "red");
    showFeedback(q.explanation);
  }

  if (currentMode === "timed") {
    setTimeout(nextQuestion, 900);
  }
}

/* ================= FEEDBACK ================= */

function showFeedback(text) {
  const f = document.getElementById("feedback");
  if (f) f.innerHTML = `<p>${text}</p>`;
}

function showFlash(text, color) {
  const flash = document.createElement("div");
  flash.className = "flash";
  flash.style.color = color;
  flash.textContent = text;
  document.body.appendChild(flash);

  setTimeout(() => flash.remove(), 700);
}

/* ================= NAVIGATION ================= */

window.nextQuestion = function () {
  currentQuestionIndex++;
  if (currentQuestionIndex >= currentLesson.questions.length) {
    showCompletion();
  } else {
    renderQuestion();
  }
};

/* ================= COMPLETION ================= */

function showCompletion() {
  clearTimers();
  const percent = Math.round((score / currentLesson.questions.length) * 100);

  app.innerHTML = `
    <div class="card">
      <h2>🎉 Lesson Complete</h2>
      <p>Score: ${percent}%</p>
      <p>XP Earned: ${xp}</p>
      <button onclick="renderLessons()">Back to Lessons</button>
    </div>
  `;
}

/* ================= GLOBAL ================= */
window.renderLessons = renderLessons;
