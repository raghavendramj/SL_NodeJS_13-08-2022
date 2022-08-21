const fs = require("fs");

const fileName = "./15_ContentTsoRead.txt";
// const readStream = fs.createReadStream(fileName);
const readStream = fs.createReadStream(fileName, "utf-8");

//To read chunk in readable format
//-> either create a readStream in utf-8 format
//-> convert the readStream to String()
readStream.on("data", (chunk) => {
  console.log("data -> Readstream + chunks", chunk.toString());
});

readStream.on("end", () => {
  console.log("end -> This marks the end of streams!");
});

readStream.on("error", () => {
  console.log("error -> Couldn't read the content!");
});
