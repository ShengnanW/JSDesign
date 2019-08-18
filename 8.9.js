/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    dfs(n, n, '', result);  // 一开始左右括号的数量都为n
    return result;
  };
   
   
  /**
   * @param {number} left 表示还剩下几个左括号
   * @param {number} right 表示还剩下几个右括号
   * @param {string} str 当前的括号字符串
   * @param {string[]} result 结果数组
   * @return {null}
   */
  var dfs = function(left, right, str, result) {
    if (left > right) return;               // 若剩下的左括号大于右括号，说明括号不匹配，什么都不做。
    if (left === 0 && right === 0) result.push(str);  // 左右括号都使用完，将括号字符串加入结果数组中
    else {
      if (left > 0) dfs(left - 1, right, str + '(', result);  // 左括号还有剩余，则加个左括号
      if (right > 0) dfs(left, right - 1, str + ')', result); // 右括号还有剩余，则加个右括号
    }
  };
  console.log(generateParenthesis(40));