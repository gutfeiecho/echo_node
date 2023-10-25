const net = require("node:net");
const PORT = 3000;
const HOST = "127.0.0.1";

/**
 * 服务端
 */
const server = net.createServer(function (socket) {
  console.log("服务端: 收到来自客户端的请求。");
  socket.on("data", function (data) {
    console.log(`服务端: 收到客户端数据, 内容为{${data}}。`);
    socket.write(`你好,我是服务端，从服务端接收到的内容为{${data}}`);
  });
  socket.on("close", function () {
    console.log("服务端: 客户端连接断开。");
  });
});

server.listen(PORT, HOST, function () {
  console.log("服务端: 开始监听来自客户端的请求。");
  console.log(server.address());
  // server.close((error) => {
  //   if (error) {
  //     console.log("close回调: 服务端异常: " + error.message);
  //   } else {
  //     console.log("close回调: 服务端正常关闭");
  //   }
  // });
});

server.on("close", function () {
  console.log("close事件: 服务端关闭");
});

server.on("error", function (error) {
  console.log("error事件: 服务端异常" + error.message);
});
