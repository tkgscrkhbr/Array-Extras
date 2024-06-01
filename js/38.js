'use strict'
var monsterArray = [1, 50, 100, 101, 105, 200, 5000]

var res = filterBiggerThan100(monsterArray)
console.log(res)
function filterBiggerThan100(array) {
    var newArray = array.filter(num => num > 100)
    return newArray

}
/*
biggerThan100(monsterArray)
function biggerThan100(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 100) {
            console.log(array[i])
            res.push(array[i])

        }
    }

}

console.log(res)
*/