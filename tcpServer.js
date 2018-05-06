const net = require('net');

const server = net.createServer(socket => {
    socket.on('data', data => {
        console.log(`received: ${data}`);
        socket.write("你好");
    })

    socket.on('end', () => {
        console.log("连接断开");
    })

    socket.write('欢迎');
});

server.listen(8080, () => {
    console.log("starting...")
})