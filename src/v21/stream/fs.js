const fs = require("fs");
let data = "";

// create readable stream
const readerStream = fs.createReadStream("./input.txt");

// set encoding
readerStream.setEncoding("UTF8");

readerStream.on("data", function (chunk) {
  data += chunk;
});

readerStream.on("end", function () {
  console.log("🚀 ~ file: fs.js:15 ~ data:", data);
});

readerStream.on("error", function (error) {
  console.log(error.stack);
});
