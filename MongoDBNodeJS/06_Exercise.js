//Create a database with <yourname>-mongo-db
//Schema  -> DONE
//insert many

const mongoose = require("mongoose");
const Course = require("./06_Model");

const exercise_db = mongoose.connect("mongodb://localhost/exercisedb");
exercise_db
  .then(() => console.log("Connected to Mongo Database"))
  .catch((err) => console.log("Error occurrred :- ", err));

async function insertOneData() {
  const courseOne = new Course({
    tags: ["express", "backend"],
    date: "2018-01-24T21:42:27.388Z",
    name: "Express.js Course",
    author: "Shawn Melody",
    isPublished: true,
    price: 10,
  });

  Course.create(courseOne)
    .then((value) => console.log("Course data Saved Successfully! :-  ", value))
    .catch((err) => console.log(err));
}

// insertOneData();

async function insertManyData() {
  const courseData = [
    {
      tags: ["node", "backend"],
      date: "2018-01-24T21:42:47.912Z",
      name: "Node.js Course",
      author: "Shawn Melody",
      isPublished: true,
      price: 20,
    },
    {
      tags: ["aspnet", "backend"],
      date: "2018-01-24T21:42:59.605Z",
      name: "ASP.NET MVC Course",
      author: "Shawn Melody",
      isPublished: true,
      price: 15,
    },
    {
      tags: ["react", "frontend"],
      date: "2018-01-24T21:43:21.589Z",
      name: "React Course",
      author: "Shawn Melody",
      isPublished: false,
    },
    {
      tags: ["node", "backend"],
      date: "2018-01-24T21:44:01.075Z",
      name: "Node.js Course by Jack",
      author: "Jack",
      isPublished: true,
      price: 12,
    },
    {
      tags: ["node", "backend"],
      date: "2018-01-24T21:47:53.128Z",
      name: "Node.js Course by Mary",
      author: "Mary",
      isPublished: false,
      price: 12,
    },
    {
      tags: ["angular", "frontend"],
      date: "2018-01-24T21:56:15.353Z",
      name: "Angular Course",
      author: "Shawn Melody",
      isPublished: true,
      price: 15,
    },
  ];

  Course.insertMany(courseData)
    .then((value) =>
      console.log("Course(s) data Saved Successfully! :-  ", value)
    )
    .catch((err) => console.log(err));
}

insertManyData();
