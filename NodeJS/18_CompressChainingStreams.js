const fs = require("fs");
var zlib = require("zlib");
 
let readStream = fs.createReadStream("15_ContentToRead.txt", "utf-8");
let writeStream = fs.createWriteStream("18_ChainingStream.txt.gz");

readStream.pipe(zlib.createGzip()).pipe(writeStream);
console.log("File Compressed!"); 