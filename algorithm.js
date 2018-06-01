const assert = require('assert')
/**
 * @param {any} n
 * @returns {number}
 */
function fn (n) {
    let sum = 1
    assert(n > 0)
    for (let i = 1; i <= n; ++i) {
        sum *= i
    }
    return sum
}
console.log(process.argv)
console.log(fn(process.argv[2]))
