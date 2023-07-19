/**
 * http.Server是一个基于事件的服务器，继承自EventEmitter。http.Server提供的事件如下所示：
 * request：当客户端请求到来时，该事件被触发，提供两个参数req和res,表示请求和响应信息。
 * connection：当TCP连接建立时，该事件被触发，提供一个参数socket，是net.Socket的实例。
 * close：当服务器关闭时，触发该事件。
 */

const http = require('http');

const server = new http.Server();

server.on('request', function(req, res) {
    res.writeHead(200, {
        "content-type": "text/plain; charset=utf-8"
    });
    res.write('Hello World!');
    res.end();
});

server.listen(8999);