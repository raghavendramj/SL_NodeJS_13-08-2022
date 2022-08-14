let players = [
  { name: "Rishabh", role: "WicketKeeper", order: "Hitter" },
  { name: "Hardhik", role: "Allrounder", order: "Hitter" },
  { name: "Jadeja", role: "Allrounder", order: "Hitter" },
  { name: "Virat", role: "Batsmen", order: "Middle" },
  { name: "Rahul", role: "Batsmen", order: "Opening" },
  { name: "Rohith", role: "Batsmen", order: "Opening" },
  { name: "Shreyas", role: "Batsmen", order: "Middle" },
  { name: "Bumrah", role: "Bowler", order: "Opening" },
  { name: "Shami", role: "Bowler", order: "Middle" },
];

function mapTest() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //Typical way!
  let squares = [];
  for (let eachNum of numbers) {
    squares.push(eachNum * eachNum);
  }
  console.log("Typical Way :- Squares : ", squares);

  let callBackSquare = (number) => number * number;
  let es6Squares = numbers.map(callBackSquare);
  console.log("ES6 Way :- Squares : ", es6Squares);

  console.log(
    "ES6 Way One Liner: ",
    numbers.map((number) => number * number)
  );

  console.log(
    "Names:- ",
    players.map((each) => each.name)
  );
}

// mapTest();

function filtersExample() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let odds = [];
  let evens = [];
  for (let eachNumber of numbers) {
    if (eachNumber % 2 == 0) {
      evens.push(eachNumber);
    } else {
      odds.push(eachNumber);
    }
  }
  console.log("Typical Way :- Odds : ", odds);
  console.log("Typical Way :- evens : ", evens);

  console.log(
    "Evens :-",
    numbers.filter((num) => num % 2 == 0)
  );
  console.log(
    "Odds :-",
    numbers.filter((num) => num % 2 != 0)
  );
}
// filtersExample();

function filterAndMapApplication() {
  let middleOrderBatsmen = (player) =>
    player.role === "Batsmen" && player.order === "Middle";
  console.log("Middle order batsmens :- ", players.filter(middleOrderBatsmen));

  let namesOfMdlOrd = players
    .filter(middleOrderBatsmen)
    .map((player) => player.name);
  console.log("Middle order batsmens names :- ", namesOfMdlOrd);
}

// filterAndMapApplication();

function reduceFunctionExample() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = 0;
  for (let eachNumber of numbers) {
    sum += eachNumber;
  }
  console.log("Typical way :- Sum :- ", sum);

  let redPred = (accumulator, currentValue) => accumulator + currentValue;
  // console.log("ES6 way :- Sum :- ", numbers.reduce(redPred));

  let reducePredicate = (accumulator, currentValue) => {
    console.log("accumulator: ", accumulator, " and element: ", currentValue);
    return accumulator + currentValue;
  };
  //console.log("ES6 way :- Sum :- ", numbers.reduce(reducePredicate, 100));
  const result = numbers.reduce((a, b) => a + b);
  console.log("One liner :- ", result);
}
// reduceFunctionExample();


function findFunc(){
    const numbers = [4, 9, 16, 25, 29];
    let gtThn18 = num => num > 18;
    console.log("First num > 18 is:- ", numbers.find(gtThn18));
}
// findFunc();

function findIndexFunc(){
    const numbers = [4, 9, 16, 25, 29];
    let gtThn18 = num => num > 18;
    console.log("First num > 18 is:- ", numbers.findIndex(gtThn18));
}
findIndexFunc();