const fs = require("fs");

const fileName = "15_ContentToRead.txt";
const readStream = fs.createReadStream(fileName, "utf-8");
const writeStream = fs.createWriteStream("./17_WritingtheContentViaPipe.txt");

readStream.pipe(writeStream);
