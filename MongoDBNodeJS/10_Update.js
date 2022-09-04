const mongoose = require("mongoose");
const Course = require("./06_Model");

const exercise_db = mongoose.connect("mongodb://localhost/exercisedb");
exercise_db
  .then(() => console.log("Connected to Mongo Database"))
  .catch((err) => console.log("Error occurrred :- ", err));

async function updateByFindByAndUpdateTheInfo(id) {
  //Find the object by id
  const course = await Course.findById(id);
  console.log("Found by id :- ", course);

  if (!course) {
    console.log("No Course Found");
  }

  //modify the data - approach - 01
  course.isPublished = false;
  course.author = "Andy Grov";

  //modify the data - approach - 02
  course.set({
    isPublished: false,
    author: "Andy Grov",
  });

  //write back to the database.
  const result = await course.save();
  console.log("updateByFindByAndUpdateTheInfo Result :- ", result);
}

// updateByFindByAndUpdateTheInfo("631426c72b7b0b957c86f7ff");

async function updateByDirectUpdateOne(id) {
  const updatedCourse = await Course.updateOne(
    { _id: id },
    {
      $set: {
        author: "Paul Scharre",
        isPublished: true,
      },
    }
  );

  console.log("updateByDirectUpdateOne Result :- ", updatedCourse);
}
// updateByDirectUpdateOne("631426c72b7b0b957c86f7ff");

async function updateByfindByIdAndUpdateMethod(id) {
  const updatedCourse = await Course.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        author: "Daniel Susskind",
        isPublished: false,
      },
    },{new: true} //Returns the modified data, without this you will get original data
  );

  console.log("updateByfindByIdAndUpdateMethod Result :- ", updatedCourse);
}
updateByfindByIdAndUpdateMethod("631426c72b7b0b957c86f7ff");
