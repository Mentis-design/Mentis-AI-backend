// static/lessons.js
import { grade8MathLessons } from "./data/grade8MathLessons.js";

console.log("LESSONS.JS LOADED");

document.addEventListener("DOMContentLoaded", () => {
  const appDiv = document.querySelector(".app");

  if (!appDiv) {
    console.error("❌ .app NOT FOUND");
    return;
  }

  if (!grade8MathLessons || grade8MathLessons.length === 0) {
    appDiv.innerHTML = `
      <h1 style="color:white">Mentis 🧠</h1>
      <p style="color:white">No lessons found.</p>
    `;
    console.warn("⚠️ grade8MathLessons is empty");
    return;
  }

  renderLessons(appDiv);
});

/* ---------------- RENDER LESSON LIST ---------------- */

function renderLessons(appDiv) {
  appDiv.innerHTML = `
    <header>
      <h1>Mentis 🧠 - Grade 8 Maths</h1>
    </header>
  `;

  grade8MathLessons.forEach((lesson, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = lesson.title;

    const summary = document.createElement("p");
    summary.textContent = lesson.summary;

    const button = document.createElement("button");
    button.textContent = "Start Lesson";
    button.addEventListener("click", () => {
      startLesson(index);
    });

    card.appendChild(title);
    card.appendChild(summary);
    card.appendChild(button);

    appDiv.appendChild(card);
  });
}

/* ---------------- START LESSON ---------------- */

function startLesson(index) {
  alert(`Lesson clicked: ${grade8MathLessons[index].title}`);
    }
