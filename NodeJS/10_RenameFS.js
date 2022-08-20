const fs = require("fs");

//Create + Write
const fileName = "10_CreatingAForRenaming.txt";
fs.writeFile(fileName, "For rename!", (err) => {
  if (err) {
    console.log("Error occurred in wriring into the file.");
  } else {
    console.log("File created for renaming Successfully!");
  }
});

//Renaming
fs.rename(fileName, "10_RenamedFile.txt", (err) => {
  if (err) {
    console.log("Error occurred in renaming the file.");
  } else {
    console.log("File renamed Successfully!");
  }
});
