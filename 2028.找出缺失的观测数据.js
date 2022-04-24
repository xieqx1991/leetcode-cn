/*
 * @lc app=leetcode.cn id=2028 lang=javascript
 *
 * [2028] 找出缺失的观测数据
 */

// @lc code=start
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const sum = (rolls.length + n) * mean; // 总和
  const rollSum = rolls.reduce((pre, cur) => (pre += cur)); // 以观测综合
  let lostSum = sum - rollSum; // 缺失总和
  let avg = lostSum / n; // 缺失平均值
  // console.log(sum, rollSum, lostSum, avg)
  if (avg > 6 || avg < 1) {
    return [];
  }
  if (parseInt(avg) == avg) {
    return new Array(n).fill(avg);
  }
  const res = [];
  for (let i = n; i > 0; i--) {
    let cur = parseInt(avg);
    res.push(cur);
    lostSum -= cur;
    avg = lostSum / (i - 1);
  }

  return res;
};
// @lc code=end
