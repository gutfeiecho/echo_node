const fs = require("fs");

// asynchronous
fs.open("input.txt", "r+", function (err, fd) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("🚀 ~ file: open.js:5 ~ fd:", fd, typeof fd);
  console.log("Open file successfully.");
});
