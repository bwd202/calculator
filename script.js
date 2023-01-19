const calculator = {
  value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  function: {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    },
    percent(a, b) {
      return (a / 100) * b;
    },
  },
};

// console.log(calculator.function.percent(25, 200));
const clearScreen = function () {
  display.innerText = "0";
};

const acBtn = document
  .getElementById("ac-btn")
  .addEventListener("click", clearScreen);

const display = document.getElementById("display");
let displayValue = 0;

const consoleLog = function (e) {
  display.innerText += e.target.innerText;
};

const numberBtn = document.querySelectorAll(".number-btn").forEach((btn) => {
  btn.addEventListener("click", consoleLog);
});
