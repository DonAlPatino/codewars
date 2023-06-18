function nouveau (constructor, ...args) {
    // Don't forget, unnamed arguments after Constructor may be passed in!
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    const result = constructor.call(obj, ...args);

    if (typeof result === 'function') {return obj}
    return typeof result === 'object' &&  result !== null ? result : obj;
}

function Person (sss) {
    return sss;
}
Person.prototype.sayHi = function () {
    return 'Hi, I am ' + this.name;
};

function Fnc(){ return Fnc; }

var guy = nouveau(Fnc(), 'Guy');

console.log(guy.name)
//console.log(guy.sayHi())

