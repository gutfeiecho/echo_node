const fs = require("fs");

fs.readdir("E:/artwork/echo_node/src/v21/fs/tmp/text", function (err, files) {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach(function (file) {
    console.log(
      "🚀 ~ file: readdir.js:11 ~ files.forEach ~ file:",
      file,
      typeof file
    );
  });
});
