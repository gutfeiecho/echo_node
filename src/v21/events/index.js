const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log("Someone say hi to you.");
};

const callbackB = () => {
  console.log("Nobody say hi to you.");
};
// Register event
myEmitter.on("sayHi", callbackA);
myEmitter.on("sayHi", callbackB);

myEmitter.on("error", (e) => {
  console.log("🚀 ~ file: index.js:15 ~ myEmitter.on ~ e:", e);
});

// Register event which can by emitted only once.
myEmitter.once("sayHiOnce", () => {
  console.log("Can say hi only once.");
});

// Emit event
myEmitter.emit("sayHi");
myEmitter.emit("sayHiOnce");
// myEmitter.emit("error", new Error("An error happened."));

console.log("-------------------");

myEmitter.emit("sayHiOnce");

myEmitter.removeListener("sayHi", callbackA);

setTimeout(() => {
  myEmitter.emit("sayHi");
}, 0);
