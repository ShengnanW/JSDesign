/**
 * 
 * @param {待排序的数组} arr 
 */

function quickSort(arr=[]) {
    const len  = arr.length;
    if(!len) return [];
    // console.log(arr);
    const sort = (arr, left = 0, right = len-1) => {
        if(left >= right) return [];
        let index = arr[right];  //采用数组最后一个值作为基准值
        let i = left;
        let j = right;
        while(i < j){
            // console.log(left, right);
            while(i < j && arr[i] < index) {
                i++;
            }
            arr[j] = arr[i];
            while(i < j && arr[j] > index) {
                j--;
            }
            arr[i] = arr[j];
        }
        arr[j] = index;  //此时，基准值放于数组的中间
        sort(arr, left, j-1);
        sort(arr, j+1, right);
    }

    sort(arr, 0, len-1);
    return arr;
}

function test() {
    let arr = [5,8,3,7,1,6,9,4];
    const sortedArr = quickSort(arr);
    console.log(sortedArr);
}

// test();