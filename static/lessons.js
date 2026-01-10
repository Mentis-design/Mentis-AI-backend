// static/lessons.js
import { grade8MathLessons } from "./data/grade8MathLessons.js";

console.log("LESSONS.JS LOADED");

const app = document.querySelector(".app");

if (!app) {
  console.error("❌ .app NOT FOUND");
}

/* ---------------- STATE ---------------- */

let currentLesson = null;
let currentQuestionIndex = 0;
let currentSubQuestionIndex = 0;

/* ---------------- UTILS ---------------- */

const compliments = [
  "Great job! 🎉",
  "Nice work! 👏",
  "Fantastic! 🔥",
  "Amazing — that was a hard one! 💪",
  "Well done! ✅"
];

function randomCompliment() {
  return compliments[Math.floor(Math.random() * compliments.length)];
}

/* ---------------- RENDER LESSON LIST ---------------- */

function createCard(lesson, index) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${lesson.title}</h3>
    <p>${lesson.summary}</p>
    <button>Start Lesson</button>
  `;

  card.querySelector("button").onclick = () => startLesson(index);
  return card;
}

function renderLessons() {
  app.innerHTML = `
    <header>
      <h1>Mentis 🧠 - Grade 8 Maths</h1>
    </header>
  `;

  grade8MathLessons.forEach((lesson, index) => {
    app.appendChild(createCard(lesson, index));
  });
}

/* ---------------- START LESSON ---------------- */

function startLesson(index) {
  currentLesson = grade8MathLessons[index];
  currentQuestionIndex = 0;
  currentSubQuestionIndex = 0;
  renderQuestion();
}

/* ---------------- QUESTION FLOW ---------------- */

function getCurrentQuestion() {
  const q = currentLesson.questions[currentQuestionIndex];
  if (q.subQuestions && q.subQuestions.length > 0) {
    return q.subQuestions[currentSubQuestionIndex];
  }
  return q;
}

function renderQuestion() {
  const question = getCurrentQuestion();

  app.innerHTML = `
    <div class="card">
      <p>Question ${currentQuestionIndex + 1}
        ${currentLesson.questions[currentQuestionIndex].subQuestions
          ? `.${currentSubQuestionIndex + 1}`
          : ""}
      </p>

      <h3>${question.question}</h3>

      <div id="options"></div>
      <div id="feedback"></div>
    </div>
  `;

  const optionsDiv = document.getElementById("options");
  const feedbackDiv = document.getElementById("feedback");

  question.options.forEach((opt, i) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = opt;

    btn.onclick = () => {
      if (i === question.correctIndex) {
        feedbackDiv.innerHTML = `
          <p style="color:#4ade80">${randomCompliment()}</p>
        `;
        setTimeout(nextStep, 800);
      } else {
        feedbackDiv.innerHTML = `
          <p style="color:#f87171">
            ❌ ${question.explanation}
          </p>
        `;
      }
    };

    optionsDiv.appendChild(btn);
  });
}

/* ---------------- NEXT STEP ---------------- */

function nextStep() {
  const mainQ = currentLesson.questions[currentQuestionIndex];

  if (mainQ.subQuestions && currentSubQuestionIndex < mainQ.subQuestions.length - 1) {
    currentSubQuestionIndex++;
    renderQuestion();
    return;
  }

  // Move to next main question
  currentSubQuestionIndex = 0;
  currentQuestionIndex++;

  if (currentQuestionIndex < currentLesson.questions.length) {
    renderQuestion();
  } else {
    renderLessonComplete();
  }
}

/* ---------------- COMPLETE ---------------- */

function renderLessonComplete() {
  app.innerHTML = `
    <div class="card">
      <h2>Lesson Complete 🎉</h2>
      <p>You finished <strong>${currentLesson.title}</strong></p>
      <button id="back">Back to Lessons</button>
    </div>
  `;

  document.getElementById("back").onclick = renderLessons;
}

/* ---------------- INIT ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Lessons found:", grade8MathLessons.length);
  renderLessons();
});
