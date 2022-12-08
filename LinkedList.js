class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    prepend(data) {
        const newNode = new LinkedListNode(data,this.head)
        this.head = newNode
        this.length++
    }

    getByIndex(index) {
        if (index<0 || index>= this.length) return null

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }
    print() {
        let output = '';
        let current = this.head;
        while(current) {
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }
    insertAtIndex(index,value) {
        if (index == 0) return this.prepend(value)
        
        let previousElement = this.getByIndex(index-1)
        if (previousElement==null) return null

        previousElement.next = new LinkedListNode(value, previousElement.next)
        this.length++
    }
    removeHead() {
        this.head = this.head.next;
        this.length--
    }
    removeAtIndex(index) {
        if (index == 0) return this.removeHead()
        
        let previousElement = this.getByIndex(index-1)
        if (previousElement==null) return null

        previousElement.next = previousElement.next.next
        this.length--
    }
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

LinkedList.fromValues = function(...values) {
    const ll = new LinkedList()
    for (let i = values.length -1; i>=0;i--) {
        ll.prepend(values[i])
    }
    return ll
}

module.exports = LinkedList