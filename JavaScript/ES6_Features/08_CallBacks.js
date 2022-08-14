let add = (a, b) => {
  return a + b;
};

let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};

let calculate = (a, b, callBack) => {
  let result = callBack(a, b);
  console.log("Result is :- ", result);
};
calculate(30, 20, add);
calculate(30, 20, subtract);
calculate(30, 20, multiply);
calculate(50, 10, (a, b) => {
  return a / b;
});
