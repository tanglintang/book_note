function staircase(n) {
    for (let i = 0; i < n; i++) {
        let char = ''
        for (let j = 0; j < n; j++) {
            if (j < n - i - 1) {
                char += 's'
            } else {
                char += '#'
            }
        }
        console.log(char)
    }
}

staircase(6)