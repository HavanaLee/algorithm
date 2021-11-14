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

/**
 * @link https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = [], res = 0
  for (let i = 1; i < prices.length; i++) {
    dp.push(prices[i] - prices[i - 1])
  }
  for (const iterator in dp) {
    iterator > 0 && (res += iterator)
  }
  return res
}

/**
 * @link https://leetcode-cn.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let cover = 0 // 能覆盖到的格子数
  for (let index = 0; index <= cover; index++) {
    cover = Math.max(index + nums[index], cover)
    if (cover >= nums.length - 1) return true
  }
  return false
}

/**
 * @link https://leetcode-cn.com/problems/jump-game-ii/
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let ans = 0 // 走的步数
  let curCover = 0 // 当前覆盖最大距离
  let nextCover = 0 // 下一步最大距离
  for (let index = 0; index < nums.length; index++) {
    nextCover = Math.max(nums[index] + index, nextCover)
    if (index === curCover) {
      if (curCover < nums.length - 1) { // 如果当前覆盖步数 < 最后一位下标，说明还要走一步
        ans++
        curCover = nextCover  // 当前覆盖距离更新
        if (nextCover >= nums.length - 1) break
      } else break
    }
  }
  return ans
}

jump([2, 2, 1])


wiggleMaxLength([1, 7, 4, 9, 2, 5])