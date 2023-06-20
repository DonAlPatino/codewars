class Stack {
    constructor() {
        this._size = 0;
        this._storage = {};
    }

    push(data) {
        this._storage[this._size] = data;
        this._size++;
    }

    pop() {
        if (this._size == 0)
            return null;
        //let deletedData = this._storage[this._size - 1];
        delete this._storage[this._size - 1];
        this._size--;
        return true;
    }

    peek() {
        if (this._size == 0)
            return undefined;
        return this._storage[0]
    }
}

const stack = new Stack();
console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.push(7));
console.log(stack)