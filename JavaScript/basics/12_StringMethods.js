function indexOfAndLastIndexOf() {
  var str = "Hey there how are you?";

  //Returns the position of the first occurrence of a substring.
  var currentIndex = str.indexOf("are");
  console.log("Current Index :- ", currentIndex);

  var second =
    "bangalore is beautiful city, and bangalore is IT hub of Karnataka";
  console.log("bangalore's indexOf :- ", second.indexOf("bangalore"));
  console.log("bangalore's lastIndexOf :- ", second.lastIndexOf("bangalore"));
}

// indexOfAndLastIndexOf();

function searchMethod() {
  var str = "my favorite Sport is soccer, but the sport i like is cricket!";
  var index = str.search("sport");
  console.log("1. Index of 'sport' is ", index);

  var regularExpression = /sport/i; // i -> case insensitive
  console.log("2. Index of '/sport/i' is ", str.search(regularExpression));
}
// searchMethod();

function replaceMethod() {
  var str = "Apples are round, and apples are juicy.";
  var output = str.replace("apples", "oranges");
  console.log("1. Result :- ", output);

  var regEx = /apples/i; // i -> case insensitive
  output = str.replace(regEx, "oranges"); //only repalces, first matching characters.
  console.log("2. Result :- ", output);

  var regEx = /apples/gi; // i -> case insensitive, g-> global
  output = str.replace(regEx, "oranges"); //here it will repalce, all matching characters.
  console.log("3. Result :- ", output);
}
// replaceMethod();

function substringMethod() {
  var str = "my favorite country is India";
  //first param -> start-index, second -> end-index (exclusive)
  console.log("str.substring(3, 11) :- ", str.substring(3, 11));

  //first param -> start index, second -> length
  console.log("str.substr(3, 11) :- ", str.substr(3, 11));
}

// substringMethod();

function sliceMethodEx() {
  var str = "my favorite country is India";
  console.log("str.slice(12, 19) :- ", str.slice(12, 19));
}

sliceMethodEx();