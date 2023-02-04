let temp = [];
let num1 = [];
let num2 = [];
let op = "";

/* OPERATIONS */

function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
function plusMinus(a) {
  return a * -1;

  //   let value = parseInt(screen.textContent);
  //   value *= -1;
  //   console.log(value);

  //   screen.insertBefore(document.createTextNode("-"), screen.firstChild);

  //   let minus = ["-"];

  //   if (num1.length > 0) {
  //     num1 = minus.concat(num1);
  //   }
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
function percent(a) {
  return a / 100;
}

/* SCREEN */
const screen = document.getElementById("screen");

function screenLength() {
  //keeps screen aspect ratio by compensating for decreased height
  if (screen.textContent.length > 6) {
    screen.style.fontSize = "45px";
    screen.style.paddingTop = "57px";
  }
}

function resetScreenLength() {
  screen.style.fontSize = "60px";
  screen.style.paddingTop = "40px";
}

/* CLEAR BTN */

const clearScreen = function () {
  // console.log(screen.textContent);
  screen.textContent = 0;
  resetScreenLength();
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
const zeroBtn = document.querySelector("#zero-btn");

const numBtn = document.querySelectorAll(".number-btn");

numBtn.forEach((btn) => btn.addEventListener("click", getNum));

function getNum(e) {
  //   console.log(`You pressed ${e.target.textContent}`);

  //bug-fix: pressing 0 leads to leading zero
  //   if (screen.firstChild.textContent == "0" && e.target.textContent != "0") {
  //     zeroBtn.removeEventListener("click", getNum);
  //   }

  if (num1.length < 9) {
    //no more than 9 nums on the screen; acts like a loop
    if (screen.firstChild.textContent == 0) {
      screen.removeChild(screen.firstChild);
    }

    if (e.target.textContent == "." && num1.length == 0) {
      num1.push(0);
    }
    num1.push(e.target.textContent);
    // console.log(num1);

    //show num on the screen, gets rid of leading 0s automatically
    screen.textContent = num1.join("");
  }

  screenLength();
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

  if (op == "%") {
    operate();
  }

  //   num1 = temp.slice(); // BUG??

  //   temp = [];

  numBtn.forEach((btn) => btn.removeEventListener("click", getNum));
  numBtn.forEach((btn) => btn.addEventListener("click", getNum2));
}

function getNum2(e) {
  //   console.log(`You pressed ${e.target.textContent}`);

  resetScreenLength();

  if (num2.length < 9) {
    num2.push(e.target.textContent);

    // console.log(num2);

    //show num on the screen
    screen.textContent = num2.join("");
  }

  screenLength();

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
  //fixes bug where pressing equal btn blanks the screen
  if (num1.length > 0 && num2.length > 0) {
    let result = "";
    num1 = Number.parseFloat(num1.join(""));
    num2 = Number.parseFloat(num2.join(""));
    console.log(num1);
    console.log(num2);

    switch (op) {
      // case "+/-":
      //   result = plusMinus(num1);
      //   break;
      case "/":
        result = divide(num1, num2).toPrecision(9);
        break;
      case "%":
        result = percent(num1);
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
    console.log(result);

    screen.textContent = result;

    if (screen.textContent.length > 6) {
      screenLength();
    }

    //saving the result of num1 and num2 in an array
    temp = result.toString().split("");

    num1 = temp;
    num2 = [];

    console.log("You pressed the = button");
    //   console.log(num1);
    //   console.log(num2);

    return temp;
  }
}

const plusMinusBtn = document.querySelector("#plus-minus-btn");

// plusMinusBtn.addEventListener("click", plusMinus);
