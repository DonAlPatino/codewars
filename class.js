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
let animal2 = new Animal("Мой питомец");
console.log(Animal.prototype.toString())

const arr = [1,2,3];
console.log(arr instanceof Array);



