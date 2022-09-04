// Get all the backend courses which are published and sort it by name, and display name and author
const mongoose = require("mongoose");
const Course = require("./06_Model");

const exercise_db = mongoose.connect("mongodb://localhost/exercisedb");
exercise_db
  .then(() => console.log("Connected to Mongo Database"))
  .catch((err) => console.log("Error occurrred :- ", err));

async function getCourses() {
  //Appraoch - 01
  //   Course.find({ tags: "backend", isPublished: true })
  //     .select({ name: 1, author: 1, _id: 0 })
  //     .sort({ name: -1 })
  //     .then((data) => console.log("Received data :- ", data))
  //     .error((err) => console.log("Error occurred :- ", err));

  //   //Appraoch - 02
  //   const courses = await Course.find({ tags: "backend", isPublished: true })
  //     .select({ name: 1, author: 1, _id: 0 })
  //     // .sort({ name: -1 }); //desceding
  //     .sort({ name: -1 });
  //   console.log("Result :- ", courses);

  //Appraoch - 03
  const courses = await Course.find({ tags: "backend", isPublished: true })
    .sort("name")
    .select("name author -_id"); //- is used to negate _id in results
  console.log("Result :- ", courses);
}
getCourses();
