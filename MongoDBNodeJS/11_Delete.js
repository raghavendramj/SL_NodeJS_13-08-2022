const mongoose = require("mongoose");
const Course = require("./06_Model");

mongoose
  .connect("mongodb://localhost/exercisedb")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

async function removeOneCourse(id) {
  const removedCourse = await Course.deleteOne({ _id: id });
  console.log("deleteOneCourse :- ", removedCourse);
}

removeOneCourse("631426c72b7b0b957c86f7fd");

async function removeManyCourse(id) {
  const deleteManyCourse = await Course.deleteMany({ _id: id });
  console.log("deleteManyCourse :- ", deleteManyCourse);
}

removeManyCourse("631425d357b1c2b1e6911e5c");

async function findByIdAndRemoveCourse(id) { 
  const findByIdAndRemoveCourse = await Course.findByIdAndRemove({ _id: id });
  console.log("findByIdAndRemoveCourse :- ", findByIdAndRemoveCourse);
}

findByIdAndRemoveCourse("631426c72b7b0b957c86f7fc");
