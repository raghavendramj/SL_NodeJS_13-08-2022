//Normal function
function greet() {
  console.log("Welcome");
}

//Function expresion => variable + anonymous function
var add = function (a, b) {
  return a + b;
};
add(12, 22);

//Immediately Invoked Function Expression
(function (a, b) {
  //code ...
  var result = a * b;
  console.log("Result is: ", result);
})(a, b);
