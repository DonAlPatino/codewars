class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}

/*Person.prototype.name = this.firstName + ' ' + this.lastName;*/

Object.defineProperty(Person.prototype, "name", {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
        [this.firstName,this.lastName] = value.split(' ');
    }
})

let marcusFenix = new Person('Marcus', 'Fenix');
console.log(marcusFenix.firstName); // => 'Marcus'
console.log(marcusFenix.lastName); // => 'Fenix'
console.log(marcusFenix.getName()); // => 'Marcus Fenix'
console.log(marcusFenix.name); // => 'Cole Train'
marcusFenix.name = 'Cole Train';
console.log(marcusFenix.firstName); // => 'Marcus'
console.log(marcusFenix.lastName); // => 'Fenix'
