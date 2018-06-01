let obj = {1: 0, 2: 12, 3: 'hello', 4: 'world', 55: 0}

for (let k in obj) {
    if (obj[k] === 0) {
        delete obj[k]
    }
}

let map = new Map([[1, 0], [12, 3], [3, 'hello'], [54, 0]])
map.forEach((value, key) => {
    if (value === 0) {
        map.delete(key)
    }
})

console.log(map)

console.log(obj)
