//此文件中代码在node中运行
const net = require('net');
let client = net.Socket();
client.connect(3400, '127.0.0.1', () => {
    setTimeout(() => {
        client.write('我杀了一个boss');
    }, 2000);
});
client.on('data', data => {
    //data为buffer,toString转换为字符串
    console.log(data.toString());
});