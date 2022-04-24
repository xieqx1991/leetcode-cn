/*
 * @lc app=leetcode.cn id=2038 lang=javascript
 *
 * [2038] 如果相邻两个颜色均相同则删除当前颜色
 */

// @lc code=start
/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  const freq = [0, 0];
  let cur = "C";
  let cnt = 0;
  for (let i = 0; i < colors.length; i++) {
    const c = colors[i];
    if (c !== cur) {
      // 不同字符，重新计算
      cur = c;
      cnt = 1;
    } else {
      // 相同字符
      cnt += 1;
      // 连续三个，可删除一次，计数+1
      if (cnt >= 3) {
        freq[cur.charCodeAt() - "A".charCodeAt()] += 1;
      }
    }
  }
  return freq[0] > freq[1];
};
// @lc code=end
