console.log("LESSONS.JS LOADED");

const app = document.querySelector(".app");

if (!app) {
  console.error("❌ .app NOT FOUND");
} else {
  app.innerHTML = `
    <h1 style="color:white">Mentis JS is running ✅</h1>
    <p style="color:white">Lessons.js loaded correctly.</p>
  `;
                                   }
// --- INIT ---
window.addEventListener("DOMContentLoaded", () => {
  renderLessons();
});
