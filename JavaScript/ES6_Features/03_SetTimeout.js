function printValues() {
  console.log("1"); // -> 1
  setTimeout(function () {
    console.log("2");
  }, 2000); // -> 4
  setTimeout(function () {
    console.log("3");
  }, 0); // -> 3
  console.log("4"); // -> 2
}

// printValues(); //1 4 3 2

function testSetTimeout() {
  for (var i = 1000; i < 4000; i = i + 1000) {
    setTimeout(function () {
      console.log("Value of i :- ", i);
    }, i);
  }
}
// testSetTimeout(); //4000 4000 4000


function testSetTimeoutWithLet() {
    for (let i = 1000; i < 4000; i = i + 1000) {
      setTimeout(function () {
        console.log("Value of i :- ", i);
      }, i);
    }
  }
  testSetTimeoutWithLet(); //1000, 2000, 3000
  
