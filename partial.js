function partialUsingArguments(fn, ...args1) {
    return function(...args2) {
        return fn (...args1,...args2)
    }
}

const fn = (x1, x2, x3, x4) => x1 + x2 + x3 + x4;
console.log(partialUsingArguments(fn, 'a')('b', 'c', 'd'))

