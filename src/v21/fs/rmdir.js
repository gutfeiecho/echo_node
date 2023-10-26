const fs = require("fs");
const path = require("path");

fs.rmdir("E:/artwork/echo_node/src/v21/fs/etc", function (err) {
  if (err) {
    console.error(err);
    return;
  }
  fs.readdir("E:/artwork/echo_node/src/v21/fs", function (err, files) {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach((file) => {
      console.log("🚀 ~ file: rmdir.js:16 ~ fs.readdir ~ file:", file);
    });
  });
});
