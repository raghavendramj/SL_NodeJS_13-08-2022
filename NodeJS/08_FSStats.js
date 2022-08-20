const fs = require("fs");

fs.stat("06_AsyncRead.txt", (err, stats) => {
  if (err) console.log(err);
  else {
    console.log(stats);
    console.log("stats.isFile()", stats.isFile());
    console.log("stats.isDirectory()", stats.isDirectory());
  }
});
