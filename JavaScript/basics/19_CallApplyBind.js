// function greet() {
//   console.log("Welcome to the session");
// }

// greet();
// greet.call();

function add(b) {
  //console.log("This argument :- ", this);
  var sum = this.a + b + this.c;
  console.log("Result :- ", sum);
}

// add(10, 20);
add.call({ a: 10, c: 5 }, 20); //This will be attached only for this invocation
add.apply({ a: 10, c: 5 }, [20]); //This will be attached only for this invocation

var add10 = add.bind({ a: 5, c: 5 }); //This{a: 5, c: 5} will be binded to add10, till you destroy it.
add10(4);
add10(6);
add10(13);
