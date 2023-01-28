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
  //   console.log(e.target.textContent);
  if (num1.length < 11) {
    if (screen.firstChild.textContent == 0) {
      screen.removeChild(screen.firstChild);
    }
    num1.push(e.target.textContent);

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
  //   console.log(e.target.textContent);
  let called = false;

  if (called) {
    numBtn.forEach((btn) => btn.removeEventListener("click", getNum2));
    numBtn.forEach((btn) => btn.addEventListener("click", getTemp));
  }

  op = e.target.textContent;
  numBtn.forEach((btn) => btn.removeEventListener("click", getNum));
  numBtn.forEach((btn) => btn.addEventListener("click", getNum2));

  return function () {
    if (!called) {
      console.log("hello");
      called = true;
    }
  };
}

function getTemp(e) {
  console.log("hello again");
}

function getNum2(e) {
  //   console.log(e.target.textContent);

  if (!num2) {
    num2.push(e.target.textContent);
    screen.textContent = num2.join("");
  } else if (num2) {
    temp.push(e.target.textContent);
  }

  //   screen.appendChild(document.createTextNode(e.target.textContent));
}

const equalBtn = document.getElementById("equality-btn");

equalBtn.addEventListener("click", operate);

function operate() {
  //   console.log(num1, op, num2);

  num1 = num1.join("");
  num2 = num2.join("");
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
}
