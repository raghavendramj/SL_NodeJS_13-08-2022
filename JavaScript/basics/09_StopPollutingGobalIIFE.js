//By placing functions and variables inside an immediately invoked function expression,
//you can avoid polluting them to the global object:

(function () {
  var counter = 0; // This will not be appended to window/gobal object!
  function divide(a, b) {
    if (a > b) {
      return a / b;
    } else {
      return b / a;
    }
  }

  console.log("Division logic :- ", divide(30, 5));
  console.log("Division logic :- ", divide(6, 56));
})();
