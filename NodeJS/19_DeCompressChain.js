const fs = require("fs");
var zlib = require("zlib");

const readStream = fs.createReadStream("18_ChainingStream.txt.gz");
const writeStream = fs.createWriteStream("19_ContentToWrite.txt");

readStream.pipe(zlib.createGunzip()).pipe(writeStream);
console.log("File Decompressed!");
