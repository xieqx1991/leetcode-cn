/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let cols = 1;
  let residue = 100; // 余量
  let used = 0;
  const offset = "a".charCodeAt();
  for (let i = 0; i < s.length; i++) {
    const ind = s[i].charCodeAt();
    const p = ind - offset;
    if (used + widths[p] > 100) {
      used = widths[p];
      cols++;
    } else {
      used += widths[p];
    }
  }
  return [cols, used];
};
// @lc code=end
