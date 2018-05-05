function factorial(num) {
    if (num <= 1) { return 1; }
    return num * arguments.callee(num - 1);
}

function inner() {
    console.log(arguments.callee.caller);
}

function outer() {
    inner();
}

outer();

function sum(num1, num2) {
    return num1 + num2;
}

function applySum(num1, num2) {
    return sum.apply(this, arguments);
    // retrun sum.apply(this, [num1, num2])
}

function callSum(num1, num2) {
    return sum.call(this, num1, num2);
}