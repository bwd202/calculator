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

/* OPERATORS */

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

//tracks if fn is called
const trackFn = (function () {
  let called = false;
  return function () {
    if (!called) {
      console.log("called");
      called = true;
    }
  };
})();

const operatorBtn = document
  .querySelectorAll(".operator-btn")
  .forEach((btn) => {
    btn.addEventListener("click", lastVal);
    btn.addEventListener("click", whichOperator);
    btn.addEventListener("click", removeHandler);
    btn.addEventListener("click", trackFn);
  });

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

/* I need to create a fn that will check if an operator has been called and then allow number input again */

const operate = function (op, num1, num2) {};
