let str = "i have 2 apples and 3 pineapples";

let numbers = extractNumber(str);
console.log(numbers);

//--------------------------------------------
function extractNumber(string) {
    let words = string.split(' ');
    let num = [];
    for (let word of words) {
        if (!isNaN(+word)) {
            num.push(+word);
        }
    }
    return num;
}