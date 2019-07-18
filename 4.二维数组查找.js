/**
 * 从符合条件的二位数组中找到指定值
 * @param {数组行数} row 
 * @param {数组列数} column
 * @param {查找值} num  
 */

function find2DArr(row, column, num) {
    // 生成一个符合条件的数组： 每一行按从左到右递增，每一列按从上到下递增
    let arr = new Array(row);
    let id = 0;
    for(let i=0; i<row; i++) {
        arr[i] = new Array(column);
        for(let j=0; j<column; j++) {
            arr[i][j] = id++;
        }
    }

    // 查找指定值
    
}
