const bill = document.querySelector("#bill");
let tip = document.querySelector("#serviceLevel");
const peopleCount = document.querySelector("#peopleCount");
const submitButton = document.querySelector(".submitButton");
const yourtotal = document.querySelector("#yourTotal");

submitButton.addEventListener("click", calculate);

function calculate(e) {
  e.preventDefault();
  let totalBill = +bill.value + bill.value * (tip.value / 100);
  if (+peopleCount.value > 1) {
    totalBill = totalBill / peopleCount.value;
  }
  yourTotal.textContent = totalBill;
}
