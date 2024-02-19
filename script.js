let i = 0;

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
    appendNode(id, data) {
        const newNode = new Node(id, data)
        if (this.headNode == null) {
            this.headNode = newNode;
            console.log('Head node is ' + this.headNode.data)
        }
        else {
            this.insertAppendedNode(newNode, this.headNode)
        }
        
    }
    insertAppendedNode(newNode, currentNode) {
        i++;
        console.log(i)
        if (currentNode.nextNode == null) {
            currentNode.nextNode = newNode;
            console.log('Next node is ' + currentNode.nextNode.data)
        }
        else {
            this.insertAppendedNode(newNode, currentNode.nextNode)
        }
    }
    prependNode(id, data) {
        const newNode = new Node(id, data)
        if (this.headNode == null) {
            this.headNode = newNode;
            console.log('Head node is ' + this.headNode.data)
        }
        else {
            this.insertPrependedNode(newNode, this.headNode)
        }
    }
    insertPrependedNode(newNode, currentNode) {
        this.headNode = newNode;
        this.headNode.nextNode = currentNode;
    }
}

const foo = new LinkedList()
foo.appendNode(1, 7)
foo.appendNode(2, 9)
foo.appendNode(3, 21)
foo.appendNode(4, 12)
foo.prependNode(5, 0)
console.log(foo)