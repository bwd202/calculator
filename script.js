const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const percent = function (a, b) {
  //a percent of b
  return (a / 100) * b;
};

const operate = function (operator, a, b) {
  return operator(a, b);
};

let screen = document.getElementById("screen");

const allClear = function (e) {
  // console.log(e);
  screen.innerHTML = "<span>&nbsp;</span>";
};

let acBtn = document
  .querySelector("#ac-btn")
  .addEventListener("click", allClear);

const plusMinus = function () {};

/* BUTTONS */
function onClick(e) {
  console.log(e.target.innerText);
}
let buttons = document
  .querySelectorAll(".row div")
  .forEach((btn) => btn.addEventListener("click", onClick));
