const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.set("view engine", "ejs"); //HTML Templating engine! -> Middleware
app.get("/comm", (req, res) => {
  res.render("03_comm");
});

io.on("connection", (socket) => {
  console.log("User connected ", socket.id);

  setTimeout(() => {
    socket.send("Delayed message after 4 seconds!");
  }, 4000);

  //Send -> Server Event :- Step 1
  const myObject = {
    desc: "A custom event named manualEvent",
  };
  socket.emit("serverEvent", myObject);

  //Receive -> Client Event :- Step 2
  socket.on("clientEvent", (data) => {
    console.log("Received from client :- ", data);
  });
});

server.listen("4001", () => console.log("Server started!"));
