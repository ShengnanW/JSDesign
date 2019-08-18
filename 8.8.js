/**
 * 获取N个骰子总点数和为sum出现的次数
 * @param {int} n n各骰子
 * @param {int} sum 总点数
 */
function getNNumCount(n, sum) {
    if (n <0 || sum < n || sum > 6 * n) return 0;
    if (n === 1) return 1;
    let res = 0;
    res = getNNumCount(n-1, sum-1) + getNNumCount(n-1, sum-2) + getNNumCount(n-1, sum-3) + getNNumCount(n-1, sum-4) + getNNumCount(n-1, sum-5) + getNNumCount(n-1, sum-6);
    return res;
}

// console.log(getNNumCount(30,60));
// 
/**
 * 不使用递归，迭代版本
 * @param {int} n n个骰子
 * @param {int} sum 总点数
 */
function getNNumCount2(n, Sum) {
    if (n < 1) return -1;
    if (n === 1) return 1;
    let count = [1, 1, 1, 1, 1 ,1];
    const numConvert = num => num ? Number(num) : 0; 
    // 用来存放各个点数和的出现次数,下标i表示点数和为（i+n）
    for (let i = 2; i<=n; i++) {
        for (let sum = 6*i; sum>=i; sum--) {
            let tmp1 = (sum-1-(i-1)) > 0 ? count[sum-1-(i-1)] : 0;
            let tmp2 = (sum-2-(i-1)) > 0 ? count[sum-2-(i-1)] : 0;
            let tmp3 = (sum-3-(i-1)) > 0 ? count[sum-3-(i-1)] : 0;
            let tmp4 = (sum-4-(i-1)) > 0 ? count[sum-4-(i-1)] : 0;
            let tmp5 = (sum-5-(i-1)) > 0 ? count[sum-5-(i-1)] : 0;
            let tmp6 = (sum-6-(i-1)) > 0 ? count[sum-6-(i-1)] : 0;
            count[sum-i] = numConvert(tmp1)+numConvert(tmp2)+numConvert(tmp3)
            +numConvert(tmp4)+numConvert(tmp5)+numConvert(tmp6);
        }
    }
    console.log(count);
    return count[Sum-n];    
}

// console.log(getNNumCount2(3,3));

// leetcode22 生成括号
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n == 1) {
        return ["()"];
    }
    
    let maxCombo = [];
    maxCombo[0] = 0;
    for (let i = 1; i < n * 2; i++) {
        if (i > n + 1) {
            maxCombo[i] = 0;
        } else {
            maxCombo[i] = 1;
        }
    }
    
    let maxComboCount = parseInt(maxCombo.join(''), 2);
    let leastComboCount = parseInt(Array(n).fill(1).join(''), 2);
    let results = [];

    for (let i = leastComboCount; i < maxComboCount; i++) {
        let binary = i.toString(2);

        let balancer_0 = n * 2 - binary.length;
        let balancer_1 = 0;
        let cont = false;

        let result = '';
        
        for (let j = 0; j < balancer_0; j++) {
            result += '(';
        }
        
        for (let j = 0; j < binary.length; j++) {
            if (binary[j] == '0') {
                balancer_0 += 1;
                result += '(';
            } else {
                balancer_1 += 1;
                result += ')';
            }

            if (balancer_1 > balancer_0) {
                cont = true;
                break;
            }
        }

        if (cont || balancer_0 != balancer_1) {
            continue;
        }
        
        results.push(result);
    }
    return results;
};


// leet102---层级遍历二叉树 
// 形式上结果是一样的，但是并没有按照二叉树的结构来
const levelOrder = root => {
    const len  =root.length;
    if (!Array.isArray(root) || len<1) return [];
    let res = [];
    for (let i = len-1; i>=0; i=i-2) {
        const left = root[i-1];
        const right = root[i];
        let level = [];
        if (left && right) {
            level = [left, right];
        }else if (left || right) {
            const temp = left ? left : right;
            level = [temp];
        }
        res.unshift(level);
    }
    const resLevel = res.filter(item => item.length > 0);
    return resLevel;
}

// console.log(levelOrder([3,9,20,null,null,15,7])); 

var levelOrder2 = function(root) {
    let res=[];
    preOrder(root,0);//根节点 -> 0层
    return res;
    function  preOrder(root,level){
        if(root){
            if(res[level]) res[level].push(root.val)
            else res[level]=[root.val]; //根据层级赋值
            preOrder(root.left,level+1)//下一级的层级是当前层级+1
            preOrder(root.right,level+1)
        }
    }
};



/*思路一：dp算法。不断加。然后新增一个的时候会在遍历时找前面所有跟当前值一样的值，截取出来看是不是回文。超时。*/ /*思路二。每遍历一个。往前后查询回文。注意查了两次。*/
var countSubstrings = function(s) {
    var sArr = s.split('');
    var len = sArr.length;
    var count = 0;
    for (var i = 0; i < len; i++) {
        check(i, i + 1);
        check(i - 1, i + 1);
        count++;
    }
    return count;

    function check(left, right) {
        while (s[left] && s[right] && s[left] == s[right]) {
            left--;
            right++;
            count++;
        }
    }
};


// LeetCode554 
输入: [[1,2,2,1],
      [3,1,2],
      [1,3,2],
      [2,4],
      [3,1,2],
      [1,3,1,1]]  
    输出: 2
// 穿过最少砖的直线肯定是穿过缝隙最多的线，所以可以遍历整个List，获取每一行每条缝隙对应的砖宽， 将砖宽度和砖宽度出现的次数存入Map，最后遍历map获取出现次数最多的宽度，总行数-出现次数即为结果。
var leastBricks = function(wall) {
    let width= [];
    const n = wall.length;
    if (n<1) return 0;
    for (let i =0; i< n; i++) {
        wall[i].reduce((acc, cur) => {
            acc += cur;
            width.push(acc);
            return acc;
        }, 0);
    }
    let widthTimes = [];
    width.map(item => {
        if ( !widthTimes[item]) {
            widthTimes[item] =1;
        } else {
            widthTimes[item]++;
        }
    });
    const max = widthTimes.sort((a, b) => b-a);
    console.log(max)
    return max[1] ? n-max[1] : max[0];
};
// leastBricks([[1],[1],[1]] );

/**
 * 322 零钱兑换
 */
var coinChange = function(coins, amount) {
    let dp = [0];
    for (let i =1; i<amount+1; i++) {
        dp[i] = Number.MAX_VALUE;
        for (const coin of coins) {
            if(i > coin && dp[i-coin] !== -1) {
                cp[i] = Math.min(cp[i], cp[i-coin]+1);
            }
        }
        if(cp[i] === Number.MAX_VALUE) cp[i] === -1;
    }
    return dp[amount];
};