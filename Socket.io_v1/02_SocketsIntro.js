const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.set("view engine", "ejs"); //HTML Templating engine!

app.get("/home", (req, res) => {
  res.render("home");
});

server.listen("4001", () => console.log("Server started!"));

let users = new Array();
io.on("connection", (socket) => {
  console.log("User connected ", socket.id);
  users.push(socket.id);

  //Whenever someone disconnects this piece of code executed
  socket.on("disconnect", function () {
    console.log("A user disconnected", users.shift());
  });
});
