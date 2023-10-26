const fs = require("fs");

fs.unlink("input.txt", function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Delete successfully.");
});
