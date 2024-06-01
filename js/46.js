'use strict'


var nNums = [3, 5, 7, 9, 32]

console.log(multBy(nNums, 3))
function multBy(nums, multiplier) {
    var multArray = nums.map(num => num * multiplier)
    return multArray
}