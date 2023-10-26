const fs = require("fs");

fs.stat("input.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("🚀 ~ file: stat.js:4 ~ fs.stat ~ stats:", stats);
  console.log("Is File: ", stats.isFile());
  console.log("Is Directory: ", stats.isDirectory());
  console.log("Is BlockDevice: ", stats.isBlockDevice());
  console.log("Is CharacterDevice: ", stats.isCharacterDevice());
  console.log("Is SymbolicLink: ", stats.isSymbolicLink());
  console.log("Is FIFO: ", stats.isFIFO()); // FIFO是UNIX中的一种特殊类型的命令管道
  console.log("Is Socket: ", stats.isSocket());
});
