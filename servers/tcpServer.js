const net = require('net');
let server = net.createServer(() => {
    console.log('some connect on');
});
server.listen(3400);
server.on('connection', socket => {
    socket.write('游戏登录成功');
    socket.on('data', data => {
        //data为buffer,toString转换为字符串
        // console.log(data.toString());
        socket.write("给你爆一套神器");
    });
});