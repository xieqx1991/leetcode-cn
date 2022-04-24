/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
  if (!root) {
    return "";
  }
  if (!root.left && !root.right) {
    return "" + root.val;
  }
  if (!root.right) {
    return root.val + "(" + tree2str(root.left) + ")";
  }
  return (
    root.val + "(" + tree2str(root.left) + ")(" + tree2str(root.right) + ")"
  );
};
// @lc code=end
