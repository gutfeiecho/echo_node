/**
 * Node.js中的HTTP模块中封装了一个HTTP服务器和一个简单的HTTP客户端，http.Server是一个基于事件的HTTP服务器，http.request则是一个HTTP客户端工具，
 * 用于向HTTP服务器发起请求。createServer()方法中的两个参数req和res分别代表了请求对象和响应对象。
 * req是http.IncomingMessage的实例，res是http.ServerResponse的实例。
 */
const http = require('http');

// 最简单的方式创建一个本地服务
// http.createServer(function(req, res) {
//     res.write('Hello World!');
//     res.end();
// }).listen(8999);

// 客户端发送请求与ajax类似
const request = http.request("http://localhost:8999", {
    method: 'GET'
}, (res) => {

    // console.log('响应信息--->', res);
    console.log('socket--->', res.socket);
    console.log('响应头--->', res.headers);
    console.log('状态码--->', res.statusCode);
    console.log('statusMessage--->', res.statusMessage);
    let result = "";
    res.on('data', (chunk) => {
        result += chunk.toString('utf-8');
    });

    res.on('end', () => {
        // console.log('执行完毕。');
        // console.log('响应信息--->', res.data, typeof res.data);
        console.log('响应信息--->', JSON.parse(result));
    });
});

request.end(); //表示消息体结束
