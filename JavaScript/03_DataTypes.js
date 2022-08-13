// Value Types:- Copied By Value
// Number
// String
// Boolean
// Symbol
// undefined
// null

// Reference Types:- Copied by reference
// Object
// Function
// Array

console.log("*********************** Value TYPES! **************************");

var person;
console.log("person :- ", person, " and typeof(person) :- ", typeof person);

person = "John";
console.log("person :- ", person, " and typeof(person) :- ", typeof person);

person = 123;
console.log("person :- ", person, " and typeof(person) :- ", typeof person);

person = true;
console.log("person :- ", person, " and typeof(person) :- ", typeof person);

person = { a: 10, b: 20 };
console.log("person :- ", person, " and typeof(person) :- ", typeof person);

person = function () {
  console.log("Welcome !");
};
console.log("person :- ", person, " and typeof(person) :- ", typeof person);

person = null;
console.log("person :- ", person, " and typeof(person) :- ", typeof person);
