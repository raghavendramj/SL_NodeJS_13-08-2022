var subtract = function (a, b) {
  return a + b;
};
console.log(typeof subtract); //'function'

var subtract = function (a, b) {
  return a + b;
};

console.log(typeof subtract); //'function'

var subtract = (function (a, b) {
  return a + b;
})(20, 5);

console.log(typeof subtract); //'number'
