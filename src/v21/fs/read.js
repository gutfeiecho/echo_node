/**
 * fs.read(fd, buffer, offset, length, position, callback)
 * fd-通过fs.open()方法返回的文件描述符
 * buffer-数据写入的缓冲区
 * offset-缓冲区写入的写入偏移量
 * length-要从文件中读取的字节数
 * position-文件读取的起始位置，如果position的值为null，则会从当前文件指针的位置读取
 * callback-回调函数，有三个参数err,bytesRead, buffer, err表示错误信息，bytesRead表示读取的字节数，buffer为缓冲区对象。
 */
const fs = require("fs");
const buffer = new Buffer.alloc(1024);
console.log("🚀 ~ file: read.js:11 ~ buffer:", buffer, buffer.length);

fs.open("input.txt", "r+", (err, fd) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.read(fd, buffer, 0, buffer.length, 0, function (err, bytes) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(
      "🚀 ~ file: read.js:13 ~ fs.read ~ bytes:",
      bytes,
      bytes instanceof Buffer
    );
    if (bytes > 0) {
      console.log(buffer.slice(0, bytes).toString());
    }
  });
});
