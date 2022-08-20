const path = require("path");

console.log("FileName and its info :- ", path.parse(__filename));
console.log("Directory :- ", __dirname);

// console.log("process.env.PATH :- ", process.env.PATH);
console.log("process.env.PATH :- ", process.env.PATH.split(path.delimiter));

console.log("path.dirname() :- ", path.dirname("D:\\ApplicationServer\\pax_global_header"));

console.log("Extension :- ", path.extname("03_PathModule.txt.php"))
