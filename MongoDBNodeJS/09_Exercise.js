//Get all the
//published courses with
//prices sorted ascending
//names having the string 'by'
//and prices should be greater than 15

const mongoose = require("mongoose");
const Course = require("./06_Model");

const exercise_db = mongoose.connect("mongodb://localhost/exercisedb");
exercise_db
  .then(() => console.log("Connected to Mongo Database"))
  .catch((err) => console.log("Error occurrred :- ", err));

async function getCourses() {
  const courses = await Course.find({
    isPublished: true,
  })
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/ }])
    .sort({ price: 1 })
    .select({ name: 1, author: 1, _id: 0 });
  console.log("getCoursesApproach2 Courses:- ", courses);
}
getCourses();
