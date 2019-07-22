
/**
 * 定义二叉树节点
 */
class BinaryTreeNode {
    constructor(value) {
        this.value = value;  //这是一个数值属性
        // this.root = this; 
        this.left = null;  //这是一个节点属性，要区别两者
        this.right = null;
    }
}

/**
 * 实现二叉树
 */
class BinaryTree {
    constructor() {
        this.root = null;
        this.nodeNum = 0;
    }

    // 对二叉树进行插入值操作
    insertValue(ele) {
        const BTNode = new BinaryTreeNode(ele);
        const insertFn = (insertNode, node) => {
            let index = node.value < insertNode.value? 'left' : 'right';
            if(insertNode[index] === null){
                insertNode[index] = node;
                this.nodeNum++;
            }else {
                insertFn(insertNode[index], BTNode);
            }
        }

        if(!this.root){
            this.root = BTNode;
        }else{
            insertFn(this.root, BTNode);
        }
    }
}

/**
 * 二叉树先序遍历
 */
function DLR(bt) {
    const traverseFn = node => {
        if(node && node.value) {
            console.log(node.value);
            traverseFn(node.left);
            traverseFn(node.right);
        }
    }
    if(bt.root) traverseFn(bt.root);  
}

/**
 * 二叉树中序遍历
 */
function LDR(bt) {
    const traverseFn = node => {
        if(node && node.value) {
            traverseFn(node.left);
            console.log(node.value);
            traverseFn(node.right);
        }
    }
    if(bt.root) traverseFn(bt.root);  
}

/**
 * 二叉树后序遍历
 */
function LRD(bt) {
    const traverseFn = node => {
        if(node && node.value) {
            traverseFn(node.left);
            traverseFn(node.right);
            console.log(node.value);
        }
    }
    if(bt.root) traverseFn(bt.root);  
}

/**
 * 根据前序遍历和中序遍历结果，重建二叉树
 * @param {前序遍历数组} DLRArr 
 * @param {中序遍历结果} LDRArr 
 */
function rebuildBT(DLRArr, LDRArr) {
    if(!DLRArr || !LDRArr || (DLRArr.length !== LDRArr.length)) return null;
    let bt = new BinaryTree();
    let index = 0;

    const findFn = (node, tag, arr) => {
        if(arr.length>0) {
            node[tag] = new BinaryTreeNode(DLRArr[index]);
            let pos = arr.indexOf(DLRArr[index]);
            index++;
            bt.nodeNum++;
            let leftArr = [];
            let rightArr = [];
            if(pos !== -1) {
                node = node[tag];
                for (let i=0; i<pos; i++) {
                    leftArr.push(arr[i]);
                }
                for (let i=pos+1; i<arr.length; i++) {
                    rightArr.push(arr[i]);
                }
                findFn(node, 'left', leftArr);
                findFn(node, 'right', rightArr);
            }
        }
    }

    findFn(bt, 'root', LDRArr);
    return bt;
}



function test() {
    let BT = new BinaryTree();
    BT.insertValue('5');
    BT.insertValue('4');
    BT.insertValue('6');
    BT.insertValue('4');
    BT.insertValue('2');
    BT.insertValue('1');
    BT.insertValue('7');
    BT.insertValue('3');
    console.log(BT.root);
    LRD(BT); //后序
    LDR(BT); //中序
    DLR(BT); //先序
}

function test2() {
    let DLRArr = [1,2,4,7,3,5,6,8];
    let LDRArr = [4,7,2,1,5,3,8,6];
    let root = rebuildBT(DLRArr, LDRArr);
    console.log(root);
}

// test2();