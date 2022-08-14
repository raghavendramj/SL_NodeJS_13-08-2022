function testingVar() {
  var number = 10;
  console.log("First Time :- ", number);
  var number = 20;
  console.log("Second Time :- ", number);
}

// testingVar();

function testingLet() {
  //block-scoped variable
  let number = 10;
  console.log("First Time :- ", number);
  //let number = 20; //Cannot redeclare block-scoped variable 'number'.ts(2451)
  if (number === 10) {
    let number = 20;
    console.log("Second Time :- ", number);
  } else {
    let number = 40;
    console.log("Third Time :- ", number);
  }
}

// testingLet();

function hoistingTestLet() {
  console.log(str); // Cannot access 'str' before initialization
  let str;
}

hoistingTestLet();

function letAndGlobalScope() {
  var myNum = 10;
  console.log(window.myNum); //10
  let testNum = 23;
  console.log(window.testNum); //undefined.. Because block-scoped variables are not attached to global scope.
}
