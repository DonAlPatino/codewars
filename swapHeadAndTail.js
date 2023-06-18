function swapHeadAndTail(arr) {
    if (arr.length % 2 === 0) {
        return arr.slice(arr.length / 2, arr.length).concat(arr.slice(0, arr.length / 2));
    }
    return arr.slice(arr.length / 2 + 1, arr.length)
        .concat(arr[Math.floor(arr.length / 2)]).concat(arr.slice(0, arr.length / 2));
}
    /*let middle = arr.length / 2;
    const head = arr.splice(0, middle);
    middle = arr.length % 2 === 0 ? middle : middle - 1;
    const tail = arr.splice(middle, arr.length);
    return tail.concat(arr).concat(head);*/

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]))
console.log(swapHeadAndTail([ 1, 2]))
console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6, 7, 8]))
