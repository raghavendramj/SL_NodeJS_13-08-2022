const express = require("express");
const router = express.Router();
const Course = require("./12_Model");

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.send("Error :-", err);
  }
});

router.get("/:id", async (req, res) => {
  Course.findById(req.params.id)
    .then((course) => res.json(course))
    .catch((err) => res.send(err));
});

module.exports = router;
