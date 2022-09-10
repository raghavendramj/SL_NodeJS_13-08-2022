const express = require("express");
const http = require("http"); 

const app = express();
app.set("view engine", "ejs"); //HTML Templating engine!

app.get("/", (req, res) => {
  res.send("Basics!");
});

app.get("/home", (req, res) => {
  res.render("home");
});

const server = http.createServer(app);
server.listen("4001", () => console.log("Server started!"));
