/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length != goal.length) return false;
  const a = Array.from(s);
  for (let i = 0; i < goal.length; i++) {
    if (s == goal) break;
    const t = a.shift();
    a.push(t);
    s = a.join("");
  }
  return s == goal;
};
// @lc code=end
