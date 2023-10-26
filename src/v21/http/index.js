const http = require("http");
const fs = require("fs");
const path = require("path");

const responseImg = (path, response) => {
  fs.readFile(path, "binary", function (err, file) {
    if (err) {
      console.error(err);
      return;
    }
    response.writeHead(200, { "Content-Type": "image/jpeg" });
    response.write(file, "binary");
    response.end();
  });
};

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/index")) {
    let filePath = path.join(__dirname, "www", "index.html");
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.end("Server Error");
      }
      res.end(data);
    });
  }
  if (req.url === "/favicon.ico") {
    responseImg("../../assets/avatar_01.jpg", res);
  }
});

server.listen(3000);
