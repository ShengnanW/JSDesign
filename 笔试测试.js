
// function countToOne(num) {
//     let count = 0;
//     const sqrt = (num) => {
//         if (num === 1) return;
//         count++;
//         let newNum = Math.sqrt(num);
//         if(newNum % 1 === 0) {
//             sqrt(newNum);
//         }else{
//             sqrt(num-1);
//         }
//     };
//     sqrt(num);
//     return count;
// }

// function test() {
//     let num = 11;
//     console.log(countToOne(num));
// }

// test();


/**
 * 给定一个正整数n,找出最小的正整数x,使得满足 y^2 = n + x^2 的整数y存在。
 * @param {正整数n} n 
 */
function item3(n) {
    if(n<=0 || n%1 !==0) return;
    let minX = -1;
    const success = (x, n) => {
        if(n-y*y <=0) return;
        const x = Math.sqrt(n-y*y);
        if(x%1 === 0) {
            minX = x;
        }
        success(y+1, n); 
    }
    success(1, n);
    return minX;
}

function test2() {
    let num = 3;
    console.log(item3(num));
}

test2();