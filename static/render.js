const md = window.markdownit({
  html: false,
  linkify: true,
  breaks: true
});

function renderAnswer(raw) {
  const container = document.getElementById("answer"); // target the answer div
  container.innerHTML = md.render(raw || "");          // insert rendered HTML

  // Render MathJax equations in the container
  renderMathInElement(container, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ]
  });
}
