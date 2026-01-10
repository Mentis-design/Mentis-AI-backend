// static/lessons.js
import { grade8MathLessons } from "./data/grade8MathLessons.js";

console.log("LESSONS.JS LOADED");

const appDiv = document.querySelector(".app");

if (!appDiv) {
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
  button.onclick = () => startLesson(index);

  card.append(title, summary, button);
  return card;
}

/* ---------------- RENDER LESSON LIST ---------------- */

function renderLessons() {
  appDiv.innerHTML = `
    <header>
      <h1>Mentis 🧠 - Grade 8 Maths</h1>
    </header>
  `;

  grade8MathLessons.forEach((lesson, index) => {
    appDiv.appendChild(createCard(lesson, index));
  });
}

/* ---------------- LESSON FLOW (STUB FOR NOW) ---------------- */

function startLesson(index) {
  alert("Lesson clicked: " + grade8MathLessons[index].title);
}

/* ---------------- INIT ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Lessons found:", grade8MathLessons.length);
  renderLessons();
});
