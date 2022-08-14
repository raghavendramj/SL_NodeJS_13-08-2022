let calculate = (a, b, callBack) => {
  let result = callBack(a, b);
  console.log("Result is :- ", result);
};

let operations = (a, b) => {
  //calculate(30, 20, add);
  calculate(a, b, (a, b) => {
    //calculate(30, 20, subtract);
    calculate(30, 20, (a, b) => {
      //calculate(30, 20, multiply);
      calculate(30, 20, (a, b) => {
        //calculate(30, 20, division);
        calculate(30, 20, (a, b) => {
          //throw new Error("Error"); //This results in a big failure of entire system!
          return a / b;
        });
        return a * b;
      });
      return a - b;
    });
    return a + b;
  });
};

operations(20, 5);


//Usecase :- Open git hub and get my commits
//1. LoginToGitHub -> SUCCEED -> 2. Find Repo -> SUCCEED -> 
//3. Find My Commits -> SUCCEED -> 4. Get The File