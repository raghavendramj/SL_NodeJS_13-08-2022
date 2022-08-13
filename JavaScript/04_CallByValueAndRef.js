function copyByValue() {
  var a = 10;
  var b = a; //Copied by value!

  console.log("Value of a ", a);
  console.log("Value of b ", b);

  a = 20;
  console.log("-------------------------------");
  console.log("Value of a ", a);
  console.log("Value of b ", b);
}

function copyByRefArray() {
  var cities = ["Bangalore", "Chennai", "Mumbai", "Kolkatta", "Delhi"];
  var citiesCopy = cities;

  console.log("Cities(O) :- ", cities);
  console.log("Cities(C) :- ", citiesCopy);

  console.log("-------------------------------");
  // cities = ["Kerala", "TamilNadu", "Telanagana"]; // Changed the reference!
  cities.shift();
  cities.pop(); //Both cities and citiesCopy are referring to same reference -> if we modify one, other also gets updated

  console.log("Cities(O) :- ", cities);
  console.log("Cities(C) :- ", citiesCopy);
}

function copyByRefObjects() {
  var product = {
    name: "A 20",
    brand: "Mercedes Benz",
  };
  var prodCopy = product;
  console.log("Person(O) is :- ", product);
  console.log("Person(C) is :- ", prodCopy);

  //   product = {
  //     name: "Innova",
  //     brand: "Toyota",
  //   }; // Changed the reference!

  product.address = "Bangalore";
  prodCopy['phone'] = 12345;

  console.log("--------- SECOND CASE!----------------------");
  console.log("Person(O) is :- ", product);
  console.log("Person(C) is :- ", prodCopy);
}

copyByRefObjects();
