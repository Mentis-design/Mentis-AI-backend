import { grade8MathLessons } from "./data/grade8MathLessons.js";

const appDiv = document.querySelector(".app");

function renderLessons() {
  appDiv.innerHTML = `
    <h1>Mentis 🧠 – Grade 8 Maths</h1>
  `;

  grade8MathLessons.forEach((lesson) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${lesson.title}</h3>
      <p>${lesson.summary}</p>
    `;
    appDiv.appendChild(card);
  });
}

renderLessons();
