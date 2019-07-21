
/**
 *输入： 第1行为n代表用户的个数；
 *第2行为n个整数，第i个代表用户标号为i的用户对某类文章的喜好度 
 *第3行为一个正整数q代表查询的组数  
 *第4行到第（3+q）行，每行包含3个整数l,r,k代表一组查询，即标号为l<=i<=r的用户中对这类文章喜好值为k的用户的个数。 数据范围n <= 300000,q<=300000 k是整型
 *输出：一共q行，每行一个整数代表喜好值为k的用户的个数
 * @param {用户喜好度数组} arr 
 * @param {查找开始索引} start 
 * @param {查找结束索引} end 
 * @param {查找值} value 
 */
function q1(arr, start, end, value){
    const resArr = arr.filter((item, index) => (index >= start-2)&&(index < end)&&(item == value));
    return resArr.length;;
}

function test() {
    const arr = [1, 2, 3, 3, 5];
    const res1 = q1(arr, 1, 2, 1);
    const res2 = q1(arr, 2, 4, 5);
    const res3 = q1(arr, 3, 5, 3);
    console.log(res1, res2, res3);
}

test();