/**
 * @description 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：F(0) = 0,F(1) = 1, F(n) = F(n - 1) + F(n - 2)，其中 n > 1给你 n ，请计算 F(n) 。
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let dp = [0, 1] // 初始化动规数组
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] // 状态转移方程，i = i - 1 + i - 2
  }
  return dp[n]
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = [1, 2] // 初始化动规数组
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] // 状态转移方程，i = i - 1 + i - 2
  }
  return dp[n - 1]
}

/**
 * @description 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n < 1) return 1
  let dp = [1, 2]
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }
  return dp[n - 1]
}

/**
 * @description 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let Profits = 0 // 利润
  let min_number = Number.MAX_VALUE // 记录下最小值
  for (const price of prices) {
    Profits = Math.max(Profits, price - min_number)
    min_number = Math.min(min_number, price)
  }
  return Profits
}