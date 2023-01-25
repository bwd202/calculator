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
  console.log(e.target.textContent);
}

let screen = document.getElementById("screen");

let numBtn = document.querySelectorAll(".number-btn");

numBtn.forEach((num) => num.addEventListener("click", dispTxt));

function dispTxt(e) {
  //   console.log(e.target.textContent);

  screen.appendChild(document.createTextNode(e.target.textContent));
}

//saves display value
function num1() {
  console.log(screen.textContent);
  //   return screen.textContent;
}
