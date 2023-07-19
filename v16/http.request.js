const http = require('http');
const querystring = require('querystring');

// 启动服务
http.createServer(function (req, res) {
    console.log('开始请求, 解析参数');

    // 解析post请求
    let post = '';
    req.on('data', function(chunk) {
        post += chunk;
    });
    req.on('end', function() {
        post = querystring.parse(post);
        // 解析完成
        console.log('参数解析完成，返回name参数');
        res.end(post.name);
    });
}).listen(8999);

// 声明请求参数
const contents = querystring.stringify({
    name: 'lucas',
    age: 28,
    city: 'HangZhou'
});

// 声明请求配置
const options = {
    host: 'localhost',
    path: '/',
    port: 8999,
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'content-length': contents.length
    }
};

// 发送请求
const req = http.request(options, function(res) {
    res.setEncoding('utf-8');
    res.on('data', function(data) {
        console.log('后台返回数据');
        console.log('name参数的值为：' + data);
    })
});

req.write(contents);
// 必须调用end()
req.end();