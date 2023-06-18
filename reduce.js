/*Array.prototype.reduce = function(process, initial) {
    let res = process(initial, this[0]);
    for ( let i=1; i< this.length;i++){
        res=process(res, this[i]);
    }
    return res;
}*/

Array.prototype.reduce = function(process, initial) {
    let start =0;
    if (!initial){ start = 1;initial=this[0]}
    for (let i = start; i < this.length; i++) {
        initial =  process(initial, this[i]);
    }
    return initial
}

console.log( ['a','y','!'].reduce(function(x,y){return x+y},'y'))
