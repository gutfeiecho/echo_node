const fs = require("fs");

// asynchronous
fs.readFile("../../assets/avatar_01.jpg", "binary", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous: " + data.toString());
});

// synchronous
// const data = fs.readFileSync("../../assets/avatar_01.jpg", "binary");
console.log("Synchronous: " + data.toString());

console.log("Operation Successfully!");
