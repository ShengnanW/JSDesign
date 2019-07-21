/**
 * 统计一个十进制整数转为二进制后1的个数
 * @param {一个整数} num 
 */

function count(num) {
    let newNum = parseInt(num, 10);
    let count = 0;
    while(newNum) {
        count++;
        newNum = newNum & (newNum-1);
    }
    return count;
}

/**
 * 判断一个整数是不是2的整数次方
 * @param {一个整数} num 
 */

function judge(num) {
    return count(num) === 1 ? '是2的整数' : '不是2的整数';
}


/**
 * 改变m二进中的多少位才能得到n
 * @param { int } m 
 * @param { int } n 
 */
function changeNum(m, n) {
    const XOR = m ^ n;
    return count(XOR);
    
}

function test(num, m=0, n=0) {
    console.log(num + '二进制为：'+num.toString(2));
    console.log('1的个数：'+count(num));
    console.log(judge(num));
    console.log(m + '二进制为：'+m.toString(2));
    console.log(n + '二进制为：'+n.toString(2));
    console.log(m + '到' + n +': 需要改变'+ changeNum(m, n) + '位');
}

test(8, 18, 78);