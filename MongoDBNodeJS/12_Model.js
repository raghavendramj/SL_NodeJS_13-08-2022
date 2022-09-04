const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  $oid: String,
  author: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    required: false,
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
