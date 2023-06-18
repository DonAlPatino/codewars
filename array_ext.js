var assert = require('assert');
Array.prototype.square = function (){
return this.map(x => x * x);
}

Array.prototype.cube = function (){
    return this.map(x => x * x * x);
}
Array.prototype.average = function() {
    if (this.length === 0) return NaN;
    return this.reduce((a, b) => a + b) / this.length
}
Array.prototype.sum = function (){
    return this.reduce((a, b) => a + b);
}

Array.prototype.even = function (){
    return this.filter(x => x%2===0);
}

Array.prototype.odd = function (){
    return this.filter(x => x%2);
}
var numbers = [1, 2, 3, 4, 5];
assert.deepEqual(numbers.square(), [1, 4, 9, 16, 25]);
assert.deepEqual(numbers.cube(), [1, 8, 27, 64, 125]);
assert.deepEqual(numbers.average(), 3);
assert.strictEqual(numbers.sum(), 15, 'Wrong sum');
assert.deepEqual(numbers.even(), [2, 4], 'Wrong result for even()');
