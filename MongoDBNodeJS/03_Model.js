const mongoose = require("mongoose");

//Course Model Schema
const courseSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  category: String,
});

//Teacher Model Schema
const teacherSchema = new mongoose.Schema({
  name: String,
  teacher_id: Number,
  courseId: Number,
});

//Student Model Schema
const studentSchema = new mongoose.Schema({
  name: String,
  enroll: Number,
  courseId: Number,
});

//Create Model Objects

const Course = mongoose.model("Course", courseSchema);
const Student = mongoose.model("Student", studentSchema);
const Teacher = mongoose.model("Teacher", teacherSchema);

//Exporting our model objects!

module.exports = {
  Student,
  Course,
  Teacher,
};
