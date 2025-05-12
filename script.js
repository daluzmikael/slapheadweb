const codeMap = {
    "damn": "songs/damn.html",
    "slap": "songs/slap.html"
  };
  
  function handleCodeSubmit() {
    const input = document.getElementById("codeInput").value.trim().toLowerCase();
    if (codeMap[input]) {
      window.location.href = codeMap[input];
    } else {
      alert("Invalid code. Try again.");
    }
  }
  