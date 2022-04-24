/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const result = [];
  for (let i = 0; i < ops.length; i++) {
    let len = result.length;
    switch (ops[i]) {
      case "C":
        result.pop();
        break;
      case "D":
        result.push(2 * result[len - 1]);
        break;
      case "+":
        result.push(result[len - 1] + result[len - 2]);
        break;
      default:
        result.push(+ops[i]);
        break;
    }
    console.log(result);
  }
  return result.reduce((pre, cur) => (pre += cur), 0);
};
// @lc code=end
