
// require(module);

class BTNode {
    constructor(ele) {
        this.value = ele;
        this.left = null;
        this.right = null;
    }
}

class BT {
    constructor() {
        this.root = null;
        this.nodeNum = 0;
    }

    insert(ele) {
        let node = new BTNode(ele);
        const iterateFn = (currentNode, insertNode) => {
            const index = insertNode.value < currentNode.value ? 'left' : 'right';
            let nextNode = currentNode[index];
            if(!nextNode) {
                currentNode[index] = insertNode;
            }else {
                iterateFn(nextNode, insertNode);
            }
        }

        if(!this.root) {
            this.root = node;
        }else {
            iterateFn(this.root, node);
        }
    }
}


function test() {
    let bt = new BT();
    bt.insert('1');
    bt.insert('3');
    bt.insert('2');
    bt.insert('5');
    bt.insert('4');
    bt.insert('6');
    bt.insert('9');
    console.log(bt.root)
}

// test();

// module.exports = BT;