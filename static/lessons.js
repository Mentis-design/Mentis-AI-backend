import { grade8MathLessons } from "./data/grade8MathLessons.js";

const app = document.querySelector(".app");

let currentLesson = null;
let questionIndex = 0;
let locked = false;

/* ---------- RENDER LESSON LIST ---------- */
function renderLessons() {
  app.innerHTML = `
    <h1>Mentis 🧠 - Grade 8 Maths</h1>
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
    app.appendChild(card);
  });
}

/* ---------- START LESSON ---------- */
function startLesson(index) {
  currentLesson = grade8MathLessons[index];
  questionIndex = 0;
  showQuestion();
}

/* ---------- SHOW QUESTION ---------- */
function showQuestion() {
  locked = false;
  const q = currentLesson.questions[questionIndex];
  const total = currentLesson.questions.length;
  const progressPercent = ((questionIndex + 1) / total) * 100;

  app.innerHTML = `
    <div class="card fade">
      <p><strong>Question ${questionIndex + 1} of ${total}</strong></p>

      <div class="progress">
        <div class="progress-fill" style="width:${progressPercent}%"></div>
      </div>

      <h3>${q.question}</h3>

      <div id="options"></div>
      <div id="feedback"></div>

      <button id="next-btn" style="display:none;">Next</button>
    </div>
  `;

  const optionsDiv = document.getElementById("options");
  const feedback = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");

  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = opt;

    div.onclick = () => {
      if (locked) return;
      locked = true;

      if (i === q.correctIndex) {
        div.classList.add("correct");
        feedback.textContent =
          q.correctMessage || randomCompliment();
      } else {
        div.classList.add("wrong");
        feedback.textContent = q.explanation;
        optionsDiv.children[q.correctIndex].classList.add("correct");
      }

      nextBtn.style.display = "block";
    };

    optionsDiv.appendChild(div);
  });

  nextBtn.onclick = () => {
    questionIndex++;
    if (questionIndex < total) {
      showQuestion();
    } else {
      showFinish();
    }
  };
}

/* ---------- FINISH ---------- */
function showFinish() {
  app.innerHTML = `
    <div class="card fade">
      <h2>🎉 Lesson Complete!</h2>
      <p>Great work — keep going!</p>
      <button onclick="location.reload()">Back to Lessons</button>
    </div>
  `;
}

/* ---------- COMPLIMENTS ---------- */
function randomCompliment() {
  const compliments = [
    "Great job! 🎉",
    "Amazing work!",
    "Fantastic!",
    "Nice one!",
    "That was a tough one — well done 💪"
  ];
  return compliments[Math.floor(Math.random() * compliments.length)];
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", renderLessons);
