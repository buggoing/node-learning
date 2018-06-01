const net = require('net')
const client = net.createConnection({ port: 8080 }, () => {
    // 'connect' listener
    console.log('connected to server!')
    client.write('world!\r\n')
})
client.on('data', (data) => {
    console.log(`received: ${data}`)
    client.end()
})
client.on('end', () => {
    console.log('disconnected from server')
})
