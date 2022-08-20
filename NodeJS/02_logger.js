function log(message) {
  console.log("Message is : ", message);
}

var pi = 3.142;

// module.exports.log = log; //export with a same name!
//module.exports.pi = pi; //export with a same name!

//export with a different name!
module.exports.printMethod = log;
module.exports.piValue = pi;
