/*
 * @lc app=leetcode.cn id=440 lang=javascript
 *
 * [440] 字典序的第K小数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let curr = 1;
  k--;
  while (k > 0) {
    const steps = getSteps(curr, n);
    if (steps <= k) {
      k -= steps;
      curr++;
    } else {
      curr = curr * 10;
      k--;
    }
  }
  return curr;
};
const getSteps = (curr, n) => {
  let steps = 0;
  let first = curr;
  let last = curr;
  while (first <= n) {
    steps += Math.min(last, n) - first + 1;
    first = first * 10;
    last = last * 10 + 9;
  }
  return steps;
};
// @lc code=end
