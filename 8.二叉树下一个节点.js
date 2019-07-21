
const BtNode = () => {
    let BT = new BinaryTree();
    BT.insertValue('5');
    BT.insertValue('4');
    BT.insertValue('6');
    BT.insertValue('8');
    BT.insertValue('2');
    BT.insertValue('1');
    BT.insertValue('7');
    BT.insertValue('3');
    return BT;
}

const BtNode2 = () => {
    let BT = BtNode();
    let root = BT.root;
    root.parent = null;
    root.left.parent = root;
    root.right.parent = root;
    let left1 = root.left;
    let left2 = left1.left;
    left1.parent = root;
    left2.parent = left1;
    left2.left.parent = left2;
    left2.right.parent = left2;
    let right1 = root.right;
    let right2 = right1.right;
    right2.parent = right1;
    right2.left.parent = right2;

    const test = findNextInLDR(left1);
    console.log(test);
}

BtNode2();

/**
 * 给定一个二叉树和其中一个节点，找出中序遍历序列中下一个节点，每个节点都有分别指向父节点、left、right节点的三个指针
 * @param {二叉树} BtNode 
 * @param {任意一个节点} node 
 */
function findNextInLDR(node) {
    const checkIsLeft = node => {
        if(!node.parent)  return null;
        if(node.parent.left === node) return node.parent;
        return checkIsLeft(node.parent);
    }
    const findLastLeft = node => {
        if(!(node.left && node.right)) return node
        if(!node.left) return findLastLeft(node.right);
        return findLastLeft(node.left);
    }

    if(node.right) return findLastLeft(node.right);
    return checkIsLeft(node);  
}