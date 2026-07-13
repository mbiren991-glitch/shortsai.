function generateShort() {
  const topic = document.querySelector("input").value;
  const result = document.getElementById("result");

  if (topic === "") {
    result.innerHTML = "❌ Please enter a video topic.";
    return;
  }
document.getElementById("preview").style.display = "none";
  result.innerHTML = "⏳ AI is writing your script...";

  setTimeout(function () {
    result.innerHTML = `
      <h3>🎬 AI Script</h3>
      <p><b>Topic:</b> ${topic}</p>

      <p>
      Welcome! Today we'll learn about <b>${topic}</b>.
      Here are three important facts you should know.
      If you enjoyed this short, don't forget to like and subscribe!
      </p>
    `;
  }, 3000);
}
