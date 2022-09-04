 
const express = require("express");
const app = express();
app.use(express.json());  

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
const dbURL = "mongodb://localhost/exercisedb";
mongoose.connect(dbURL, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connection successfully established!");
});

app.get("/", (req, res) => {
  res.send("Welcome to full stack applcition!");
});

const courseRouter = require("./12_Routers");
app.use("/courses", courseRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

