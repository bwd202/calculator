let temp = [];
let num1 = [];
let num2 = [];
const screen = document.getElementById("screen");

const numBtn = document.querySelectorAll(".number-btn");

numBtn.forEach((btn) => btn.addEventListener("click", getNum));

function getNum(e) {
  console.log(e.target.textContent);
  num1.push(e.target.textContent);
  if (screen.firstChild.textContent == 0) {
    screen.removeChild(screen.firstChild);
  }
  screen.appendChild(document.createTextNode(e.target.textContent));
}

const clearScreen = function () {
  // console.log(screen.textContent);
  screen.textContent = 0;
};

const acBtn = document
  .getElementById("ac-btn")
  .addEventListener("click", clearScreen);
