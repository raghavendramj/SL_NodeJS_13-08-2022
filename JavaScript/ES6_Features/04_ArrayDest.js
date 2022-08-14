function arrayDestructuring() {
  let scores = [45, 55, 20, 30, 56, 78, 12, 62];
  let x = scores[0];
  let y = scores[1];
  let z = scores[2];
  console.log("X =", x);
  console.log("Y =", y);
  console.log("Z =", z);
  console.log("**********************************");

  let [a, b, c, ...others] = scores; //Array Destructuring
  console.log("A =", a);
  console.log("B =", b);
  console.log("C =", c);
  console.log("others =", others);
}
// arrayDestructuring();

function destructuringWithDefaultEntries() {
  let scores = [45, 55, 20, 30];
  let [a, b = 1, c = 2] = scores;
  console.log("A =", a);
  console.log("B =", b);
  console.log("C =", c);
}

destructuringWithDefaultEntries();
