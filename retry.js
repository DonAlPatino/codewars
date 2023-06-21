const maxAttemps = 3;
const expected = 'expected';
let attemps = 0;
function retry(func, attempts) {
    // throw new Error('Not implemented');
    return function () {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i <= attempts; i++) {
            try {
                func(); // delegate
            } catch (e) {
                console.log(i)
            }
        }
        return func();
    };
}

const fn = () => {
    attemps += 1;
    if (attemps < maxAttemps) throw new Error();
    return expected;
};

console.log(retry(fn, maxAttemps)());
