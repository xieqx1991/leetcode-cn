/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  const b = n.toString(2);
  let gap = 0;
  let maxGap = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] === "1") {
      if (gap > maxGap) {
        maxGap = gap;
      }
      gap = 1;
    } else {
      gap++;
    }
  }
  return maxGap;
};
// @lc code=end
