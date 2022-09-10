const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.set("view engine", "ejs"); //HTML Templating engine! -> Middleware
app.get("/comm", (req, res) => {
  res.render("04_BroadCast");
});

let clients = 0;
let users = new Array();

io.on("connection", (socket) => {
  console.log("User connected ", socket.id);
  users.push(socket.id);
  clients++;
  io.sockets.emit("broadcast", { desc: clients + " clients connected!" });

  socket.on("disconnect", function () {
    console.log("A user disconnected", users.shift());
    clients--;
    io.sockets.emit("broadcast", { desc: clients + " clients connected!" });
  });
});

server.listen("4001", () => console.log("Server started!"));
