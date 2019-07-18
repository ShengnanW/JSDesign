/**
 * 找出长度为n、元素都在0~n-1范围内数组中的所有重复数字
 * @param {输入数组参数} arr 
 * @returns { 所有的重复数字 } duplicateNum
 */

function duplicate1(arr) {
    let duplicateNum = {};
    if (!arr) return;

    for(let i=0, len=arr.length; i<len; i++) {
        const item = arr[i];
        if(item !== i) {
            if(arr[item] === item) {
                duplicateNum[item] = item;
            }else{
                const temp = arr[item];
                arr[item] = item;
                arr[i] = temp;
                i = i-1;
            }
        }
    }

    return duplicateNum;
}

function test1() {
    const arr = [5,4,5,1,3,6,6,3,2,3,1,3,1,3];

    console.log(duplicate1(arr));
}

/**
 * 找出长度为n、元素都在0~n-1范围内数组中的任何一个重复数字
 * @param {输入数组} arr
 * @returns {重复的数字} num 
 */
function duplicate2(arr) {
    let num = null;
    if(!arr) return;

    for(let i=0, len=arr.length; i<len; i++) {
        const item = arr[i];
        if(item !== i) {
            if(arr[item] === item) {
                num = item;
                return num;
            }else{
                const temp = arr[item];
                arr[item] = item;
                arr[i] = temp;
                i = i-1;
            }
        }
    }
}

function test2() {
    const arr = [5,4,5,1,3,6,6,3,2,3,1,3,1,3];

    console.log(duplicate2(arr));
}

/**
 * 找出长度为n、元素都在0~n-1范围内数组中的任何一个重复数字，不能修改原数组
 * @param {输入数组} arr
 * @returns {重复的数字} num 
 */
function duplicate3(arr) {
    let num =null;
    if(!arr) return;
}