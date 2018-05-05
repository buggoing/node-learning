const log = console.log;

class Test {
    constructor(size, area = 23) {
        this.size = size;
        this.area = area;
    }

    sayHello() {
        log(this.size + "," + this.area);
    }
}

let test = new Test(11);
test.sayHello();