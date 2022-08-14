//Normal Function
function sayHello(a, b) {
  console.log("Normal Function :- Welcome the class! :- ", a + b);
}
sayHello(12, 34);

//Function Expression -> ES5
let funExpression = function (a, b) {
  console.log("Function Expression :- Welcome the class!! :- ", a + b);
};
funExpression(12, 34);

//Arrow Function ES6
let arrowFun = (a, b) => {
  console.log("Arrow function, Sum is ", a + b);
};

arrowFun(10, 20);

let add = (a, b) => {
  return a + b;
};

let addSim = (a, b) => a + b;

let sqauare = (number) => {
  return number * number;
};

let squareSim = (number) => number * number;
//--------------------------------------------------------------
//Normal Function
function add(a, b) {
  return a + b;
}
add(10, 23);

//Function Expression -> ES5
let addFE = function (a, b) {
  return a + b;
};
addFE(10, 23);

//Arrow Function ES6
let addAF = (a, b) => {
  return a + b;
};
addAF(10, 23);

//Arrow Function ES6 -> Simplified
let addAFSimplified = (a, b) => a + b;
addAFSimplified(10, 23);
