
/** 
 * 旋转数组：将数组的部分元素一道后面，例如： [3,4,5,1,2] 为[1,2,3,4,5]的一个旋转数组
 * 题目：给定一个递增数组的旋转数组，找出这个递增数组的最小值
 * @param {旋转数组} arr 
 */
function rotateArrMin(arr) {
    const len = arr.length;
    if(!len) return null;
    if(arr[0] < arr[len-1]) return arr[0];

    const dichotomy = (arr, left, right) => {
        let i =left;
        let j = right;
        if((j - i) === 1) return arr[i] < arr[j] ? arr[i] : arr[j]; 
        let mid = Math.floor(i+ (j-i) / 2);
        if(arr[i] <= arr[mid]) {
            i = mid;
        }else{
            j = mid;
        }
        return dichotomy(arr, i, j);
    }

    return dichotomy(arr, 0, len-1);
}

function test() {
    const arr =[1,1,1,0,1];
    console.log(rotateArrMin(arr));
}

test();