
let helloword = require('./helloworld.js')
const fs = require('fs')

fs.watch(require.resolve('./helloworld.js'), function () {
    cleanCache(require.resolve('./helloworld.js'))
    try {
        helloword = require('./helloworld.js')
    } catch (ex) {
        console.error('module update failed')
    }
})

/**
 * @param {any} modulePath
 */
function cleanCache (modulePath) {
    let module = require.cache[modulePath]
    if (module.parent) {
        module.parent.children.splice(module.parent.children.indexOf(module), 1)
    }
    require.cache[modulePath] = null
}

setInterval(() => console.log(helloword), 1000)
