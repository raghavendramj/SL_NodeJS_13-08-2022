// A promise object has a state that can be one of the following:
// Pending
// Fulfilled with a value
// Rejected for a reason

let addPromise = (arr) => {
  return new Promise((resovle, reject) => {
    if (arr.length <= 1) {
      reject("Array length must be >= 2");
    } else {
      let result = arr[0] + arr[1];
      console.log("Result is :- ", result);
      resovle(arr);
    }
  });
};
let multiplyPromise = (arr) => {
  return new Promise((resovle, reject) => {
    if (arr.length <= 1) {
      reject("Array length must be >= 2");
    } else {
      let result = arr[0] * arr[1];
      console.log("Result is :- ", result);
      resovle(arr);
    }
  });
};

let subtarctionPromise = (arr) => {
  return new Promise((resovle, reject) => {
    if (arr.length <= 1) {
      reject("Array length must be >= 2");
    } else {
      let result = arr[0] - arr[1];
      console.log("Result is :- ", result);
      resovle(arr);
    }
  });
};

// addPromise([12, 5])
//   .then(
//     (successArray) => {
//       console.log("Addition successful ", successArray);
//       return multiplyPromise(successArray);
//     },
//     (error) => console.log("Error Occurred! :- ", error)
//   )
//   .then(
//     (successArray) => {
//       console.log("Multiplication successful !", successArray);
//       return subtarctionPromise(successArray);
//     },
//     (error) => console.log("Error Occurred! :- ", error)
//   )
//   .then(
//     (successArray) => {
//       console.log("Subtarction successful !", successArray);
//     },
//     (error) => console.log("Error Occurred! :- ", error)
//   );

addPromise([12, 5])
  .then(multiplyPromise)
  .then(subtarctionPromise)
  .catch((error) => console.log("Error Occurred! :- ", error));
