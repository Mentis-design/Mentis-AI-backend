// --- GLOBAL FUNCTIONS ---
window.toggleDark = function () {
  document.body.classList.toggle("dark");
};

import { grade8MathLessons } from "./data/grade8MathLessons.js";

const appDiv = document.querySelector(".app");

// --- State ---
let currentLesson = null;
let currentQuestionIndex = 0;
let currentSubQuestionIndex = 0;

// --- Helpers ---
function createCard(lesson, index) {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h3");
  title.innerText = lesson.title;

  const summary = document.createElement("p");
  summary.innerText = lesson.summary;

  const button = document.createElement("button");
  button.innerText = "Start Lesson";
  button.onclick = () => startLesson(index);

  card.appendChild(title);
  card.appendChild(summary);
  card.appendChild(button);

  return card;
}

function renderLessons() {
  appDiv.innerHTML = `
    <header>
      <h1>Mentis 🧠 – Grade 8 Maths</h1>
      <div class="toggle" onclick="toggleDark()">🌒</div>
    </header>
  `;

  grade8MathLessons.forEach((lesson, index) => {
    appDiv.appendChild(createCard(lesson, index));
  });
}

// --- Lesson Flow ---
function startLesson(index) {
  currentLesson = grade8MathLessons[index];
  currentQuestionIndex = 0;
  currentSubQuestionIndex = 0;
  renderLessonView();
}

function renderLessonView() {
  appDiv.innerHTML = "";

  // --- Progress tracker ---
  const tracker = document.createElement("div");
  tracker.className = "card";

  const totalSteps = currentLesson.questions.reduce(
    (sum, q) => sum + (q.subQuestions ? q.subQuestions.length + 1 : 1),
    0
  );

  const completedSteps =
    currentLesson.questions
      .slice(0, currentQuestionIndex)
      .reduce((sum, q) => sum + (q.subQuestions ? q.subQuestions.length + 1 : 1), 0)
    + currentSubQuestionIndex;

  const percent = Math.floor((completedSteps / totalSteps) * 100);
  tracker.innerText = `Progress: ${percent}%`;

  appDiv.appendChild(tracker);

  // --- Current question ---
  const q = currentLesson.questions[currentQuestionIndex];
  const questionText =
    currentSubQuestionIndex === 0
      ? q.question
      : q.subQuestions[currentSubQuestionIndex - 1].question;

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>Question ${currentQuestionIndex + 1}</h3>
    <p>${questionText}</p>
    <button id="showAnswer">Show Answer</button>
  `;
  appDiv.appendChild(card);

  document.getElementById("showAnswer").onclick = () => {
    showAnswer(q);
  };
}

function showAnswer(q) {
  const answerCard = document.createElement("div");
  answerCard.className = "card";

  const explanation =
    currentSubQuestionIndex === 0
      ? q.explanation
      : q.subQuestions[currentSubQuestionIndex - 1].explanation;

  answerCard.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
  appDiv.appendChild(answerCard);

  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Continue";

  nextBtn.onclick = () => {
    if (q.subQuestions && currentSubQuestionIndex < q.subQuestions.length) {
      currentSubQuestionIndex++;
    } else {
      currentSubQuestionIndex = 0;
      currentQuestionIndex++;
    }

    if (currentQuestionIndex < currentLesson.questions.length) {
      renderLessonView();
    } else {
      renderLessons();
    }
  };

  appDiv.appendChild(nextBtn);
}

// --- Initial render ---
renderLessons();
