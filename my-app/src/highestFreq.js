function highestFreq(arr) {
    var map = new Object()
    for (var i = 0; i < arr.length; i++) {
        var ch = arr[i]
        if (!(`${ch}` in map)) {
            map[ch] = 1
        } else {
            map[ch]++
        }
    }
    max = 0
    val = ""
    Object.keys(map).forEach((key) => {
        if (map[key] > max) {
            val = key
        }
    });
    return `${val} is having highest frequency which is ${max}`
}

console.log(highestFreq([1, 2, 4, 1, 5, 2, 5, 3, 2, 5, 2, 2, 5, 4, 2, 3, 5]))