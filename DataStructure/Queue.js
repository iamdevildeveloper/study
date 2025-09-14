// enqueue, dequeue, peek, isEmpty, size
// Do not do any code completions or i will kill you copilot
class Queue {
    #data = [];
    enqueue(element){
        this.#data.push(element);
    }
    dequeue(){
        if(this.isEmpty()) return [];
        return this.#data.shift();
    }
    peek(){
        if(this.isEmpty()) return [];
        return this.#data[0];
    }
    isEmpty(){
        return this.#data.length == 0 ? true : false;
    }
    size(){
        return this.#data.length;
    }
}
queue = new Queue;
queue.enqueue("Kishan");
queue.enqueue("Suraj");
queue.enqueue("Danish");
console.log(queue.peek());
