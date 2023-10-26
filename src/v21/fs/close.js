const fs = require("fs");
const buffer = new Buffer.alloc(1024);

// Will create close.txt if close.txt does not exist.
fs.writeFile(
  "close.txt",
  "This file is for testing close function.",
  function (err) {
    if (err) {
      console.error(err);
      return;
    }
    fs.open("close.txt", "r+", function (err, fd) {
      if (err) {
        console.error(err);
        return;
      }
      fs.read(fd, buffer, 0, buffer.length, 0, function (err, bytes) {
        if (err) {
          console.error(err);
          return;
        }

        // Only output bytes readed
        if (bytes > 0) {
          console.log(buffer.slice(0, bytes).toString());
        }

        fs.close(fd, function (err) {
          if (err) {
            console.error(err);
            return;
          }
          console.log("Close file successfully.");
        });
      });
    });
  }
);
