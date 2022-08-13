function arrayIntro() {
  var arr = ["Agam", "Aishwarya", "Jeevan", "Nishat", "Ratish"];
  console.log("Array:- ", arr);
  console.log("Size of the array :- ", arr.length);
  console.log("Element in 0th index :- ", arr[0]);
  console.log("Element in last index :- ", arr[arr.length - 1]);
}
// arrayIntro();

function printElements(arr) {
  if (arr == undefined || arr === null || arr.length == 0) return;
  console.log("Length  :- ", arr.length, "-> Array :- ", arr);
}

function addAndRemoveElementsFromEnd() {
  var students = ["Agam", "Aishwarya", "Jeevan"];
  printElements(students);
  students.push("Harshith");
  students.push("Lee Kee Wan");
  console.log("***************** After Addition from END ***************");
  printElements(students);

  students.pop();
  students.pop();
  students.pop();

  console.log("***************** After Removal from END ***************");
  printElements(students);
}

// addAndRemoveElementsFromEnd();

function addAndRemoveElementsFromBeginning() {
  var students = ["Agam", "Aishwarya", "Jeevan"];
  printElements(students);
  students.unshift("Harshith");
  students.unshift("Lee Kee Wan");
  console.log("**********  After Addition from the BEGININNING  *******");
  printElements(students);

  students.shift();
  students.shift();
  students.shift();

  console.log(
    "***************** After Removal from BEGININNING ***************"
  );
  printElements(students);
}
// addAndRemoveElementsFromBeginning();

function deleteMethod() {
  var students = ["Agam", "Aishwarya", "Jeevan", "Harshith", "Prashanth"];
  printElements(students);
  console.log("***************** After delete method ***************");
  delete students[1];
  printElements(students);
  delete students[3];
  printElements(students);
  delete students[4];
  printElements(students);
}

// deleteMethod();

function joinMethod() {
  var students = ["Agam", "Aishwarya", "Jeevan", "Harshith", "Prashanth"];
  console.log("students.join('<->') :- ", students.join(" <-> "));
  console.log("students.join(',') :- ", students.join(", "));
}

// joinMethod();

function mergeArrays() {
  var arr1 = ["Agam", "Aishwarya"];
  var arr2 = ["Jeevan", "Harshith"];
  var arr3 = ["Prashanth", "Chaithra"];
  var clubbedArrays = arr1.concat(arr2);
  console.log("1. Two arrays :- ", clubbedArrays);
  clubbedArrays = arr1.concat(arr2, arr3);
  console.log("2. Three arrays :- arr1.concat(arr2, arr3):- ", clubbedArrays);
  clubbedArrays = arr1.concat(arr2).concat(arr3);
  console.log(
    "3. Three arrays :- arr1.concat(arr2).concat(arr3) :- ",
    clubbedArrays
  );
}
// mergeArrays();

function spliceMethod() {
  // Parameters
  // 1 -> from position where elements needs to be added/removed
  // 2 -> how many elements needs to removed
  // 3 and afterwards -> (element(s) that needs to be added);

  //Case : 01 :- Only Removal
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  cities.splice(1, 2);
  console.log("After Removal :-", cities);

  console.log("--------------------------------------------------------");
  //Case : 02 :- Only Addition
  cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  console.log("Before addition :-", cities);
  cities.splice(2, 0, "Lucknow", "MP");
  console.log("After Addition :-", cities);

  console.log("--------------------------------------------------------");
  //Case-03: Both Addition and Removal
  cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  console.log("Before Addition and Removal :-", cities);
  cities.splice(1, 3, "Kerala", "Gujurat");
  console.log("After Addition and Removal :-", cities);
}

// spliceMethod();

function sliceMethod() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  //first_param -> start index, second_param, end index(exclusive)
  console.log("cities.slice(0, 3):- ", cities.slice(0, 3)); //0, 3(exclusive)
  console.log("cities.slice(0, -1):- ", cities.slice(0, -1)); //0, 3(exclusive)
  console.log("cities.slice(-3, -1):- ", cities.slice(-3, -1)); //1, 3(exclusive)
}
// sliceMethod();

//If beginIndex or endIndex is negative then it is treated as
// beginIndex = arr.length + beginIndex
// endIndex   = arr.length + endIndex

// 4 + (-1) = 3

// 4 + (-3) = 1
// 4 + (-1) = 3

function forOfLoop() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  for (var i = 0; i < cities.length; i++) {
    console.log("Each element - for loop :- ", cities[i]);
  }

  console.log("********************* for of loop *********************");
  for (var eachEle of cities) {
    console.log("Each element - for-of loop :- ", eachEle);
  }
}

forOfLoop();
