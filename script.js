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

let numberBtn = document.querySelectorAll(".number-btn").forEach((btn) => {
  btn.addEventListener("click", displayValue);
});

//saves display value
const lastVal = function () {
  //   console.log(screen.textContent);
  return screen.textContent;
};

//saves operator
const whichOperator = function (e) {
  //   console.log(e.target.textContent);
  return e.target.textContent;
};

const removeHandler = function () {
  document
    .querySelectorAll(".number-btn")
    .forEach((btn) => btn.removeEventListener("click", displayValue));
};

const operatorBtn = document
  .querySelectorAll(".operator-btn")
  .forEach((btn) => {
    btn.addEventListener("click", lastVal);
    btn.addEventListener("click", whichOperator);
    btn.addEventListener("click", removeHandler);
  });
