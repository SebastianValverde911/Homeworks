class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        return this.queue;
    }
}

const data = new Queue();
data.enqueue("Sebastian");
data.enqueue("Carlos");
data.enqueue("Maria");
data.enqueue("Cristian");
data.enqueue("Isabel");
data.enqueue("Jonathan");
console.log(data.print());