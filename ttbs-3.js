
/**
 * 求N个整数的最大公约数：每个班级人数相同，课程相同，每个人智能选择一门课，求最小开设班级的数量。
 * @param {课程数目} n 
 * @param {每门课报名人数} arr 
 */
function classDesign(arr) {
    const len = arr.length;  //n的大小
    const sortedArr = arr.sort((a, b) => a-b);
    const min = sortedArr[0];
    let gcd = 1;

    for(let i=2; i<=min; i++) {
        let isCd = true;
        for(let j=0; j<len; j++) {
            if(arr[j] % i !== 0) {
                isCd = false;
                break;
            }
        }
        if(isCd) gcd = i;
    }

    const everyClass = arr.reduce((acc, cur) => (acc + cur / gcd), 0);
    const wholeClass = gcd * everyClass;
    return wholeClass;
}

function test() {
    const arr = [1,1,2];
    console.log(classDesign(arr));
}

test();