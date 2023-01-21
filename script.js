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
// const display = document.getElementById("display");
const screen = document.getElementById("screen");

const zero = document.getElementById("screen").childNodes[0]; //because children[0] does not pick up text nodes

const displayValue = function (e) {
  //removes leading zero
  if (screen.firstChild.nodeValue == 0) {
    screen.removeChild(screen.firstChild);
  }

  screen.appendChild(document.createTextNode(`${e.target.textContent}`));

  return console.log(screen.textContent);
};

const clearScreen = function () {
  screen.textContent = 0;
};

const acBtn = document
  .getElementById("ac-btn")
  .addEventListener("click", clearScreen);

const numberBtn = document.querySelectorAll(".number-btn").forEach((btn) => {
  btn.addEventListener("click", displayValue);
});

//BREATHROUGH!!
let lastNum = screen.textContent;
