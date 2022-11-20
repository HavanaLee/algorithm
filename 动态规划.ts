// /**
//  * @description 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：F(0) = 0,F(1) = 1, F(n) = F(n - 1) + F(n - 2)，其中 n > 1给你 n ，请计算 F(n) 。
//  * @param {number} n
//  * @return {number}
//  */
// var fib = function (n) {
//   let dp = [0, 1] // 初始化动规数组
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2] // 状态转移方程，i = i - 1 + i - 2
//   }
//   return dp[n]
// }

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//   let dp = [1, 2] // 初始化动规数组
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2] // 状态转移方程，i = i - 1 + i - 2
//   }
//   return dp[n - 1]
// }

// /**
//  * @description 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
//  * @param {number} n
//  * @return {number}
//  */
// var numWays = function (n) {
//   if (n < 1) return 1
//   let dp = [1, 2]
//   for (let i = 2; i <= n; i++) {
//     dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
//   }
//   return dp[n - 1]
// }

// /**
//  * @description 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   let Profits = 0 // 利润
//   let min_number = Number.MAX_VALUE // 记录下最小值
//   for (const price of prices) {
//     Profits = Math.max(Profits, price - min_number)
//     min_number = Math.min(min_number, price)
//   }
//   return Profits
// }

// /**
//  * @description 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为O(n)。
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function (nums) {
//   let max = nums[0], pre = nums[0]
//   for (let i = 1; i < nums.length; i++) {
//     pre = Math.max(pre + nums[i], nums[i])
//     max = Math.max(max, pre)
//   }
//   return max
// }

// /**
//  * @description 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
//  * @link https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var maxValue = function (grid) {
//   const c = grid.length, r = grid[0].length // c列数，r行数
//   // dp方程有四种状态
//   for (let i = 0; i < c; i++) {
//     for (let j = 0; j < r; j++) {
//       if (i === 0 && j === 0) continue
//       else if (i === 0 && j !== 0) grid[0][j] += grid[0][j - 1]
//       else if (i !== 0 && j === 0) grid[i][0] += grid[i - 1][0]
//       else grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]) // dp[i][j]实际就是i-1或者j-1的最大值+grid[i][j]
//     }
//   }
//   return grid[c - 1][r - 1]
// }

/**
 * @link https://leetcode.cn/problems/three-steps-problem-lcci/?favorite=xb9lfcwi
 */
function waysToStep(n: number): number {
  let dp = [1, 2, 4]  // 第一层只能一次上一个台阶，第二层可以走两次一层台阶或者一次走两层，第三层可以走三次一层台阶，先走一层再走两层或者先走两层再走一层，或者直接上三层台阶
  for (let i = 3; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000007  // 套用计算公式

  }
  return dp[n - 1]
};


/**
 * @link https://leetcode.cn/problems/coin-lcci/?favorite=xb9lfcwi
 */
function waysToChange(n: number): number {
  let coins = [1, 5, 10, 25]
  var dp = new Array(n + 1).fill(0)
  dp[0] = 1 // 总数为0时，只有一种方案兑换 就是所有硬币都不选择

  for (var i = 0; i < coins.length; i++) {
    for (var j = 0; j <= n; j++) {
      if (j - coins[i] >= 0) {
        dp[j] = dp[j] + dp[j - coins[i]] // 组合问题公式
      }
    }
  }
  return dp[n] % 1000000007
};

waysToChange(5)
