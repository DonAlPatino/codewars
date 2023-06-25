function getIdGeneratorFunction(startFrom) {
// throw new Error('Not implemented');
    let index = startFrom;
    function* idMaker() {
        while (true) {
            yield index++;
        }
    }
    return () => idMaker().next().value;
}

const getId4 = getIdGeneratorFunction(4);
console.log(getId4())
console.log(getId4())

var abc = makeLooper('abc');
function makeLooper(str) {
    let index = 0;
    function* idMaker() {
        while (true) {
            if (index === 3) index = 0;
            yield str[index++];
        }
    }
    return () => idMaker().next().value;
}
console.log(abc())
console.log(abc())
console.log(abc())
console.log(abc())
