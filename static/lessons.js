// --- GLOBAL FUNCTIONS ---
window.toggleDark = function () {
  document.body.classList.toggle("dark");
};// static/lessons.js
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
  // Clear main div
  appDiv.innerHTML = `<header>
    <h1>Mentis 🧠 - Grade 8 Maths</h1>
    <div class="toggle" onclick="toggleDark()">🌒</div>
  </header>`;

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

// Progress tracker (fixed for sub-questions)
const totalSteps = currentLesson.questions.reduce(
  (sum, q) => sum + (q.subQuestions ? q.subQuestions.length : 1),
  0
);

const completedSteps =
  currentLesson.questions
    .slice(0, currentQuestionIndex)
    .reduce((sum, q) => sum + (q.subQuestions ? q.subQuestions.length : 1), 0)
  + currentSubQuestionIndex;

const percent = Math.floor((completedSteps / totalSteps) * 100);
tracker.innerText = `Progress: ${percent}%`;

  // Current question
  const questionObj = currentLesson.questions[currentQuestionIndex];
  let text = questionObj.question;
  if (questionObj.subQuestions && currentSubQuestionIndex < questionObj.subQuestions.length) {
  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Continue";
  nextBtn.onclick = () => {
    currentSubQuestionIndex++;
    renderLessonView();
  };
  appDiv.appendChild(nextBtn);
}
  const questionDiv = document.createElement("div");
  questionDiv.className = "card";
  questionDiv.innerHTML = `
    <h3>Question ${currentQuestionIndex + 1} ${
questionObj.subQuestions ? `(Sub ${Math.max(currentSubQuestionIndex,1)})` : ""
}</h3>
    <p>${text}</p>
    <button id="showAnswer">Show Answer</button>
  `;
  appDiv.appendChild(questionDiv);

  document.getElementById("showAnswer").onclick = () => {
    showAnswer(questionObj);
  };
}

function showAnswer(questionObj) {
  const answerDiv = document.createElement("div");
  answerDiv.className = "card";
  answerDiv.innerHTML = `<strong>Answer:</strong> ${questionObj.answer}`;
  appDiv.appendChild(answerDiv);

  // Handle sub-questions
  if (questionObj.subQuestions && currentSubQuestionIndex < questionObj.subQuestions.length) {
    currentSubQuestionIndex++;
    setTimeout(renderLessonView, 1000); // Proceed to next sub-question
  } else {
    currentSubQuestionIndex = 0;
    currentQuestionIndex++;
    if (currentQuestionIndex < currentLesson.questions.length) {
      const nextBtn = document.createElement("button");
      nextBtn.innerText = "Next Question";
      nextBtn.onclick = renderLessonView;
      appDiv.appendChild(nextBtn);
    } else {
      // Lesson complete
      const completeDiv = document.createElement("div");
      completeDiv.className = "card";
      completeDiv.innerHTML = `<h3>Lesson Complete!</h3>
      <button onclick="renderLessons()">Back to Lessons</button>`;
      appDiv.appendChild(completeDiv);
    }
  }
}

// --- Initial Render ---
renderLessons();
