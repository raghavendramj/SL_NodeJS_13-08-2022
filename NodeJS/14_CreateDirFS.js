const fs = require("fs");

const directoryName = "./14_NewDir/";

fs.readdir(directoryName, (err, files) => {
  if (err) {
    console.log("Error occurred!");
  } else {
    console.log("Files :- ", files);
    files.forEach((file) => {
      const fileNameWithDir = directoryName + file;
      fs.unlink(fileNameWithDir, (err) => {
        if (err) {
          console.log("Error occurred in deleting file :- ", fileNameWithDir);
        } else {
          console.log(file, " got deleted successfully");
        }
      });
    });

    fs.rmdir(directoryName, (err) => {
      if (err) {
        console.log("rmdir -> Error occurred!");
      } else {
        console.log("rmdir -> success");
      }
    });
  }
});

//Create a directory
//Create 3 files
//Add content to all the files.
fs.mkdir(directoryName, (err) => {
  if (err) {
    console.log("Directory creation failed!");
  } else {
    console.log("Directory creation successfully");

    const fileNames = ["14_One.txt", "14_Two.txt", "14_Three.txt"];
    fileNames.forEach((fileName, index) => {
      const fullFileName = directoryName + "/" + fileName;
      console.log("Filename :- ", fullFileName, " index:- ", index);
      fs.writeFile(
        fullFileName,
        `Content to ${index + 1} file written`,
        (err) => {
          if (err) console.log("Unable to create a file.");
          else console.log("Created and file write success!");
        }
      );
    });
  }
});
