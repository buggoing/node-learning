/*
test
curl localhost:8080?client=1
功能：
客户端向服务端发送http请求后，服务端需等待某一事件触发后才返回
*/

const http = require('http')
const EventEmitter = require('events')


const emitterMap = {
}

http.createServer((req, res) => {
    let url = req.url
    let client = url.split('?')[1].split('=')[1]
    console.log(client)
    let ee = emitterMap[client]
    if (!ee) {
        ee = new EventEmitter()
        emitterMap[client] = ee
    }
    ee.removeAllListeners()
    ee.once('payres', (data) => {
        console.log('get payres')
        console.log(res)
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end(data)
    })
    console.log(req.url)
}).listen(8080)


setInterval(() => {
    let clients = Object.keys(emitterMap)
    clients.forEach((value, index) => {
        let ee = emitterMap[value]
        if (ee) {
            ee.emit('payres', 'hello')
        }
    })

}, 3000)

