const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head = null;
let tail = null;
let length = 0;

const chainMaker = {

    getLength() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return length;
    },
    addLink(value = " ") {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let newNode = new Node(value)

        if (!head) {
            head = newNode
            tail = head
        } else {
            tail.next = newNode
            tail = newNode
        }
        length++
        return this
    },
    removeLink(position) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        //let position = parseInt(pos)
        if (position < 1 || position > this.getLength()) throw new Error("You can\'t remove incorrect link!")
        //удаляем первую позицию
        if (position == 1) {
            let currentHead = head;
            head = currentHead.next;
            length--;
            if(length === 0){
                tail = null;
            }
            return this
        }

        let current = head;
        let i=1;
        while (current != null) {
            if (i===position) {
                current.next=current.next.next;
                if(length === 0){
                    tail = null;
                }
            }
            else current = current.next
            i++
        }
        return this;

    },
    reverseChain() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    },
    finishChain() {
        let plainChain = "";
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let current = head;
        while (current != null) {
            plainChain += (current==head?"":"~~")+"( "+current.val+" )";
            current = current.next
        }
        return plainChain;
    }
};

//chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0),
chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
//chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2),
//chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
console.log(chainMaker.finishChain())

module.exports = {
    chainMaker
};
