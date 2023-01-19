calculator = {
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

console.log(calculator.function.percent(25, 200));
