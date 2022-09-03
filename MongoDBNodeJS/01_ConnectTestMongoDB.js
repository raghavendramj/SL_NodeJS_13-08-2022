const mongoose = require("mongoose");

//New Database name :- simplilearn -> will automatically be created!
const connectionPromise = mongoose.connect("mongodb://localhost/simplilearn");

connectionPromise
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
});

//Class -> Objects
//Course(Class) -> nodeCourse(Object)
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  //Maps to a document in MongoDB
  const nodeCourse = new Course({
    name: "Node JS Course",
    author: "Raghavendra",
  });

  console.log("Result :- ", await nodeCourse.save());
}

createCourse();
