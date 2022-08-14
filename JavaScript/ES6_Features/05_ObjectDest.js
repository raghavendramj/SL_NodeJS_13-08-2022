let person = {
  firstName: "John",
  middleName: "Nathan",
  lastName: "Doe",
};

function typicalWay() {
  let firstName = person.firstName;
  let lastName = person.lastName;
  console.log("Typical Way : firstName : ", firstName);
  console.log("Typical Way : lastName : ", lastName);
}

function usingObjDest() {
  let { firstName, lastName } = person; //Object destructuring
  console.log("Object Dest firstName : ", firstName);
  console.log("Object Dest lastName : ", lastName);
}

// usingObjDest();

function defaultValues() {
  //fName is mapped Variable for firstName
  let { firstName: fName, middleName = "Stuart" } = person;
  console.log("Object Dest firstName : ", fName);
  console.log("Object Dest middleName : ", middleName);
}

// defaultValues();

function nullTest() {
  let obj = null;
  //TypeError: Cannot destructure property 'firstName' of 'obj' as it is null.
  let { firstName, lastName } = obj || {};
  console.log("Object Dest firstName : ", firstName);
  console.log("Object Dest lastName : ", lastName);
}

nullTest();
