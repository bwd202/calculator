let temp = [];
let num1 = [];
let num2 = [];
let op = "";

/* OPERATIONS */

function add(a, b) {
  return parseInt(a) + parseInt(b);
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

const screen = document.getElementById("screen");

const numBtn = document.querySelectorAll(".number-btn");

numBtn.forEach((btn) => btn.addEventListener("click", getNum));

function getNum(e) {
  console.log(`Push ${e.target.textContent} to num1`);

  if (num1.length < 11) {
    if (screen.firstChild.textContent == 0) {
      screen.removeChild(screen.firstChild);
    }
    num1.push(e.target.textContent);
    console.log("num1 = " + num1);

    screen.textContent = num1.join("");
  }

  //   screen.appendChild(document.createTextNode(e.target.textContent));
}

const clearScreen = function () {
  // console.log(screen.textContent);
  screen.textContent = 0;
  num1 = [];
  num2 = [];
};

const acBtn = document
  .getElementById("ac-btn")
  .addEventListener("click", clearScreen);

const opBtn = document.querySelectorAll(".operator-btn");

opBtn.forEach((btn) => {
  btn.addEventListener("click", getOp);
});

function getOp(e) {
  console.log("Press " + e.target.textContent + " button");

  if (num1.length > 0 && num2.length > 0) {
    operate();
  }

  op = e.target.textContent;

  numBtn.forEach((btn) => btn.removeEventListener("click", getNum));
  numBtn.forEach((btn) => btn.addEventListener("click", getNum2));
}

function getNum2(e) {
  console.log(`Push ${e.target.textContent} to num2`);

  if (typeof num2 == "string") {
    num2 = [];
    num2.push(e.target.textContent);
  } else if (typeof num2 == "object") {
    num2.push(e.target.textContent);
    console.log("num2 = " + num2);

    screen.textContent = num2.join("");
  }

  //   screen.appendChild(document.createTextNode(e.target.textContent));
}

const equalBtn = document.getElementById("equality-btn");

equalBtn.addEventListener("click", operate);

function operate() {
  if (typeof num1 == "object" || typeof num2 == "object") {
    num1 = num1.join("");
    num2 = num2.join("");
  }
  switch (op) {
    case "/":
      screen.textContent = divide(num1, num2);
      break;
    case "x":
      screen.textContent = multiply(num1, num2);
      break;
    case "-":
      screen.textContent = subtract(num1, num2);
      break;
    case "+":
      screen.textContent = add(num1, num2);
      break;
  }
  console.log(num1 + op + num2 + " = " + screen.textContent);
}
