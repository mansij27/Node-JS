function maxDiffArr(nums) {
    nums = nums.sort((a, b) => { return a - b })
    var i = 0
    var j = 1
    const len = nums.length
    var diff = 0
    while (j < len) {
        var newDiff = nums[j] - nums[i]
        diff = Math.max(diff, newDiff)
        i += 1
        j += 1
    }
    return `Max difference is ${diff}`
}

console.log(maxDiffArr([1, 20, 33, 5]))