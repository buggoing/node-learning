setTimeout(() => {
    console.log('setTimeout with 0')
}, 0)

setTimeout(() => {
    console.log('setTimeout with 1000')
}, 1000)

let num = 0
setInterval(() => {
    console.log(`setInterval 1000, num: ${num}`)
    num += 1
}, 1000)

setImmediate(() => console.log('setImmediate'))

process.nextTick(() => console.log('process.nextTick'))

console.log('main thread')
