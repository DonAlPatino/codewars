/*Array.prototype.map=function(func,obj){
    console.log(obj)
    var arr=[];
    arr.length=this.length;
    for(var i in this){
        console.log(this[i])
        if(isNaN(Number(i)))continue;
        arr[i]=(func.apply(obj,[this[i],Number(i),this]));
    }
    return arr;
}

Array.prototype.map = function(fn, nThis) {
    var newArr = this.slice();
    this.forEach((v, i, arr) => newArr[i] = fn.apply(nThis, [v, i, arr]));
    return newArr;
}
*/

Array.prototype.map = function (callback, context) {
    console.log(context)
    const newArr = new Array(this.length)
    for (let i = 0; i < this.length; i++) {
        if (i in this) newArr[i] = callback.call(context, this[i], i, this)
    }
    return newArr
}

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var multiply_by_two = function (x) {
    return x * 2
};
var one_to_nine_doubled = one_to_nine.map(multiply_by_two);

/*Array.prototype.filter = function (callback, context) {
    const newArr = new Array
    let j = 0;
    for (let i = 0; i < this.length; i++) {
        //if (i in this) newArr[i] = callback.call(context,this[i], i, this)
        if (i in this) {
            if (callback.call(context, this[i], i, this) == true) newArr[j++] = this[i]
        }
    }
    return newArr
}
Array.prototype.filter = function (fn) {

    const filtered = []; // it will receive all values that match to condition passed in fn callback.

    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            filtered.push(this[i]);
        }
    }

    return filtered;
};
}*/

Array.prototype.filter = function (fn, context) {

    let filtered = []; // it will receive all values that match to condition passed in fn callback.
    if (context) {
        fn = fn.bind(context)
    }

    let th = this;
    const len = th.length;
    for (let i = 0; i < len; i++) {
        //       if (this[i] === undefined) continue
        if (i in th) {
            if (fn(th[i], i, th)) {
                filtered.push(th[i]);
            }
        }
    }
    return filtered;
};

var lower_than_six = (x) => x < 6
base_array = [undefined, null, 0, NaN, " \'\'", false];
let even_numbers = base_array.filter(function (x, i, a) {
    a.push(x);
    return this[i] == i;
})
//let one_to_five = one_to_nine.filter(even_numbers);
console.log(even_numbers)

Array.prototype.filter = function (fun, that) {
    let out = [];

    if (that) {
        fun = fun.bind(that);
    }

    let t = this;
    let len = t.length;
    for (let i = 0; i < len; i++) {
        if (i in t) {
            if (fun(t[i], i, t)) {
                out.push(t[i]);
            }
        }
    }
    return out;
};