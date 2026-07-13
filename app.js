function generateShort() {
  const topic = document.querySelector("input").value;
  const result = document.getElementById("result");

  if (topic === "") {
    result.innerHTML = "❌ Please enter a video topic.";
    return;
  }

  result.innerHTML = "⏳ AI is generating your short...";

  setTimeout(function () {
    result.innerHTML =
      "✅ Your AI Short about <b>" + topic + "</b> is ready!";
  }, 3000);
}
