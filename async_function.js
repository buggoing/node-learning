function asyncFunc(elapse) {
    setTimeout(() => {console.log(Date.now())}, elapse)
}


for(let i = 0; i < 100; i++) {
    asyncFunc(1000)
    console.log('over: ', i)
}