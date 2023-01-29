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

/* CLEAR BTN */
const screen = document.getElementById("screen");

const clearScreen = function () {
  // console.log(screen.textContent);
  screen.textContent = 0;
  temp = [];
  num1 = [];
  num2 = [];
  numBtn.forEach((btn) => btn.removeEventListener("click", getNum2));
  numBtn.forEach((btn) => btn.addEventListener("click", getNum));
};

const acBtn = document
  .getElementById("ac-btn")
  .addEventListener("click", clearScreen);

/* NUMBERS */

const numBtn = document.querySelectorAll(".number-btn");

numBtn.forEach((btn) => btn.addEventListener("click", getNum));

function getNum(e) {
  console.log(`You pressed ${e.target.textContent}`);

  //no more than 10 nums on the screen; acts like a loop
  if (num1.length < 11) {
    if (screen.firstChild.textContent == 0) {
      screen.removeChild(screen.firstChild);
    }
    num1.push(e.target.textContent);
    console.log(num1);

    //show num on the screen
    screen.textContent = num1.join("");
  }

  //   screen.appendChild(document.createTextNode(e.target.textContent));
}

/* OPERATOR BTNS */

const opBtn = document.querySelectorAll(".operator-btn");

opBtn.forEach((btn) => {
  btn.addEventListener("click", getOp);
});

function getOp(e) {
  console.log("You pressed the " + e.target.textContent + " button");

  //calls operate if the arrays have been initialized
  if (num1.length > 0 && num2.length > 0) {
    operate();
  }

  op = e.target.textContent;

  //   num1 = temp.slice(); // BUG??

  //   temp = [];

  numBtn.forEach((btn) => btn.removeEventListener("click", getNum));
  numBtn.forEach((btn) => btn.addEventListener("click", getNum2));
}

function getNum2(e) {
  console.log(`You pressed ${e.target.textContent}`);

  num2.push(e.target.textContent);

  console.log(num2);

  //show num on the screen
  screen.textContent = num2.join("");

  //   if (typeof num2 == "string") {
  //     num2 = [];
  //     num2.push(e.target.textContent);
  //   } else if (typeof num2 == "object") {
  //     num2.push(e.target.textContent);
  //     console.log(num2);

  //     screen.textContent = num2.join("");
  //   }

  //   screen.appendChild(document.createTextNode(e.target.textContent));
}

const equalBtn = document.getElementById("equality-btn");

equalBtn.addEventListener("click", operate);

function operate() {
  let result = "";
  //   num2 = temp.slice();
  num1 = num1.join("");
  num2 = num2.join("");

  switch (op) {
    case "/":
      result = divide(num1, num2);
      break;
    case "x":
      result = multiply(num1, num2);

      break;
    case "-":
      result = subtract(num1, num2);

      break;
    case "+":
      result = add(num1, num2);
  }
  screen.textContent = result;

  //saving the result of num1 and num2 in an array
  temp = result.toString().split("");

  num1 = temp;
  num2 = [];

  console.log("You pressed the = button");
  console.log(num1);
  console.log(num2);

  return temp;

  //   if (typeof num1 == "object" || typeof num2 == "object") {
  //     num1 = num1.join("");
  //     num2 = num2.join("");
  //   }
}
