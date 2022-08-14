function stringBasics() {
  //JavaScript strings are for storing and manipulating text.
  //A JavaScript string is zero or more characters written inside quotes.

  var carName = "Merc Bez";
  //var text = "We are the so-called \"Vikings\" from the north.";
  var text = 'We are the so-called "Vikings" from the north.';
  console.log("Text is ", text);

  var nameOfThePerson = "John Doe";
  var message = `HI, My name is ${nameOfThePerson}`;
  console.log("Message is ", message);

  var str = "Good Morning";
  console.log("str.length :- ", str.length);
  console.log("First character :- str[0] :- ", str[0]);
  console.log("Last character :- str[str.length-1] :- ", str[str.length - 1]);
}

function stringConcats() {
  var result = 10 + "Raghav";
  console.log("1. Output - ", result, " typeof result :- ", typeof result);
  var result = 10 + 20 + 30 + "Raghav";
  console.log("2. Output - ", result, " typeof result :- ", typeof result);

  var className = "btn";
  className += " btn-primary";
  className += " none";
  console.log("3. className - ", className);
}
// stringConcats();

function compareStrings() {
  var result = "a" < "b";
  console.log("'a' < 'b' :- ", result);
  result = "a" < "B";
  console.log("'a' < 'B' :- ", result);
}
compareStrings();
