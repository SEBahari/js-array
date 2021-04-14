let arr = [1, 1, 4, 5, 3, 5, 3, 9];

arr = removeDuplicate(arr);
console.log(arr);

function removeDuplicate(array) {
    let uniq = [];
    for (let item of array) {
        if (!uniq.includes(item)) uniq.push(item);
    }
    return uniq;
}