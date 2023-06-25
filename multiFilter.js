function isEven(el){
    return el % 2 === 0;
}

function isGTten(el){
    return el > 10;
}

var multiFilter = function(...funcs){
    if (!funcs.length) return () => true;
        return funcs.reduce(function(f,g) {
        return function(x) {
            return f(x) & g(x);
        };
    });
};

const compose = (...fns) => x => fns.reduce((y, f) => f(y), x);

console.log([1,2,3,4,10,11,12,20,21,22].filter(multiFilter())); //isEven, isGTten
const double = x => x * 2
const square = x => x * x

// function composition
var output_final = compose(square, double)(2);
console.log(output_final);
