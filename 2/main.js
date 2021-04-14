let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [9, 8, 7, 0];
let array = [];

array = Combine(arr1, arr2, arr3);
alert(array);           // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

function Combine(...arrays) {
    let tmp = [];
    for (let arr of arrays) {
        tmp = tmp.concat(arr);
    }
    tmp.sort();
    return tmp;
}