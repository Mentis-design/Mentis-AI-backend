console.log("render.js loaded ✅");

document.getElementById("ask-btn").addEventListener("click", async () => {
  console.log("Ask button clicked");

  const q = document.getElementById("question").value;
  if (!q) {
    alert("No question typed");
    return;
  }

  try {
    const res = await fetch("/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q })
    });

    console.log("Response status:", res.status);

    const data = await res.json();
    console.log("Response JSON:", data);

    document.getElementById("answer").innerText = data.answer || data.error;
  } catch (e) {
    alert("FETCH FAILED ❌");
    console.error(e);
  }
});
