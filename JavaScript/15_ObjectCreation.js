// A constructor returns an instance of the class you call it on
function Product(price, brand, name) {
  console.log("Step 1:- ", this);
  this.price = price;
  console.log("Step 2:- ", this);
  this.brand = brand;
  console.log("Step 3:- ", this);
  this.name = name;
  console.log("Step 4:- ", this);
  this.getInfo = function () {
    var msg = `${this.name} of brand ${this.brand} is worth ${this.price}`;
    console.log(msg);
    return msg;
  };
  console.log("Step 5:- ", this);
}

// 1. new -> create an empty object {}
// 2. it will set that empty object to that current object
// 3. returns the object from the function
// The above 3 steps happens in sequence and automatically

var mobile = new Product(12_000, "Samsung", "M32");
console.log("Mobile object :- ", mobile);
mobile.getInfo();
