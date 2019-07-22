class Queue {
    constructor() {
        this.carrier = [];
        this.num = 0;
    }

    enQueue(ele) {
        this.carrier.push(ele);
        this.num++;
    }

    deQueue() {
        if(this.num) this.num--;
        return this.carrier.shift();
    }

    print() {
        console.log(this.carrier.toString());
    }
}

function test() {
    let que = new Queue();
    que.enQueue(1);
    que.enQueue(2);
    que.enQueue(3);
    que.enQueue(4);
    que.enQueue(5);
    que.print();
    console.log(que.deQueue());
    que.enQueue(6);
    que.print();
}

// test();

class Stack {
    constructor(que1, que2) {
        this.que1 = que1;
        this.que2 = que2;
    }

    push(ele) {
        let arr = this.que2.num ? this.que2 : this.que1;
        arr.enQueue(ele);
    }

    pop() { 
        if(this.que1.num) {
            while(this.que1.num > 1) {
                this.que2.enQueue(this.que1.deQueue());
            }
            return this.que1.deQueue();
        }
        
        if(this.que2.num) {
            while(this.que2.num > 1) {
                this.que1.enQueue(this.que2.deQueue());
            }
            return this.que2.deQueue();
        }

        return null;
    }

    printStack() {
        // console.log(this.que1.carrier, this.que2.carrier);
        if(this.que2.num){
            this.que2.print();
        }else{
            this.que1.print(); 
        }
    }
}

function test2() {
    let q1 = new Queue();
    let q2 = new Queue();
    let stack = new Stack(q1, q2);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.printStack();
    console.log(stack.pop());
    stack.printStack();
    stack.push(6);
    stack.printStack();
    console.log(stack.pop());
    stack.printStack();
}

test2();