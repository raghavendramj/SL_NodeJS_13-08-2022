const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to http module");
  } else if (req.url === "/about") {
    res.write("This is about page!");
  } else {
    res.write("Some other page!");
  }
  res.end();
});

server.listen("3000");
