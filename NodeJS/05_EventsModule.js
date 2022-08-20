const EventEmitter = require("events");

const emitter = new EventEmitter();

//1. Define an event
//2. What will happen on that event
//3. Trigger that event

//2. What will happen on that event
let invokeLogger = (a, b) => {
  console.log("Log event is triggered!");
  console.log("Value of A:- ", a, " and B :-", b);
};

//1. Define an event and bind an event handler
emitter.on("logMsg", invokeLogger);


//3. Trigger the event!
emitter.emit('logMsg', 10, 20);
emitter.emit('logMsg', 'Argument-A', 'Argument-B');
