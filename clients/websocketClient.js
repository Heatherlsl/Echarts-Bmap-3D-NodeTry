//此文件中代码在浏览器控制台运行
const client = new WebSocket('ws://localhost:3000/');
client.onmessage = message => {
    console.log(message);
};
setTimeout(() => {
    client.send('你好');
}, 4000);