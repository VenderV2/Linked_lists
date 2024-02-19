const append = 'append'
const prepend = 'prepend'

class Node {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
    }
    insertNode(append_prepend, id, data) {
        const newNode = new Node(id, data)
        if (this.headNode == null) {
            this.headNode = newNode;
            console.log('Head node is ' + this.headNode.data)
        }
        else {
            if (append_prepend === append) {
                this.insertAppendedNode(newNode, this.headNode)
            }
            else if (append_prepend === prepend) {
                this.insertPrependedNode(newNode, this.headNode)
            }
        }
    }
    insertAppendedNode(newNode, currentNode) {
        if (currentNode.nextNode == null) {
            currentNode.nextNode = newNode;
            console.log('Next node is ' + currentNode.nextNode.data)
        }
        else {
            this.insertAppendedNode(newNode, currentNode.nextNode)
        }
    }
    insertPrependedNode(newNode, currentNode) {
        this.headNode = newNode;
        this.headNode.nextNode = currentNode;
    }
}

const foo = new LinkedList()
foo.insertNode(append ,1, 7)
foo.insertNode(append ,2, 9)
foo.insertNode(append ,3, 21)
foo.insertNode(append ,4, 12)
foo.insertNode(prepend ,5, 0)
console.log(foo)