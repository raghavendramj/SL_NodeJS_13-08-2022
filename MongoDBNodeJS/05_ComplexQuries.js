const mongoose = require("mongoose");
const { Course, Teacher, Student } = require("./03_Model");

//New Database name :- simplilearn -> will automatically be created!
const connectionPromise = mongoose.connect("mongodb://localhost/classroom");

connectionPromise
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

//eq -> Equal
//ne -> Not Equal
//gt -> greater than
//gte -> greater than or equal to
//lt -> less than
//lte -> less than or equal to
//in
//nin -> not in

async function getStudents() {
  const students = await Student.find({
    // courseId: { $gt: 1, $lte: 3},
    // courseId: { $eq: 2},
    courseId: { $in: [2, 3] },
  }).select({ courseId: 1 });

  console.log("Students are :- ", students);
}

// getStudents();

async function getStudentsRE() {
  //const students = await Student.find({ name: /Har/ }).select({ name: 1 });
  //const students = await Student.find({ name: /ith$/ }).select({ name: 1 });
  //const students = await Student.find({ name: /^Har/ }).select({ name: 1 }); //Starts with Har
  //const students = await Student.find({ name: /ith$/ }).select({ name: 1 }); //Ends with ith
  const students = await Student.find({ name: /.*hi.*/ }).select({ name: 1 }); //Ends with ith
  console.log("Students :- ", students);
}

getStudentsRE();
