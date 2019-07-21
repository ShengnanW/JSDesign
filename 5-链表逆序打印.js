
/**
 * 定义一个节点类
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // 添加节点
    appendNode(ele) {
        const node = new Node(ele);
        let curent = this.head;

        if(!this.head) {
            this.head = node;
        }else {
            while(curent.next) {
                curent = curent.next;
            }
            curent.next = node;
        }

        this.length++;
    }

    // 查找指定节点的第一个索引值
    indexOf(ele) {
        if(!this.length) return -1;
        let curent = this.head;
        for(let i=0; i<this.length; i++) {
            if(curent.value === ele) return i;
            curent = curent.next;
        }
        return -1;
    }

    // 移除第一个值为ele的节点
    removeNode(ele) {
        const index = this.indexOf(ele);
        // console.log(index);
        if(index === -1) return;
        if(index === 0) {
            this.head = this.head.next;
        }else {
            let preNode = this.head;
            for(let i=0; i<index-1; i++){
                preNode = preNode.next;
            }
            // 删除节点
            let delNode = preNode.next;
            preNode.next = delNode.next;
            delNode.next = null;

        }
        this.length--;
    }

    // 在指定index插入value为ele的节点
    insertAt(index, ele) {
        const node = new Node(ele);
        if(index < 0 || index > this.length-1) return;
        if(!this.head) {
            this.head = node;
        }else {
            let prenode = this.head;
            for(let i=1; i<index+1; i++) {
                prenode = prenode.next;
            }
            node.next = prenode.next;
            prenode.next = node;
        }
        this.length++;
    }

    // 顺序打印链表
    toString() {
        let printRes = '';
        if(this.length && this.head) {
            let curent = this.head;
            for(let i=0; i<this.length; i++) {
                printRes += curent.value + ',';
                curent = curent.next;
            }
        }
        
        return printRes;
    }

    // 逆序打印链表
    toReverseString(){
        if(!(this.length && this.head)) return ''; 
        recursion(this.head);
    }
}

// 逆序打印链表
function recursion(node) {
    if(node.next){
        recursion(node.next);
    }
    console.log(node.value)
}


function test() {
    let linkedList = new LinkedList();
    linkedList.appendNode('1');
    linkedList.appendNode('2');
    linkedList.appendNode('3');
    linkedList.appendNode('4');
    console.log(linkedList.length);
    console.log(linkedList.toString());
    linkedList.removeNode('3');
    console.log(linkedList.length);
    console.log(linkedList.toString());
    console.log(linkedList.indexOf('2'));
    linkedList.insertAt(3, 'a');
    console.log(linkedList.length);
    console.log(linkedList.toString());
    linkedList.toReverseString();
}