function compose(...fns) {
    return (arg) => fns.reduceRight((res, fn) => fn(res),arg);
}

const addOne = (a) => a + 1
const multTwo = (b) => b * 2

compose(multTwo, addOne)(5)
