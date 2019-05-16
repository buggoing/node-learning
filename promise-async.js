function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        console.log('here: ', x)
        setTimeout(() => {
            resolve(x)
        }, 2000)
    })
}


 resolveAfter2Seconds(23).then(res => {
    console.log('p1 over')
}).then(res => {
    JSON.parse(';;l')
    console.log('after')
    return b
})
.catch(err => {
    console.log('parse p1 wrong')
})

function throwError() {
    return new Promise((resolve, reject) => {
        JSON.parse(';;')
        return resolve('ok')
    })
}

function throwError1() {
    return new Promise((resolve, reject) => {
        try {
            JSON.parse(';;')
        } catch(err) {
            return reject(err)
        }
        return resolve('ok')
    })
}

async function test() {
    try {
        // let ok1 = await throwError()
        let ok1 = await throwError1()
        console.log('ok: ', ok1)
    } catch (err) {
        console.log('err: ', err)
    }
}

test()