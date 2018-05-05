function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function add1(x) {
    var a = resolveAfter2Seconds(20);
    var b = resolveAfter2Seconds(30);
    return x + await a + await b;
}


add1(10).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
});

let a = resolveAfter2Seconds(212);
a.then(x => console.log('******', x))
// console.log('**********a:', a)

setTimeout(function() {
    console.log(1)
}, 0);
new Promise(function executor(resolve) {
    console.log(2);
    for (let i = 0; i < 10000; i++) {
        i === 9999 && resolve();
    }
    console.log(3);
}).then(function() {
    console.log(4);
});
console.log(5);

const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', function sth() {
    emitter.on('myEvent', sth);
    console.log('hi');
});

// emitter.on('myEvent', () => {
//   console.log('hi 2');
// });

emitter.emit('myEvent');

function test() {
    process.nextTick(() => test());
    console.log('ind test');
}

test();
console.log('end test');