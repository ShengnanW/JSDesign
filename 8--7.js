//  二分查找
function search(arr, key) {
    let low = 0;
    let height = arr.length-1;
    let mid;
    while (low<=height) {
        mid = ~~((height + low) / 2);
        if(arr[mid] === key) {
            return mid;
        } else if(arr[mid]<key) {
            low = mid + 1;
        } else {
            height = mid - 1;
        }
    }
    return -1;
}

// 二叉树查找
function BinarySearch1(a, key) {
    let left = 0;
    let right = a.length - 1;
    let mid;
    while (left <= right) {
        mid = ~~((left + right) / 2);
        if(a[mid] === key) {
            return mid;
        } else if (a[mid] < key) {
            left = mid +1;
        } else {
            right = mid -1;
        }
    }
    return -1;
}

function BinarySearch2(a, left, right, key) {
    const mid = left + right >> 1; // 右移相当于除以2，<< 左移相当于乘2
    if (a[mid] === key) return mid;
    if (a[mid] > key) return BinarySearch2(a, left, mid-1, key);
    if (a[mid] < key) return BinarySearch2(a, mid+1, right, key);
}

// 查找第k个大值
function findK(arr, k) {
    const left = 0;
    const right = arr.length - 1;
    let key = partion(arr, left,right);
    let len = arr.length - key;
    while (k !== len) {
        if (k > len) {
            key = partion(arr, key+1, right);
        } else {
            key = partion(arr, left, key-1);
        }
        len = a.length - key;
    }
    return arr[k];
}
function partion(a, left, right) {
    const key = a[left];
    while (left < right) {
        while (key <= a[right] && left <right) {
            right--;
        }
        [a[left], a[right]] = [a[right], a[left]];
        while (key >= a[left] && left < right) {
            left++;
        }
        [a[left], a[right]] = [a[right], a[left]];
    }  
    return left;  
}

// partion([5,6,5,58,2,3,6,7,6,3,6], 0, 10);
function FindContinuousSequence(sum) {
    let a = 0,
      half = sum >> 1;
    const res = [];
    while (half--) {
      a++;
      let i = 1;
      while ((i-a + 1) * (a + i) < 2 * sum) {
        i++;
      }
      if ((i-a + 1) * (a + i) === 2 * sum) {
        const tmp = [];
        tmp.push(a);
        tmp.push(i);
        res.push(tmp);
      }
    }
    return res;
}

// console.log(FindContinuousSequence(15));