const mongoose = require("mongoose");

//New Database name :- simplilearn -> will automatically be created!
const connectionPromise = mongoose.connect("mongodb://localhost/sldatabase");

connectionPromise
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  zone: String,
  department: String,
});

//Class -> Objects
//Course(Class) -> nodeCourse(Object)
const Employee = mongoose.model("Employee", employeeSchema, "employees");

async function createEmployee(employee) {
  console.log("Employee Got created :- ", await employee.save());
}

createEmployee();

function createUtility() {
  createEmployee(
    new Employee({
      name: "Adam Gilly",
      age: 31,
      zone: "East",
      department: "Marketing",
    })
  );

  createEmployee(
    new Employee({
      name: "Jasprit",
      age: 26,
      zone: "West",
      department: "Sports",
    })
  );
}

createUtility();