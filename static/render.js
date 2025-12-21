const md = window.markdownit({
  html: false,
  linkify: true,
  breaks: true
});

function renderAnswer(raw) {
  const container = document.getElementById("output");
  container.innerHTML = md.render(raw);

  renderMathInElement(container, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ]
  });
  }
