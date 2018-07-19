function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        console.log('here: ', x)
        setTimeout(() => {
            resolve(x)
        }, 2000)
    })
}

async function add1(x) {
    var a = resolveAfter2Seconds(20)
    var b = resolveAfter2Seconds(30)
    return x + await a + await b
}

console.log('begin')
add1(10).then(v => {
    console.log('async 2s later')
    console.log(v) // prints 60 after 2 seconds.
})
console.log('end begin')

resolveAfter2Seconds(101).then(x => {
    console.log('2s later')
})

let a = resolveAfter2Seconds(212)
a.then(x => console.log('******', x))
// console.log('**********a:', a)

setTimeout(function () {
    console.log(1)
}, 0)
new Promise(function executor(resolve) {
    console.log(2)
    for (let i = 0; i < 10000; i++) {
        i === 9999 && resolve()
    }
    console.log(3)
}).then(function () {
    console.log(4)
})
console.log(5)

const EventEmitter = require('events')

let emitter = new EventEmitter()

emitter.on('myEvent', function sth() {
    console.log('hi')
})

// emitter.on('myEvent', () => {
//   console.log('hi 2');
// });

emitter.emit('myEvent')

function test() {
    process.nextTick(() => console.log('test in nextTick'))
    console.log('ind test')
}

test()
console.log('end test')

function promise1(x) {
    return new Promise((resolve, reject) => {
        console.log('from promise1', x)

        p2(2).then(x => {
            // return Promise.reject(new Error('error from promise1'))
            resolve('....')
        }).then(x => {
            console.log('agerss')
        }).catch(err => {
            console.log('catch in promise1')
            reject(err)
        })
    })
}

function p2(x) {
    return new Promise((resolve, reject) => {
        console.log('from p2', x)
        resolve(x)
    })
}

p2(23).then((x) => {
    console.log('recvied: ', x)
    p2(11).then(() => {
        return Promise.reject(1111)
    }).catch((err) => {
        console.log('err in inner p2', err)
    })
}).catch(err => {
    console.log('err in p2 catch', err)
})

// p2(323).then(x => {
//     promise1(x).then(() => {
//         console.log('xxxxx');
//     }).catch(err => {
//         console.log('in err1');
//         console.log(err);
//     })
// }).catch(err => {
//     console.log('in err2');
//     console.log(err);
// })

// function run() {

//     let v1 = 3
//     let v2 = 42

//     resolveAfter2Seconds(2)
//         .then(x => {
//             console.log('then1: ', x)
//             console.log('v1: ', v1)

//             return resolveAfter2Seconds(2 * x)
//             // return Promise.reject('error test')
//         })
//         .then(x => {
//             console.log('then2: ', x)
//             return resolveAfter2Seconds(2 * x)
//         })
//         .then((x) => {
//             console.log(x)
//             console.log('v2: ', v2)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

// run()

promise1(23).then(() => {
    console.log('then promise1')
}).catch(err => console.log(err))