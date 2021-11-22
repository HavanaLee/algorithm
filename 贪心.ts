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

/**
 * @link https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b)
  let start = 0
  while (start < k) {
    if (nums[start] < 0) nums[start] = -nums[start]
    else if ((k - start) % 2 === 0) break
    else {
      nums.sort((a, b) => a - b)
      nums[0] = -nums[0]
    }
    start++
  }
  return nums.reduce((pre, cur) => pre + cur, 0)
}

/**
 * @link https://leetcode-cn.com/problems/gas-station/
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let total_sum = 0, cur_sum = 0, start = 0
  for (let i = 0; i < cost.length; i++) {
    total_sum += gas[i] - cost[i]
    cur_sum += gas[i] - cost[i]
    if (cur_sum < 0) {
      cur_sum = 0
      start = i + 1 // 当前总和小于0，说明一定出现在当前下标的后方
    }
  }
  if (total_sum < 0) return -1
  return start
}

/**
 * @link https://leetcode-cn.com/problems/candy/
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let candys = Array.from({ length: ratings.length }, v => 1)
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) candys[i] = candys[i - 1] + 1
  } // 从前往后遍历，先确定右侧的糖果数量
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) candys[i] = Math.max(candys[i], candys[i + 1] + 1)
  }
  let res = candys.reduce((pre, cur) => pre + cur, 0)
  return res
}

/**
 * @link https://leetcode-cn.com/problems/lemonade-change/
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills: number[]): boolean {
  let map = new Map<number, number>()
  for (let i = 0; i < bills.length; i++) {
    switch (bills[i] - 5) {
      case 0:
        map.set(5, map.get(5) ? map.get(5) + 1 : 1)
        break;
      case 5:
        if (map.get(5)) {
          map.set(5, map.get(5) - 1)
          map.set(10, map.get(10) ? map.get(10) + 1 : 1)
          break
        }
        else return false
      case 15:
        if (map.get(5) >= 1 && map.get(10) >= 1) {
          map.set(5, map.get(5) - 1)
          map.set(10, map.get(10) - 1)
          break
        } else if (map.get(5) >= 3) {
          map.set(5, map.get(5) - 3)
          break
        } else return false
    }
  }
  return true
};

largestSumAfterKNegations([4, 2, 3], 1)