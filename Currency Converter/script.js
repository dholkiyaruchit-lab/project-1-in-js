function toUSD() {

  let rupees = Number(document.getElementById("amount").value);

  let usd = rupees / 86;

  document.getElementById("result").innerText =
    "USD = $" + usd;
}

function toINR() {

  let usd = Number(document.getElementById("amount").value);

  let rupees = usd * 86;

  document.getElementById("result").innerText =
    "INR = ₹" + rupees;
}