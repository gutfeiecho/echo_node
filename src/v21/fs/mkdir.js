const fs = require("fs");
const path = require("path");

// The directory name of the current module.
console.log(__dirname);
// The file name of the current module.
console.log(__filename);

console.log("Create directory /tmp/test/ successfully.");

// 绝对路径
// fs.mkdir("E:/artwork/echo_node/src/v21/fs/tmp/", function (err) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Create successfully.");
// });

fs.mkdir(path.join(__dirname, "tmp", "text"), function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Create successfully.");
});
