const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myE = new Emitter();

// defining a listener for an event named 'foo'
// it just pushes the function to the array in master object where key is the event name
myE.on("foo", () => {
  console.log("An event occurred 1");
});

myE.on("foo", () => {
  console.log("An event occurred 2");
});

myE.on("foo", (x) => {
  console.log("An event with param occurred ", x);
});

myE.once("bar", () => {
  console.log("An event occurred bar");
});

// firing that event
// just calls all the functions associated with the event name
myE.emit("foo", "hello");
myE.emit("bar");
// below two will not give any result because once() was used to define the listener
myE.emit("bar");
myE.emit("bar");
