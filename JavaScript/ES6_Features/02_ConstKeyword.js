function testConst() {
  var x = 10;
  {
    const x = 2;
    console.log("Value of X INSIDE :- ", x);
  }
  console.log("Value of X OUTSIDE :- ", x);
  const pi = 3.142;
  pi = 3.12; //TypeError: Assignment to constant variable.

  //const y; //Missing initializer in const declaration
  const y = 10;
}
// testConst();

function constWithArrays() {
  const cars = ["Saab", "Volvo", "BMW"];
  cars[0] = "Toyota"; //Allowed
  console.log("Cars :- ", cars);
  cars.push("Audi");
  console.log("Cars :- ", cars);
  cars = ["Toyota", "Volvo", "Audi"]; //TypeError: Assignment to constant variable.
}
// constWithArrays();

function constWithObjects() {
  const car = { type: "Fiat", model: "500", color: "white" };
  console.log("Car Object:- ", car);
  car.color = "red";
  car.owner = "Johnson";
  console.log("Car Object:- ", car);
  car = { type: "Volvo", model: "EX60", color: "red" };  //TypeError: Assignment to constant variable.
}

constWithObjects();