/**
 * @description 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 * @link https://leetcode-cn.com/problems/assign-cookies/
 * @method 贪心
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let res = 0, index = s.length - 1
  for (let i = g.length; i >= 0; i--) {
    if (index < 0) break
    if (s[index] >= g[i]) {
      res++
      index--
    }
  }
  return res
}

/**
 * @link https://leetcode-cn.com/problems/wiggle-subsequence/
 * @method 贪心
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let res = 1 // 因为一个元素和两个不同元素也算摆动序列
  let preDiff = 0, curDiff = 0 // 记录当前和前序差值
  for (let i = 0; i < nums.length; i++) {
    curDiff = nums[i + 1] - nums[i]
    if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) { // curDiff != 0，否则不满足摆动序列
      res++
      preDiff = curDiff
    }
  }
  return res
}

wiggleMaxLength([1, 7, 4, 9, 2, 5])