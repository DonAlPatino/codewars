class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    root() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.root
    }

    add(data) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }
}

const tree = new BinarySearchTree();
tree.add(2);
tree.add(3);
tree.add(4);
console.log(tree.root)