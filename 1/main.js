let arr = ['a', 'b', 'c'];

console.log(arr);       // [ 'a', 'b', 'c' ]
deleteByIndex(arr, 1);  // remove 'b'
console.log(arr);       // [ 'a', 'c' ]

function deleteByIndex(array, index) {
    if (index > -1 && index < array.length) {
        array.splice(index, 1);
    }
}