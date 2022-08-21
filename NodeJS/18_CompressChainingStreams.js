const fs = require("fs");
var zlib = require("zlib");

const fileName = "15_ContentToRead.txt";
let readStream = fs.createReadStream(fileName, "utf-8");
let writeStream = fs.createWriteStream("18_ChainingStream.txt.gz");

readStream.pipe(zlib.createGzip()).pipe(writeStream);
console.log("File Compressed!"); 