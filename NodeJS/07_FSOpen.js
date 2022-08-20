const fs = require("fs");

fs.open("07_ForFSOpen.txt", "w+", (err, fd) => {
    if (err) {
        console.log("Error reading a file!");
      } else {
        console.log("File opened :- ", fd); 
      }
});
