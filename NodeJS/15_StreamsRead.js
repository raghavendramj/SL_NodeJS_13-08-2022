const fs = require("fs");

const fileName = "./15_ContentToRead.txt";
// const readStream = fs.createReadStream(fileName);
const readStream = fs.createReadStream(fileName, "utf-8");

//To read chunk in readable format
//-> either create a readStream in utf-8 format
//-> convert the readStream to String()
readStream.on("data", (chunk) => {
  console.log("Readstream + chunks", chunk.toString());
});
