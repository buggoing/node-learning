const util = require('util')
const fs = require('fs')

util.promisify(fs.readFile)('sum.j')
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log('err in readfile', err)
    })
