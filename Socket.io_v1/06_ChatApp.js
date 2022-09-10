const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.set("view engine", "ejs"); //HTML Templating engine! -> Middleware
app.get("/comm", (req, res) => {
  res.render("06_Chat");
});

let users = new Array(); 
io.on("connection", (socket) => {
  console.log("User connected ", socket.id);

  socket.on("setUsername", (newUsername) => {
    console.log("Received from client :- ", newUsername);
    if (users.indexOf(newUsername) > -1) {
      socket.emit(
        "userExists",
        newUsername + " username is taken, Try some other username"
      );
    } else {
      users.push(newUsername);
      socket.emit("userSet", { username: newUsername });
    }
  });

  socket.on("msg", (data) => {
    io.sockets.emit("newMsg", data);
  }); 
 
});

server.listen("4001", () => console.log("Server started!"));
