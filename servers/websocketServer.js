const ws=require('ws');
const websocketServer=ws.Server;
let wss=new websocketServer({
    port:3000
});
wss.on('connection',socket=>{
    socket.send("嘿嘿嘿你连上我了");
    setTimeout(()=>{
        socket.send('连上了你倒是说句话啊');
    },2000);
    socket.on('message',message=>{
        console.log(message.toString());
        socket.send('你也好');
    });
});