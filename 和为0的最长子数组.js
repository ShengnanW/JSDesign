/**
 * 数组中元素只有1，-1，求和为0的最长子数组
 */

function maxSumArr(arr) {
    let maxLength = 0;
    let sum = 0;
    let sumArr = [];
    arr.map((item, index) => {
        sum += item;
        const pos = sumArr.indexOf(sum);
        if (pos !== -1) {
            maxLength = index - pos > maxLength ? index - pos : maxLength;
        }
        sumArr[index] = sum;
    });
   return maxLength;
}

function test() {
    let arr = [1,1,1,1,-1,-1,-1,1,1,-1,1];
    console.log(maxSumArr(arr));
}

test();