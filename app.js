function generateShort() {
  const topic = document.querySelector("input").value;

  if (topic === "") {
    alert("Please enter a video topic.");
  } else {
    alert("Generating AI Short for: " + topic);
  }
}
