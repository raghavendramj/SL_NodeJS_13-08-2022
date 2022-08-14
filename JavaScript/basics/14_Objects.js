// JavaScript provides you with many ways to create an object.
// The most commonly used one is to use the object literal notation.

// Object :-  containers for data values.
// Contains -> properties and methods

var empty = {};

var car = {
  name: "Fiat", //property
  model: "Punto", //property
  color: "white", //property
  start: function () {
    //method
    console.log("Car started!");
  },
  stop: function () {
    //method
    console.log("Car stopped!");
  },
};
function accessObject() {
  console.log("Object :- ", car);
  console.log("Object's property:- ", car.name);
  console.log("Object's property:- ", car["model"]);
  car.start();
}

// accessObject();

function forInLoop() {
  for (var eachKey in car) {
    if (typeof car[eachKey] === "function") {
      car[eachKey]();
    } else {
      console.log("key :- ", eachKey, " value :- ", car[eachKey]);
    }
  }
}
// forInLoop();

function question() {
  var music = {
    rock: "guitar",
    classical: "violin",
  };
  var classical = "rock";
  console.log("music.classical :- ", music.classical);
  console.log("music[classical] :- ", music[classical]);
}

// question();

function addOrRemovePropertyFromObject() {
  var person = {
    name: "John Doe",
    email: "john.doe@gmail.com",
  };

  //Adding a property to the object!
  person.address = "Bangalore";
  console.log("After person.address :- ", person);
  person["phone"] = 12345;
  console.log("After person['phone'] :- ", person);

  delete person["email"];
  console.log("After delete person['email'] :- ", person);

  //All the keys in the object
  var keys = Object.keys(person);
  console.log("Keys of object person is :- ", keys);

  //Check for existence.
  if ("phone" in person) {
    console.log("Person has got 'phone' property!");
  }
}

addOrRemovePropertyFromObject();
