const fs = require("fs");
const buffer = new Buffer.alloc(1024);

fs.open("LoseYourself.txt", "r+", function (err, fd) {
  if (err) {
    console.error(err, err instanceof Error);
    return;
  }
  fs.ftruncate(fd, 10, function (err) {
    if (err) {
      console.error(err);
      return;
    }
    fs.read(fd, buffer, 0, buffer.length, 0, function (err, bytes) {
      if (err) {
        console.error(err);
        return;
      }

      if (bytes > 0) {
        console.log(buffer.slice(0, bytes).toString());
      }

      fs.close(fd, function (err) {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Close successfully.");
      });
    });
  });
});
