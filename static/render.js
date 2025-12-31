const md = window.markdownit({
  html: false,
  linkify: true,
  breaks: true
});

function renderAnswer(raw) {
  return md.render(raw || "");
}
