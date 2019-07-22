
/**
 * 牛牛和妞妞正在玩一个猜数游戏，妞妞心里想两个不相等的正数，把这两个正数的和y告诉牛牛。
 *妞妞声称这两个数都不超过x，让牛牛猜这两个数是多少。
 *牛牛每猜一次，妞妞会告诉他猜对了还是猜错了，猜对了就停止游戏，猜错了就直到牛牛猜对为止。
 *妞妞为了加大难度，有时会误报x的大小，如果牛牛可以判断出了这个x是错误的，就会直接询问妞妞答案。
 *牛牛最坏情况下要猜多少次才能猜到妞妞想的数呢？
 * 输入：两个整数x，y。1<=x,y<=1014；
 * 输出：一个数n，表示牛牛在最坏情况下猜测的次数。
 * @param {两个数最大值} max 
 * @param {两个数的和} sum 
 */
function guessNum(max, sum) {
    if(max<2 && sum < 3 && max*2 <= sum) return 0;
    let count = 0;

    const coreFn = num => {
        const rest = sum-num;
        if(rest >0 && rest < max && num !== sum-num) count++;
    }

    for(let i=max; i>parseInt(sum/2); i--) {
        coreFn(i);
    }
    return count;
}

function test() {
    console.log(guessNum(8,5));
}

test();