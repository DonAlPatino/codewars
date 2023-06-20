function head(arr){
    return arr[0];
}
function tail(arr){
    if (arr.length == 1) return [];
    return arr.shift();
}
function init(arr){
    if (arr.length == 1) return [];
    const removeLast = arr.pop();
    return arr;
}
function last(arr){
    console.log(arr.length)
    return arr[arr.length-1];
}

function deepCount(a){
    const flat = a.flat();
    console.log(flat)
    return flat.length
}

let acc =0 ;
function deepCount(a){
    for (let flatKey of a) {
        acc++;

        if (Array.isArray(flatKey)) {
            console.log(flatKey,"-----------",acc)
            let flat = flatKey.flat(1);
            deepCount(flat);
        }
    }
}

deepCount([[[[[[[[[]]]]]]]]]);
console.log(acc);

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} стоит неподвижно.`);
    }
    #someProp = 0;
    someProp = 'jfds';
}

let animal = new Animal("Мой питомец");