const fs = require("fs");

const fileName = "./16_ContentToWrite.txt";
const writeStream = fs.createWriteStream(fileName);

const contentToWrite = "This is my content!";
writeStream.write(contentToWrite, (err) => {
  if (err) {
    console.log("write -> Error occured!");
  } else {
    console.log("write -> success!");
  }
});

const readStream = fs.createReadStream(fileName, "utf-8");
readStream.on("data", (chunk) => {
  console.log("read -> success!");
  console.log("Readstream + chunks", chunk.toString());
});
