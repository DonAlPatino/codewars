function getElementByIndexes(arr, indexes) {
    // throw new Error('Not implemented');
    const sum = indexes.reduce(function (currArr, i) {
        console.log(currArr[i] + ' '+ i)
        return currArr[i]
    }, arr)
    return sum;
    // return indexes.reduce((currArr, i) => currArr[i], arr);
}
// console.log(getElementByIndexes([[1, 2], [3, 4], [5, 6]],[0, 0]));
function group(array, keySelector, valueSelector){
    console.log(array.map(keySelector));

    return array.map(keySelector).reduce(
        (map, key, i) => map.set(key, (map.get(key) || []).concat(valueSelector(array[i]))),
        new Map(),
    );
}
/*
console.log(group ([
    { country: 'Belarus', city: 'Brest' },
    { country: 'Russia', city: 'Omsk' },
    { country: 'Russia', city: 'Samara' },
    { country: 'Belarus', city: 'Grodno' },
    { country: 'Belarus', city: 'Minsk' },
    { country: 'Poland', city: 'Lodz' },
],
    (item) => item.country,
    (item) => item.city));
*/
function chainPromises(array, action) {
    // throw new Error('Not implemented');
   const arr = [];
    const res = array.map((el) => Promise.resolve(el)
        .then((value) => {
            arr.push(value);
        })
        .then(() => arr.reduce(action))
        .catch(() => { }));
    return res[0];
    /*const res = Promise.all(array)
        .then((data) => data.reduce(action))
        .catch(() => { });
    return res;*/
}

const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
const p = chainPromises(promises, (a, b) => a + b);
p.then((res) => {
    console.log(res) // => 6
});
