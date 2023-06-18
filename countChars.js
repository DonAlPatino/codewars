s = 'The quick brown fox jumps over the lazy dog';
function findFirstSingleChar(str) {
    let txtArr = str.split('');
    let objCnt = txtArr.reduce((accum, currVal) => {
        accum[currVal] = (accum[currVal] || 0) + 1;
        return accum;
    }, {});
    for (let key in objCnt) {
if (objCnt[key] === 1) return key
    }
    return null
}
console.log(findFirstSingleChar(s))

