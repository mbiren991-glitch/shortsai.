function generateShort() {
  const topic = document.querySelector("input").value;
  const result = document.getElementById("result");

  if (topic === "") {
    result.innerHTML = "❌ Please enter a video topic.";
  } else {
    result.innerHTML = "🤖 AI is generating a short about: <b>" + topic + "</b>";
  }
}
