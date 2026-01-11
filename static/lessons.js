// static/lessons.js
import { grade8MathLessons } from "./data/grade8MathLessons.js";

console.log("LESSONS.JS LOADED");

const app = document.querySelector(".app");

if (!app) {
  console.error("❌ .app NOT FOUND");
}

/* ---------------- HELPERS ---------------- */

function createCard(lesson, index) {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = lesson.title;

  const summary = document.createElement("p");
  summary.textContent = lesson.summary;

  const button = document.createElement("button");
  button.textContent = "Start Lesson";
  button.onclick = () => startLessonMenu(index);

  card.append(title, summary, button);
  return card;
}

/* ---------------- RENDER LESSON LIST ---------------- */

function renderLessons() {
  app.innerHTML = `<header><h1>Mentis 🧠 - Grade 8 Maths</h1></header>`;
  grade8MathLessons.forEach((lesson, index) => {
    app.appendChild(createCard(lesson, index));
  });
}

/* ---------------- LESSON FLOW ---------------- */

let currentLesson = null;
let currentQuestions = [];
let currentIndex = 0;
let xp = 0;
let streak = 0;
let timer = null;
let timeRemaining = 0;

function startLessonMenu(index) {
  currentLesson = grade8MathLessons[index];
  app.innerHTML = `
    <div class="card">
      <h2>${currentLesson.title}</h2>
      <p>Choose mode:</p>
      <button id="normal-mode">Normal</button>
      <button id="timed-mode">Timed</button>
    </div>
  `;

  document.getElementById("normal-mode").onclick = () => startLesson("normal");
  document.getElementById("timed-mode").onclick = () => startLesson("timed");
}

function startLesson(mode) {
  currentQuestions = [...currentLesson.questions];
  if (mode === "timed") shuffle(currentQuestions);
  currentIndex = 0;

  if (mode === "timed") {
    timeRemaining = currentQuestions.length * 15; // 15 sec per question
    startTimer();
  }

  renderQuestion();
}

/* ---------------- TIMER ---------------- */

function startTimer() {
  const timerDiv = document.createElement("div");
  timerDiv.id = "timer";
  timerDiv.style.color = "#fff";
  app.prepend(timerDiv);

  timer = setInterval(() => {
    timeRemaining--;
    timerDiv.textContent = `Time: ${timeRemaining}s`;
    if (timeRemaining <= 0) {
      clearInterval(timer);
      alert("Time's up!");
      endLesson();
    }
  }, 1000);
}

/* ---------------- RENDER QUESTION ---------------- */

function renderQuestion() {
  if (currentIndex >= currentQuestions.length) return endLesson();

  const q = currentQuestions[currentIndex];
  app.innerHTML = `
    <div class="card fade-in">
      <p>Question ${currentIndex + 1} of ${currentQuestions.length}</p>
      <h3>${q.question}</h3>
      <div class="options"></div>
      <div class="progress">
        <div class="progress-fill" style="width:${((currentIndex)/currentQuestions.length)*100}%;"></div>
      </div>
    </div>
  `;

  const optionsDiv = app.querySelector(".options");
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(idx, q.correctIndex, q.explanation);
    optionsDiv.appendChild(btn);
  });
}

/* ---------------- CHECK ANSWER ---------------- */

function checkAnswer(selected, correct, explanation) {
  const isCorrect = selected === correct;
  if (isCorrect) {
    xp += 10;
    streak++;
    alert(["Great job!", "Amazing!", "Fantastic!", "Nice work!", "That was a hard one!"][Math.floor(Math.random()*5)]);
  } else {
    streak = 0;
    alert("Wrong! " + explanation);
  }

  currentIndex++;
  renderQuestion();
}

/* ---------------- END LESSON ---------------- */

function endLesson() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  app.innerHTML = `
    <div class="card">
      <h2>Lesson Completed!</h2>
      <p>XP earned: ${xp}</p>
      <p>Streak: ${streak}</p>
      <button id="back">Back to Lessons</button>
    </div>
  `;
  document.getElementById("back").onclick = () => renderLessons();
}

/* ---------------- UTIL ---------------- */

function shuffle(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* ---------------- INIT ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderLessons();
});
