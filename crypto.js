const crypto = require('crypto')

let s = Buffer.from('a=geewoodetectmidea&k=mdeybjeycu1erxliakv5y1e9pu1erxl&e=1526289664&t=1526288764', 'utf-8')
// console.log(s);
let sk = 'iakv5y1uxrvjybglha1y1wtffovbrpt08d7ab2ck'
let cs = crypto.createHmac('sha1', sk).update(s, 'utf8').digest()
console.log(cs)
console.log(cs.toString('utf8'))

// let buff = Buffer.from([])
