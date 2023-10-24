const http = require('http');

const handler = function (req, res) {
    // console.log('客户端请求对象', req);
    // 发送响应消息
    res.writeHead(200, {'content-type': 'application/json', 'connection': 'keep-alive'});
    // res.write("hello");
    // res.end();
    res.end(JSON.stringify({
        data: 'Hello World!'
    }));
}


const server = http.createServer(handler);

server.listen(8999, () => {
    console.log('端口监听完成');
});

