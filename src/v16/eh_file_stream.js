// 方案一： 利用readFile读取大文件，并且响应给用户。
// const fs = require("fs");

// const server = require("http").createServer();
// server.on("request", (req, res) => {
//   fs.readFile("./big.file", (err, data) => {
//     if (err) throw err;
//     res.end(data);
//   });
// });

// server.listen(8000);

// 方案二：利用createReadStream读取大文件
const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  const src = fs.createReadStream("./big.file");
  src.pipe(res);
});

server.listen(8088);
