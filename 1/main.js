let arr = ['a', 'b', 'c'];

alert('Befor delete:\n' + arr);     // [ 'a', 'b', 'c' ]
deleteByIndex(arr, 1);              // remove 'b'
alert('after delete:\n' + arr);     // [ 'a', 'c' ]

function deleteByIndex(array, index) {
    if (index > -1 && index < array.length) {
        array.splice(index, 1);
    }
}