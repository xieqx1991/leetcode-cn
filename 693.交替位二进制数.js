/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let sign = 2;
  let flag = true;
  while (n) {
    if (sign == n % 2) {
      flag = false;
      break;
    }
    sign = n % 2;
    n = n >> 1;
  }
  return flag;
};
// @lc code=end
