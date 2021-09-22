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
