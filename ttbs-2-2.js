
/**
 * 找出输入数组中间隔为n的数组元素中重复的值
 * @param {arr长度} n
 * @param {间隔m} m
 * @param {输入数组} arr
 */
function findRepeat(n, m, c, arr) {
    var colorArr = new Array(c);
    for(let i=0; i<n; i++) {
        const beadColors = arr[i];
        if(beadColors[0] == 0) continue;
        
        for(let j=1; j<beadColors.length; j++) {
            var id = parseInt(beadColors[j]);
            if(!colorArr[id]) {
                colorArr[id] = [];
            }
            if(colorArr[id].length >=2) continue;
            colorArr[id].push(i+1);
        }
    }
    //取出重复的颜色
    let repeatColor = [];
    for(let i=1; i<=c; i++) {
        let colorItem = colorArr[i];
        if(!colorItem || colorItem.length < 2) continue;
        if(colorItem[1]-colorItem[0] <= m || colorItem[0]+n-colorItem[1] <= m) {
            repeatColor.push(i);
        }
    }

    return repeatColor.length;
}

function test() {
    const n = 6;
    const m = 2;
    const c = 3;
    const arr = [
        [3,1, 2, 3],
        [0],
        [2, 2, 3],
        [1,2],
        [1,3],
        [1,2]
    ];

    console.log(findRepeat(n,m,c,arr));
}

test();