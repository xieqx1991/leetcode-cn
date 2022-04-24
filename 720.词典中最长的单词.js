/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  /* 将数组中的字符排序 */
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return b.localeCompare(a);
    }
  });
  let longest = "";
  let set = new Set();
  set.add("");
  /* 将单词在set集合中查找前缀 */
  const n = words.length;
  for (let i = 0; i < n; i++) {
    const word = words[i];
    if (set.has(word.slice(0, word.length - 1))) {
      set.add(word);
      longest = word;
    }
  }
  // console.log(set)
  return longest;
};
// @lc code=end
