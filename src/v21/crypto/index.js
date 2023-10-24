const crypto = require("node:crypto");
const fs = require("node:fs");
const { Writable } = require("node:stream");

// console.log(crypto.getHashes());

// function generateHash(message, type) {
//   const hash = crypto.createHash(type).update(message).digest("hex");
//   console.log(type, hash, typeof hash, hash.length);
// }

// hash算法加密字符串
// generateHash("Hello,Lucas.", "md5");
// generateHash("Hello,Lucas.", "sha512");
// generateHash("Hello,Lucas.", "sha512-256");
// generateHash("Hello,Lucas.", "sha512-224");

// const fsStream = fs.createReadStream("./crypto.md");
// const hash = crypto.createHash("sha1");
// fsStream.on("readable", () => {
//   const data = fsStream.read();
//   if (data) {
//     console.log("🚀 ~ file: index.js:22 ~ fsStream.on ~ data:", data);
//     hash.update(data);
//   } else {
//     console.log("🚀 ~ file: index.js:21 ~ fsStream.on ~ data:", data);
//     console.log(`${hash.digest("hex")}`);
//   }
// });

const hash = crypto.createHash("sha1");
const fsStreamPipe = fs.createReadStream("./crypto_pipe.md");
// fsStreamPipe.pipe(hash).pipe(process.stdout);

const write = Writable();
write._write = function (data, enc, next) {
  process.stdout.write(hash.digest("hex") + "\n");

  process.nextTick(next);
};

fsStreamPipe.pipe(hash).pipe(write);
