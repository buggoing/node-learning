const log = console.log

class Test {
    constructor (size, area = 23) {
        this.size = size
        this.area = area
    }

    sayHello () {
        log(this.size + ',' + this.area)
    }
}

class SubTest extends Test {
    constructor (...args) {
        super(...args)
        console.log('subtest')
    }
    sayGoodBye () {
        log('Bye Bye!')
    }
}

class Collection {
    constructor () {
        this.items = []
    }

    * [Symbol.iterator] () {
        for (let x of this.items) {
            yield x
        }
    }
}

let test = new Test(11)
let test1 = new Test(12)
test.sayHello()
console.log(test.sayHello === test1.sayHello)

let sub1 = new SubTest(24, 45)
sub1.sayGoodBye()
console.log(test.sayHello === sub1.sayHello)

let coll = new Collection()
coll.items.push(23, 45, 5)
for (let x of coll) {
    console.log(x)
}
