// window.addEventListener("click", operate);

// function operate(op, num1, num2) {
//   //add EventListener to op-btn

//   const opFn = function (e) {
//     console.log(e.target.textContent);

//     let opBtn = document
//       .querySelectorAll(".operator-btn")
//       .forEach((btn) => btn.addEventListener("click", opFn));
//   };
// }

let opBtn = document.querySelectorAll(".operator-btn");

opBtn.forEach((btn) => {
  btn.addEventListener("click", op);
  btn.addEventListener("click", num1);
});

function op(e) {
  //   console.log(e.target.textContent);
}

//saves display value
function num1() {
  console.log(screen.textContent);
  //   return screen.textContent;
}

let screen = document.getElementById("screen");

let numBtn = document.querySelectorAll(".number-btn");

numBtn.forEach((num) => {
  num.addEventListener("click", dispTxt);
  num.addEventListener("click", num2Fn);
});

function dispTxt(e) {
  //   console.log(e.target.textContent);

  //removes leading zero
  if (screen.firstChild.nodeValue == 0) {
    screen.removeChild(screen.firstChild);
  }

  screen.appendChild(document.createTextNode(e.target.textContent));
}

//attempts to save second num on the screen
function num2Fn(e) {
  //   console.log("1");

  if (op) {
    screen.appendChild(document.createTextNode(e.target.textContent));
  }
}

//clear screen
const clearScreen = function () {
  // console.log(screen.textContent);
  screen.textContent = 0;
};

const acBtn = document
  .getElementById("ac-btn")
  .addEventListener("click", clearScreen);

//save num2 (add this to the num-btn click event)
function num2() {}
