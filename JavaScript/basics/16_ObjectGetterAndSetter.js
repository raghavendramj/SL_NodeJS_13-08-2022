function Circle(radius) {
  this.radius = radius;

  //Private Members
  var defaultLocation = { x: 0, y: 0 };

  //How to setter and getter property for a private variable!
  Object.defineProperty(this, "defaultLocation", {
    get: function(){
        console.log('Object.defineProperty::defaultLocation :- ', defaultLocation);
        return defaultLocation;
    },
    set: function(value){
        if(!value.x || !value.y){
            throw new Error("Invalid Location!");
        }
        defaultLocation = value;
    }
  });

  var computerOptimumLocation = function (factor) {
    console.log("Factors are..", factor);
  };

  this.draw = function () {
    var x, y;
    computerOptimumLocation(0.1);
    console.log("Circle :: Draw function invoked, radius:- ", radius);
  };
}

var circle = new Circle(2);
console.log("circle -> ", circle);
circle.draw();
console.log("circle.defaultLocation -> ", circle.defaultLocation);
circle.defaultLocation = {x: 50, y:60};
console.log("circle.defaultLocation -> ", circle.defaultLocation);
