function getCommonCharacterCount(s1, s2) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arrA = s1.split("")
    let arrB = s2.split("")
    let result = [];
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length;j++) {
            if (arrA[i] == arrB[j]) {
                result.push(arrA[i]);
                arrB.splice(j,1)
                arrA.splice(i,1)
                console.log(arrA , arrB)
                continue;
            }
        }
    }

    return result.length;

}

console.log(getCommonCharacterCount('abca', 'xyzbac'))