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
// function plusMinus() {
//   if (num1.length > 0) {
//     num1.unshift("-");
//     return (screen.textContent = num1.join(""));
//   }

//   let value = parseInt(screen.textContent);
//   value *= -1;
//   console.log(value);

//   screen.insertBefore(document.createTextNode("-"), screen.firstChild);

//   let minus = ["-"];

//   if (num1.length > 0) {
//     num1 = minus.concat(num1);
//   }

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
  screen.textContent = "0";
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

const numBtn = document.querySelectorAll(".number-btn");

numBtn.forEach((btn) => btn.addEventListener("click", getNum));

function getNum(e) {
  //   console.log(`You pressed ${e.target.textContent}`);

  if (num1.length < 9) {
    //no more than 9 nums on the screen; acts like a loop
    if (screen.firstChild.textContent == 0) {
      screen.removeChild(screen.firstChild);
    }

    if (e.target.textContent == "+/-" && num1[0] != "-") {
      num1.unshift("-");
    }

    if (e.target.textContent == "." && num1.length == 0) {
      num1.push("0");
    }

    if (e.target.textContent != "+/-") {
      num1.push(e.target.textContent);
    }

    // console.log(num1);

    //show num on the screen, gets rid of leading 0s automatically
    screen.textContent = num1.join("");
  }

  screenLength();
}

/* OPERATOR BTNS */

// const plusMinus2 = document.querySelector("#plus-minus-btn");

// plusMinus2.addEventListener("click", plusMinus);

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
    if (e.target.textContent == "." && num2.length == 0) {
      num2.push("0");
    }
    num2.push(e.target.textContent);

    // console.log(num2);

    //show num on the screen
    screen.textContent = num2.join("");
  }

  screenLength();
}

const equalBtn = document.getElementById("equality-btn");

equalBtn.addEventListener("click", operate);

function operate() {
  //fixes bug where pressing equal btn blanks the screen
  if (num1.length > 0 && num2.length > 0) {
    let result = 0;
    x = Number.parseFloat(num1.join(""));
    y = Number.parseFloat(num2.join(""));

    // x = Number.parseInt(num1.join(""));
    // y = Number.parseInt(num2.join(""));

    console.log(x);
    console.log(y);

    switch (op) {
      // case "+/-":
      //   result = plusMinus(num1);
      //   break;
      case "/":
        result = divide(x, y).toPrecision(9);
        break;
      case "%":
        result = percent(x);
        break;
      case "x":
        result = multiply(x, y);
        break;
      case "-":
        result = subtract(x, y);
        break;
      case "+":
        result = add(x, y);
    }
    console.log(result);

    //prevents screen overflow with big numbers
    if (result > 999999999) {
      let x = result * 0.1;
      screen.textContent = x.toPrecision(1);
    } else if (result.toString().length > 8) {
      //   console.log("hello");
      //   screen.style.fontSize = "40px";
      //   screen.style.paddingTop = "62px";
      screen.style.fontSize = "45px";
      screen.style.paddingTop = "57px";
      screen.textContent = result;
    } else {
      screen.textContent = result;
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
