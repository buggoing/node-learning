const net = require('net')
const maxConnectCount = 1000

for (let i = 0; i < maxConnectCount; ++i) {
    const client = net.createConnection({
        port: 8080,
        host: '127.0.0.1'
    })
    client.on('data', (data) => {
        console.log(data.toString())
    })
}
