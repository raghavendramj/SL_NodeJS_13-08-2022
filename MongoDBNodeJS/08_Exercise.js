//Get backend and front end courses which are published and sort the pirces from bigger to smaller
//and display name and author

const mongoose = require("mongoose");
const Course = require("./06_Model");

const exercise_db = mongoose.connect("mongodb://localhost/exercisedb");
exercise_db
  .then(() => console.log("Connected to Mongo Database"))
  .catch((err) => console.log("Error occurrred :- ", err));

async function getCoursesApproach1() {
  const courses = await Course.find({
    isPublished: true,
    tags: { $in: ["backend", "frontend"] },
  })
    .sort({ price: -1 })
    .select({ name: 1, author: 1, _id: 0 });
  console.log("Courses:- ", courses);
}
// getCoursesApproach1();

async function getCoursesApproach2() {
  const courses = await Course.find({
    isPublished: true,
  })
    .or({ tags: "backend" }, { tags: "frontend" })
    .sort({ price: -1 })
    .select({ tags: 1, author: 1, _id: 0 });
  console.log("getCoursesApproach2 Courses:- ", courses);
}
getCoursesApproach2();
