
/**
 * 判断在一个矩阵中是否包含某字符串所有字符的路径。
 * 路径可以从任何一个开始，每一步可以在矩阵中项左右上下移动一格。
 * 如果过一条路径经过了某一格，则该路径不能再次经过这个格子。
 * @param {矩阵数组} arr 
 * @param {行数} rows 
 * @param {列数} cols 
 * @param {路径字符串} str 
 */
function hasPath(arr, rows, cols, str) {
    const len = rows * cols;
    let visited = new Array(len); //标记已经找到的字符
    let charId = 0;                      //当前正在查找字符的索引

    const hasPathCore = (charId, row, col, visited) => {
        let res = false;
        const arrStrId = (row-1)*cols+col-1;
        // console.log(charId, row, col, visited);
        if (row * col > len || row <=0 || col <=0 || charId<0 || visited[arrStrId]) return false;
        if (arr[arrStrId] === str.charAt(charId)) {
            res = true;
            // console.log(arr[arrStrId], str.charAt(charId));
            if (charId === str.length-1) return res;   // 当前已是最后一个字符
            visited[arrStrId] = true;
            charId++;
            if (charId <str.length) {
                res = hasPathCore(charId, row-1, col, visited) || hasPathCore(charId, row+1, col, visited) 
                    || hasPathCore(charId, row, col+1, visited) || hasPathCore(charId, row, col-1, visited);
            }
            if (!res) {
                charId--;
                visited[arrStrId] = false;
            }
        }
        return res;
    };

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j<cols; j++ ){
            const has = hasPathCore(charId, i+1, j+1, visited);
            if(has) return has;
        }   
    }

    return false;
}

function test() {
    const arr = ['a','b','t','g','c','f','c','s','j','d','e','h'];
    const str = 'tgsc';
    const hasRes = hasPath(arr, 3, 4, str);
    console.log(hasRes);
}

test();