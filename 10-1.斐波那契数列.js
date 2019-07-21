/**
 * 
 * @param {正整数n} n
 * @returns{斐波那锲数列第n项} 
 */

//  解法一： 利用递归函数---计算量随着n的增大成指数增长
function Fibonacci1(n) {
    if(n < 2) {
        return n;
    }
    return Fibonacci1(n-1) + Fibonacci1(n-2);
}

function test1() {
    console.log(Fibonacci1(100));
}

//  解法二： 利用循环
function Fibonacci2(n) {
    if(n < 2) {
        return n;
    }
    let fibo0 = 0;
    let fibo1 = 1;
    let fibo2 = 0;
    for(let i=2; i<=n; i++) {
        fibo2 = fibo0 + fibo1;
        fibo0 = fibo1;
        fibo1 = fibo2;
    }
    return fibo2;
}

function test2() {
    console.log(Fibonacci2(100));
}

test2();