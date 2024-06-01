'use strict'

var numsForCheck = [3, 2, 0, 2, 2, 0, 3]



console.log(numCounter(numsForCheck))
function numCounter(nums) {
    var res = [0, 0, 0, 0]
    nums.forEach(num => res[num]++)
    return res
}



// var vals = printNumsCount([3, 2, 0, 2, 2, 0, 3])
// console.log('res:', vals)

// function printNumsCount(nums) {
//     var counts = [0, 0, 0, 0]

//     for (var i = 0; i < nums.length; i++) {
//         var num = nums[i] // 3 , 2
//         console.log('num:', num)
//         counts[num]++ // counts[3]++ , counts[2]++
//     }
//     return counts
// }