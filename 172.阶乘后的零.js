/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let res = 1n;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    res = res * BigInt(i);
  }

  while (res >= 10) {
    // console.log(res)
    const residue = res % 10n;
    // console.log(residue)
    if (residue == 0) {
      count++;
    } else {
      break;
    }
    res = res / 10n;
  }
  return count;
};
// @lc code=end
