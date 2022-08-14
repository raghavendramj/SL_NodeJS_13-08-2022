// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// Syntax
// function name_of_the_function(param1, param2, ...){
//     //code to be executed!
// }

//a.js
function addNumbers(a, b) {
  var result = a + b;
  console.log("The result is : ", result);
}

//b.js
//This will change the reference of addNumbers function!
function addNumbers() {
  console.log("This is dummy addnumbers");
}

addNumbers(10, 20); //This is dummy addnumbers

function multiply(a, b) {
  var result = a * b;
  console.log("01. The result is : ", result);
  return result;
}
console.log("02. Result :- ", multiply(5, 3));

// var subtract = function -> Anonymous function!
//Function expression
var subtract = function (a, b) {
  var result = a - b; 
  return result;
};

console.log("subtract's type ", typeof subtract);
console.log("subtract's value ", subtract);
console.log("subtract's invocation ", subtract(56, 34));