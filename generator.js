const arrayRange = (len) =>
    Array.from(
        { length: len },
        (value, index) => 1 + index * 2
    );

console.log(arrayRange( 5)); // [1,2,3,4,5]

function getArrayOfPositives(arr) {
    // throw new Error('Not implemented');
    arr.filter((value) => value > 0);
}

console.log([0, 1, 2, 3, 4, 5].filter((value) => value > 0))

function insertItem(arr, item, index) {
    // throw new Error('Not implemented');
    return [...arr.slice(0, index), item, ...arr.slice(index)];
}

console.log(insertItem ([1, 3, 4, 5],2, 1))

function get3TopItems(arr) {
    // throw new Error('Not implemented');
    return arr.sort((a, b) => b - a).slice(0, 3);
}
console.log(get3TopItems([1, 2, 3]));
