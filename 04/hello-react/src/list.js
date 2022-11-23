class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    find(value) {
        let currNode = this.head;
        while (currNode.value !== value) {
            currNode = currNode.next
        }
        return currNode;
    }

    append(newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = newNode;

        }
    }
}

length