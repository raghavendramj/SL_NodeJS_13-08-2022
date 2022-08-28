// async and await make promises easier to writ
// async makes a function return a Promise
// await makes a function wait for a Promise

//The keyword async before a function makes the function return a promise:
async function sayHello() {
  return "hello";
}
function sayHelloByPromise() {
  return new Promise((resolve, reject) => {
    resolve("hello");
  });
}

sayHelloByPromise().then((success) =>
  console.log("Message from promise :- ", success)
);
sayHello().then((success) =>
  console.log("Message from async promise :- ", success)
);

//The keyword await before a function makes the function wait for a promise:
async function fetchEvenNumbers() {
  let getEvenNumbersPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([2, 4, 6, 8, 10]);
    }, 5000);
  });

  let evenNums = await getEvenNumbersPromise;
  console.log("evenNums -> ", evenNums);
  console.log("After waiting for a promise i'm getting printed here...");
}
fetchEvenNumbers();
