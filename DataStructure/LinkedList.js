// enqueue, dequeue, peek, isEmpty, size
// Do not do any code completions or i will kill you copilot
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    append(data){
        const node = new Node(data);
        if(this.head === null){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }
    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }

    delete(value) {
        let current = this.head;
        if(current.data == value){
            this.head = current.next;
            return;
        }
        let previous = null;
        while(current.next != null){
            previous = current;
            current = current.next;
            if(current.data == value){
                previous.next = current.next;
            }
        }
    }

    exist(value){
        let current = this.head;
        while(current.next != null){
            if(current.data == value){
                console.log('exist');
                return;
            }
            current = current.next;
        }
        console.log('does not exist');
    }

    length(){
        let current = this.head;
        if(this.head == null) return 0;
        let count = 1;
        while(current.next != null){
            count++;
            current = current.next;
        }
        return count;
    }
}
const linkedList = new LinkedList;
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);
// linkedList.print();
linkedList.delete(2);
// linkedList.exist(2);
console.log(linkedList.length());

