/**
 * 
 * @param {界限值} threshold 
 * @param {方格行数} rows 
 * @param {方格列数} cols 
 */

function moveCount(threshold, rows, cols) { 
    if (threshold<0 || rows<1 || cols <1 || rows !== parseInt(rows) && cols !== parseInt(cols)) return '输入参数不合法';
    let count = 0;
    let isMove = new Array(rows*cols);

    const canMove = (num, row, col) => {
        const rowDigit = String(row).split('');
        const colDigit = String(col).split('');
        const rowSum = rowDigit.reduce((acc, cur) => acc + Number(cur), 0);
        const colSum = colDigit.reduce((acc, cur) => acc + Number(cur), 0);
        const isCan = num < (rowSum + colSum) ? false : true;

        return isCan;
    }

    const moveCountCore = (threshold, row, col) => {
        const index = row*cols+col;
        if (row > rows-1 || col > cols-1 || isMove[index]) return;
        if (canMove(threshold, row, col)) {
            count++;
            isMove[index] = true;
            moveCountCore(threshold, row+1, col);
            moveCountCore(threshold, row, col+1);
        }
    }

    moveCountCore(threshold, 0, 0);
    return count;
}

function test() {
   const count = moveCount(118, 12, 10);
   console.log(count);
}

test();