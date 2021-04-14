let array = [[2, 3], 5, [[[2, 9], 4], 4], 1, 0];

let flatArray = [];
flat(array);
console.log(flatArray);

function flat(arr) {
    for(let val of arr) {
        if(Array.isArray(val)) {
            flat(val);
        } else {
            flatArray.push(val)
        }
    }
}
