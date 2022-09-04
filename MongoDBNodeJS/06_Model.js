const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  $oid: String,
  author: String,
  name: String,
  price: Number,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
