class Node {
    constructor(data){
        this.previous = null;
        this.data = data;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    append(value){
        const newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            let lastNode = this.tail;
            lastNode.next = newNode;
            newNode.previous = lastNode;
            this.tail = newNode;
        }
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            let firstNode = this.head;
            newNode.next = firstNode;
            newNode.previous = newNode;
            this.head = newNode;
        }
    }

    traverse(){
        let current = this.head;
        while(current != null){
            console.log('->', current.data);
            current = current.next;
        }
    }

    delete(valueToDelete){
        let current = this.head;
        while(current != null){
            if(current.data == valueToDelete){
                if (current == this.head) {
                    this.head = current.next;
                    if (this.head) {
                        this.head.previous = null;
                    }
                }

                if (current == this.tail) {
                    this.tail = current.previous;
                    if (this.tail) {
                        this.tail.next = null;
                    }
                }
                if(current.previous){
                    current.previous.next = current.next;
                }
                if(current.next){
                    current.next.previous = current.previous;
                }
            }
            current = current.next;
        }
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.prepend(2);
doublyLinkedList.append(3);
doublyLinkedList.prepend(4);
doublyLinkedList.append(5);
doublyLinkedList.prepend(6);
console.log("Before delete:");
doublyLinkedList.traverse();
doublyLinkedList.delete(1);
console.log("After delete:");
doublyLinkedList.traverse();

