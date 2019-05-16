const EventEmitter = require('events')

let myee = new EventEmitter()

myee.emit('test', 'test1')


myee.on('test', (data) => {
    console.log('get test event: ', data)
})

myee.emit('test', 'test2')
