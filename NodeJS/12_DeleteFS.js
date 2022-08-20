const fs = require("fs");

//Create + Write
const fileName = "12_ForDeletion.txt";
fs.writeFile(fileName, "Original content!", (err) => {
  if (err) {
    console.log("Error occurred in wriring into the file.");
  } else {
    console.log("File created for appending Successfully!");
  }
});

fs.unlink(fileName, (err) => {
  if (err) {
    console.log("Error occurred!");
  } else {
    console.log("File deleted successfully");
  }
});
