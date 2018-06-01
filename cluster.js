const cluster = require('cluster') // | |
const http = require('http') // | |
const numCPUs = require('os').cpus().length // | |    都执行了
if (cluster.isMaster) { // |-|-----------------
    // Fork workers.                             //   |
    for (var i = 0; i < numCPUs; i++) { //   |
        cluster.fork() //   |
    }
    console.log(`parent ${process.pid}`) //   | 仅父进程执行 (a.js)
    cluster.on('exit', (worker) => { //   |
        console.log(`${worker.process.pid} died`) //   |
    }) //   |
} else { // |-------------------
    // Workers can share any TCP connection      // |
    // In this case it is an HTTP server         // |
    http.createServer((req, res) => { // |
        res.writeHead(200)
        console.log(`from ${process.pid}`) //   |
        res.end('hello world\n') // |
    }).listen(8000) // |
} // |-------------------
console.log(process.pid)
