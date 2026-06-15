function check() {
  let n = Number(document.getElementById("num").value);

  if (n > 0) {
    document.getElementById("result").innerText = "Positive";
  } else if (n < 0) {
    document.getElementById("result").innerText = "Negative";
  } else {
    document.getElementById("result").innerText = "Zero";
  }
}
