function getMax () {
    const arr = []
    arr.push(...arguments)
    const res = arr.sort((a, b) => {
        return a - b
    })
    return ( res[0] + res[1] ) * res[2]
}

console.log(getMax(1, 10, 3))
