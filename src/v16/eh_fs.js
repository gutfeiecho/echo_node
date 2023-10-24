const fs = require("fs");

const file = fs.createWriteStream("./big.file");

for (let i = 0; i < 10000000; i++) {
  file.write("This is a file for testing node stream. \n");
}

file.end();
