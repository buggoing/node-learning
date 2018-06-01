const fs = require('fs')

function readfile (filename, callback) {
    fs.readFile(filename, (err, data) => {
        if (err) {
            console.log('readfile faild')
            return
        }
        callback(data)
    })
}

readfile('child.js', console.log)
