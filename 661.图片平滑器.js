/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const iLen = img.length;
  const avg = [];
  for (let i = 0; i < iLen; i++) {
    const jLen = img[i].length;
    const avgItem = [];
    for (let j = 0; j < jLen; j++) {
      avgItem.push(calculate(img, i, j));
    }
    avg.push(avgItem);
  }
  return avg;
};

const calculate = function (img, i, j) {
  // [i - 1, j - 1], [i - 1, j], [i - 1, j + 1]
  // [i, j - 1]    , [i, j]    , [i, j + 1]
  // [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]
  let count = 0; // 有效数字
  let total = 0; // 总和
  if (img[i - 1]?.[j - 1] != undefined) {
    count += 1;
    total += img[i - 1][j - 1];
  }
  if (img[i - 1]?.[j] != undefined) {
    count += 1;
    total += img[i - 1][j];
  }
  if (img[i - 1]?.[j + 1] != undefined) {
    count += 1;
    total += img[i - 1][j + 1];
  }
  if (img[i]?.[j - 1] != undefined) {
    count += 1;
    total += img[i][j - 1];
  }
  if (img[i]?.[j] != undefined) {
    count += 1;
    total += img[i][j];
  }
  if (img[i]?.[j + 1] != undefined) {
    count += 1;
    total += img[i][j + 1];
  }
  if (img[i + 1]?.[j - 1] != undefined) {
    count += 1;
    total += img[i + 1][j - 1];
  }
  if (img[i + 1]?.[j] != undefined) {
    count += 1;
    total += img[i + 1][j];
  }
  if (img[i + 1]?.[j + 1] != undefined) {
    count += 1;
    total += img[i + 1][j + 1];
  }
  return Math.floor(total / count);
};
// @lc code=end
