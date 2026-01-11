// static/lessons.js
import { grade8MathLessons } from "./data/grade8MathLessons.js";

const app = document.querySelector(".app");

let currentLesson = null;
let currentMode = null;
let currentQuestionIndex = 0;
let correctCount = 0;
let timedInterval = null;
let timeRemaining = 0;
let totalQuestions = 0;

const xpPerQuestion = 10; // example XP

/* ---------------- HELPERS ---------------- */

function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

/* ---------------- RENDER LESSON LIST ---------------- */

function createCard(lesson, index) {
  const card = createElement("div", "card");

  const title = createElement("h3", null, lesson.title);
  const summary = createElement("p", null, lesson.summary);

  const button = createElement("button", null, "Start Lesson");
  button.onclick = () => showModeSelection(index);

  card.append(title, summary, button);
  return card;
}

function renderLessons() {
  app.innerHTML = "";
  const header = createElement("header");
  const h1 = createElement("h1", null, "Mentis 🧠 - Grade 8 Maths");
  header.appendChild(h1);
  app.appendChild(header);

  grade8MathLessons.forEach((lesson, index) => {
    app.appendChild(createCard(lesson, index));
  });
}

/* ---------------- MODE SELECTION ---------------- */

function showModeSelection(lessonIndex) {
  currentLesson = grade8MathLessons[lessonIndex];
  currentQuestionIndex = 0;
  correctCount = 0;
  app.innerHTML = "";

  const title = createElement("h2", null, currentLesson.title);
  const p = createElement("p", null, "Choose a mode to start:");

  const normalBtn = createElement("button", "mode-btn", "Normal");
  const timedBtn = createElement("button", "mode-btn", "Timed");

  normalBtn.onclick = () => startLesson("normal");
  timedBtn.onclick = () => startLesson("timed");

  const container = createElement("div");
  container.style.display = "flex";
  container.style.gap = "10px";
  container.append(normalBtn, timedBtn);

  app.append(title, p, container);
}

/* ---------------- START LESSON ---------------- */

function startLesson(mode) {
  currentMode = mode;
  currentQuestionIndex = 0;
  correctCount = 0;
  totalQuestions = currentLesson.questions.length;

  app.innerHTML = "";
  renderQuestion();
}

/* ---------------- RENDER QUESTION ---------------- */

function renderQuestion() {
  app.innerHTML = "";

  const questionObj = currentLesson.questions[currentQuestionIndex];

  // Progress bar
  const progressContainer = createElement("div", "progress");
  const progressFill = createElement("div", "progress-fill");
  progressFill.style.width = `${((currentQuestionIndex) / totalQuestions) * 100}%`;
  progressContainer.appendChild(progressFill);

  // Question number
  const qNum = createElement("p", "q-num", `Question ${currentQuestionIndex + 1} of ${totalQuestions}`);

  // Question text
  const qText = createElement("h3", "question", questionObj.question);

  // Timer display
  let timerDisplay = null;
  if (currentMode === "timed") {
    timeRemaining = 15; // 15 seconds per question
    timerDisplay = createElement("p", "timer", `⏱ ${timeRemaining}s`);
    timedInterval = setInterval(() => {
      timeRemaining--;
      if (timeRemaining < 0) handleAnswer(null);
      else timerDisplay.textContent = `⏱ ${timeRemaining}s`;
    }, 1000);
  }

  // Options
  const optionsContainer = createElement("div", "options-container");
  questionObj.options.forEach((opt, idx) => {
    const optBtn = createElement("button", "option-btn", opt);
    optBtn.onclick = () => handleAnswer(idx);
    optionsContainer.appendChild(optBtn);
  });

  // Assemble
  if (timerDisplay) app.append(timerDisplay);
  app.append(qNum, progressContainer, qText, optionsContainer);
}

/* ---------------- HANDLE ANSWER ---------------- */

function handleAnswer(selectedIndex) {
  clearInterval(timedInterval);

  const questionObj = currentLesson.questions[currentQuestionIndex];
  const optionsBtns = document.querySelectorAll(".option-btn");

  // If timed mode, flash correct answer
  if (currentMode === "timed") {
    optionsBtns.forEach((btn, i) => {
      if (i === questionObj.correctIndex) btn.style.background = "green";
      else if (i === selectedIndex) btn.style.background = "red";
      btn.disabled = true;
    });
    // Flash correct answer in center
    const flash = createElement("div", "flash-answer", questionObj.options[questionObj.correctIndex]);
    flash.style.position = "absolute";
    flash.style.top = "50%";
    flash.style.left = "50%";
    flash.style.transform = "translate(-50%, -50%)";
    flash.style.fontSize = "48px";
    flash.style.color = "lime";
    flash.style.fontWeight = "bold";
    app.appendChild(flash);
    setTimeout(() => {
      flash.remove();
      nextQuestion();
    }, 800); // show briefly
    if (selectedIndex === questionObj.correctIndex) correctCount++;
    return;
  }

  // Normal mode feedback
  if (selectedIndex === questionObj.correctIndex) {
    correctCount++;
    alert(["Great job!", "Nice work!", "Fantastic!", "Amazing!"][Math.floor(Math.random() * 4)]);
  } else {
    alert(`❌ ${questionObj.explanation}`);
  }

  nextQuestion();
}

/* ---------------- NEXT QUESTION ---------------- */

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < totalQuestions) {
    renderQuestion();
  } else {
    showCompletion();
  }
}

/* ---------------- COMPLETION SCREEN ---------------- */

function showCompletion() {
  app.innerHTML = "";
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);
  const xpGained = correctCount * xpPerQuestion;

  const title = createElement("h2", "completion-title", "Lesson Complete!");
  const score = createElement("p", null, `Score: ${scorePercent}%`);
  const xp = createElement("p", null, `XP Gained: ${xpGained}`);

  const continueBtn = createElement("button", null, "Back to Lessons");
  continueBtn.onclick = () => renderLessons();

  app.append(title, score, xp, continueBtn);
}

/* ---------------- INIT ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderLessons();
});
