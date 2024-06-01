var input = ['abcdefg', 'xyz'];
var expected = ['Abcdefg', 'xyz']
console.log(capitalizeLongerThan5(input))

function capitalizeLongerThan5(array) {
    var narray = []
    array.forEach(str => {
        if (str.length > 5) {
            narray.push(capitalizeFrstLtr(str))
        }
        else narray.push(str)
    }
    )
    return narray
}

function capitalizeFrstLtr(str){
   var nStr= str[0].toUpperCase()+str.slice(1)
return nStr
}