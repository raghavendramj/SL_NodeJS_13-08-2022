const mongoose = require("mongoose");
const { Course, Teacher, Student } = require("./03_Model");

//New Database name :- simplilearn -> will automatically be created!
const connectionPromise = mongoose.connect("mongodb://localhost/classroom");

connectionPromise
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

async function getCourses() {
  const courses = await Course.find({
    category: "BackEnd",
  }).limit(1)
    .sort({ name: 1 })
    .select({ name: 1 });

  //.select({name: 1});
  // .select({ category: 1 });

  console.log("Courses are :- ", courses);
}

getCourses();
