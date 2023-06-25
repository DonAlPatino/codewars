/*var curriedAdd = curryPartial(add);
curriedAdd(1)(2)(3); //6

var partialAdd = curryPartial(add, 1);
partialAdd(2, 3); //6
*/
function add(x, y, z) {
    return x + y + z;
}
const curryPartial = (fn, ...args) =>
    (args.length >= fn.length) ?
        fn(...args) :
        (...params) =>
            curryPartial(fn, ...args, ...params)

let res = curryPartial(add)(1)(2)(3);
res = curryPartial(add)()(1, 2, 3);
console.log(res)
