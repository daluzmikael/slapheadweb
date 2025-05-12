const codeMap = {
  "drunktrunk": "songs/drunktrunk.html",
  "saveme": "songs/saveme.html"
};

function handleCodeSubmit() {
  const input = document.getElementById("codeInput").value.trim().toLowerCase().replace(/\s/g, "");
  if (codeMap[input]) {
    window.location.href = codeMap[input];
  } else {
    alert("Invalid code. Try again.");
  }
}
