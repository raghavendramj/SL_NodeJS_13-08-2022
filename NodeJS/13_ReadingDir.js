const fs = require("fs");
const path = require("path");

//Usecase :-
//1. Read the directory -> ../NodeJS
//2. Read all the files
//3. Delete only files with .txt extension
//4. Except 06_AsyncRead.txt, which is used for reading!
fs.readdir("../NodeJS", (err, files) => {
  if (err) {
    console.log("Error occurred!");
  } else {
    //console.log("Files :- ", files);

    files.forEach((file) => {
      if (
        path.extname(file) === ".txt" &&
        path.basename(file) !== "06_AsyncRead.txt"
      ) {
        //Delete the file.
        fs.unlink(file, (err) => {
          if (err) {
            console.log("Error occurred in deleting .txt file");
          } else {
            console.log(file, " got deleted successfully");
          }
        });
      }
    });
  }
});
