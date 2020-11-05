class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // add node to end of DLL
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // remove node from end of DLL
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // set new tail to be second last node
            this.tail = poppedNode.prev
            // Remove connections:
            // new tail.next to be reset as null
            this.tail.next = null;
            // old tail's prev set to null
            poppedNode.prev = null; // just to clean up extra ref
        }
        this.length--;
        // return popped node
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // update head to be next of old head
            this.head = oldHead.next;
            this.head.prev = null; // remove <--
            oldHead.next = null; // remove -->
        }
        this.length--;
        return oldHead; // removed node
    }
}

let list = new DoubleLinkedList
list.push('first item')
list.push('last item')
