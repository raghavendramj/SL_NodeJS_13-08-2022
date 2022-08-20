const fs = require("fs");

//Reading a file - Asyncronous read
fs.readFile("06_AsyncRead.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading a file!");
  } else {
    console.log("Asyncronous read :- ", data); //Data :- <Buffer 48 65 79> , if no formatting mentioned!
  }
});


var dataRead = fs.readFileSync('06_AsyncRead.txt', 'utf-8');
console.log("Synchronously read data with utf-8 format :- ", dataRead);

var dataRead2 = fs.readFileSync('06_AsyncRead.txt');
console.log("Synchronously read dataRead2.toString() :- ", dataRead2.toString());