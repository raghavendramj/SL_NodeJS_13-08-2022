const mongoose = require("mongoose");
const { Course, Teacher, Student } = require("./03_Model");

//New Database name :- simplilearn -> will automatically be created!
const connectionPromise = mongoose.connect("mongodb://localhost/classroom");

connectionPromise
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

//Creating array of course data object
const courseData = [
  {
    _id: 01,
    name: "NodeJS",
    category: "BackEnd",
  },
  {
    _id: 02,
    name: "MongoDB",
    category: "BackEnd",
  },
  {
    _id: 03,
    name: "JavaScript",
    category: "FrontEnd",
  },
];

const teacherData = [
  {
    name: "TeacherX",
    teacher_id: 501,
    courseId: 01,
  },

  {
    name: "TeacherY",
    teacher_id: 502,
    courseId: 02,
  },

  {
    name: "TeacherZ",
    teacher_id: 503,
    courseId: 02,
  },
];

const studentData = [
  {
    name: "Sachin",
    enroll: 23,
    courseId: 01,
  },
  {
    name: "Rahul",
    enroll: 24,
    courseId: 01,
  },
  {
    name: "Raj",
    enroll: 26,
    courseId: 02,
  },
];

Course.insertMany(courseData)
  .then((value) => console.log("Course data Saved Successfully!"))
  .catch((err) => console.log(err));

Teacher.insertMany(teacherData)
  .then((value) => console.log("Teacher data Saved Successfully!"))
  .catch((err) => console.log(err));

Student.insertMany(studentData)
  .then((value) => console.log("Student data Saved Successfully!"))
  .catch((err) => console.log(err));
