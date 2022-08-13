// Variable Scopes
// The global scope
// Local scope
// Block scope (started from ES6)

var message = "Hi"; //The global scoped variable...
console.log(message);

function sayHello() {
  var message = "Hello"; //Local scoped variable...
  console.log("Message :- ", message);
}

sayHello();
console.log("after sayHello(), message :- ", message);

function getCounter() {
  //Global variable leaks
  counter = 10;
}

//console.log("Before :- ", counter); //ReferenceError: counter is not defined
getCounter();
console.log("After :- ", counter);
