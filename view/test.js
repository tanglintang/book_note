const res = (function bar () {
    const a = 12
    return function () {
        console.log(a)
    }
})()
// const res = bar()
res()