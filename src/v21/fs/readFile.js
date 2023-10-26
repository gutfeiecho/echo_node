const fs = require("fs");

// asynchronous
fs.readFile("input.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous: " + data.toString());
});

// synchronous
const data = fs.readFileSync("input.txt");
console.log("Synchronous: " + data.toString());

console.log("Operation Successfully!");
