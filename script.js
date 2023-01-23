//OPERATIONS

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function percent(a, b) {
  return (a / 100) * b;
}

// console.log(calculator.function.percent(25, 200));

/* SCREEN */

const screen = document.getElementById("screen");

const displayValue = function (e) {
  //removes leading zero
  if (screen.firstChild.nodeValue == 0) {
    screen.removeChild(screen.firstChild);
  }
  screen.appendChild(document.createTextNode(`${e.target.textContent}`));

  // console.log(screen.textContent);
};

const clearScreen = function () {
  // console.log(screen.textContent);
  screen.textContent = 0;
};

/* BUTTONS */

const acBtn = document
  .getElementById("ac-btn")
  .addEventListener("click", clearScreen);

const numberBtn = document.querySelectorAll(".number-btn").forEach((btn) => {
  btn.addEventListener("click", displayValue);
});

//this saves the input

const lastVal = function () {
  console.log(screen.textContent);
  return screen.textContent;
};

//pressing an operator saves the current value, clears screen upon entering a new digit
const operatorBtn = document
  .querySelectorAll(".operator-btn")
  .forEach((btn) => {
    btn.addEventListener("click", lastVal);
  });
