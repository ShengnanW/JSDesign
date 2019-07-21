class Stack {
    constructor() {
        this.carrier = [];
        this.length = 0;
    }

    push(ele) {
        this.carrier.push(ele);
        this.length++;
    }

    pop() {
        this.length--;
        return this.carrier.pop();
    }

    printStack() {
        const outArr = this.carrier.concat().reverse();
        console.log(outArr.toString());
    }
}

class Queue {
    constructor(stack1, stack2) {
        this.stack1 = stack1;
        this.stack2 = stack2;
    }

    inQueue(ele) {
        this.stack1.push(ele);
    }

    deQueue() {
        if(!this.stack2.length) {
            while(this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    printQueue() {
        let outArr = [];
        this.stack2.forEach(ele => {
            outArr.unshift(ele);
        });
        let res =  outArr.toString() + ',' + this.stack1.toString();
        console.log(res);
    }
}


function test() {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.printStack();
    stack.pop();
    stack.printStack();
    stack.push('q');
    stack.printStack();
}
// test();


function test2() {
    let stack1 = new Stack();
    let stack2 = new Stack();
    let queue = new Queue(stack1, stack2);
    queue.inQueue(1);
    queue.inQueue(2);
    queue.inQueue(3);
    queue.inQueue(4);
    queue.inQueue(5);
    queue.printQueue()
    console.log(queue.deQueue());
    console.log(queue.deQueue());
    queue.inQueue(6);
    queue.inQueue(7);
    queue.printQueue();
    console.log(queue.deQueue());
    queue.printQueue();
}

test2();
