function check() {
  let n = Number(document.getElementById("num").value);

  if (n % 2 === 0) {
    document.getElementById("result").innerText = "Even";
  } else {
    document.getElementById("result").innerText = "Odd";
  }
}