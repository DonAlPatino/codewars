function isIsogram(str1) {
    if (str1 === "") return true;
    let str = str1.toLowerCase();
    const strToArr = str.split("");
    console.log(strToArr);
    const strToSet = new Set(strToArr);
    console.log(typeof (strToSet));
    return str.length === strToSet.size;
}

function getLengthOfMissingArray(arrayOfArrays) {
    if (!Array.isArray(arrayOfArrays) || arrayOfArrays.length == 0) return 0;
    let arr_len = [];
    for (let arr of arrayOfArrays) {
        if (!Array.isArray(arr) || arr.length == 0) return 0;
        arr_len.push(arr.length);
    }
    arr_len.sort((a, b) => a - b)
    console.log(arr_len)
    for (let ind = 0; ind < arr_len.length; ind++) {
        if (arr_len[ind] + 1 != arr_len[1 + ind]) {
            return (arr_len[ind] + 1);
        }
    }
    return 0;
}


let i = getLengthOfMissingArray([ 0, 3 ])
console.log(i)