hositingTest();
function hositingTest() {
  //console.log(number); //ReferenceError: number is not defined
  console.log(number); //When we nnumber declared, it will be hosited to the beginning of the function.
  console.log(a);
  console.log(b); //Variable hoisting in javascript!
  var number;
  var a = 10;
  var b = 20;
  number = 35;
  console.log(number);
  console.log(a);
  console.log(b);
}
