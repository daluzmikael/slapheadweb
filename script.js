const codeMap = {
  "song1": "songs/song1.html",
  "song2": "songs/song2.html"
};

function handleCodeSubmit() {
  const input = document.getElementById("codeInput").value.trim().toLowerCase().replace(/\s/g, "");
  if (codeMap[input]) {
    window.location.href = codeMap[input];
  } else {
    alert("Invalid code. Try again.");
  }
}
