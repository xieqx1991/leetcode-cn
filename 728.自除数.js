/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const res = [];
  for (let i = left; i <= right; i++) {
    if (i < 10) {
      res.push(i);
      continue;
    }
    let n = i;
    let m = 0;
    let flag = false;
    while (n >= 10) {
      m = n % 10;
      if (m == 0) {
        continue;
      }
      if (i % m) {
        flag = false;
        break;
      }
      n = Math.floor(n / 10);
    }
    if (flag) {
      res.push(i);
    }
  }
  return res;
};
// @lc code=end
