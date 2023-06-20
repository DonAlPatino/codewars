class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
        if (acc) {
            const node = new ListNode(cur);
            node.next = acc;
            return node;
        }

        return new ListNode(cur);
    }, null);
}

const initial = convertArrayToList([1, 2, 3, 3, 4, 5]);

function removeKFromList(l, k) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = l;
    let head = l;
    while (current != null) {
        while(current.next != null && current.next.value == k) {
            current.next = current.next.next
        }
        current = current.next
    }
    if (head.value == k) {
        l = head.next;
    }
    return l
}


let newlist = removeKFromList(initial, 3);
while (newlist != null) {
console.log(newlist.value)
    newlist = newlist.next
}
