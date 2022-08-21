const express = require("express");
const app = express();

const movies = [
  { id: 1, name: "Star Wars" },
  { id: 2, name: "Transformers" },
  { id: 3, name: "Toy Story" },
  { id: 4, name: "The Pursuit of Happiness" },
  { id: 5, name: "Terminator" },
];

//Get all the movies
app.get("/api/movies", (req, res) => {
  res.send(movies);
});

//Get each movie by id
app.get("/api/movies/:id", (req, res) => {
  let findPred = (mov) => mov.id === parseInt(req.params.id);
  let foundMovie = movies.find(findPred);
  if (foundMovie) {
    res.send(foundMovie);
  } else {
    res.send(`No movie found for id:- ${req.params.id}`);
  }
});

const port = process.env.PORT || "5000";
app.listen(port, () => console.log(`Listening to port ${port}`));
