var input = ['return', 'phrases', 'with one word'];
var expected = ['return', 'phrases']
var actual = onlyOneWord(input)

function onlyOneWord(array) {
    /*   var narray=[]
        array.forEach(str => {
            if (!str.includes(" "))narray.push(str)
        })
    return narray */

    var narray = array.filter(str => !str.includes(' '))
    return narray
}




console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual); 