/**
 * @description 求无字符串的最长长度
 * @param {String} s 
 * @returns {number}
 */

const lengthOfLongestSubstring = s => {
  let max = 0, j = 0
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.has(s[i]) && (j = Math.max(j, map.get(s[i]) + 1))
    map.set(s[i], i)
    max = Math.max(max, i - j + 1)
  }
  return max
}
// console.log(lengthOfLongestSubstring(' '))

/**
 * @description 求最长回文串
 * @param {string} s
 * @return {string}
 */
const getPalindrome = s => {
  let n = s.length
  let res = ''
  let dp = Array.from(new Array(n), () => new Array(n).fill(0)) // 生成一个二维数组记录回文串的状态
  // 回文串满足的条件 对应i和j下标的值相，相应的i+1和j-1也相等
  // 如果s长度=0或1那本身就是回文串
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1])
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1)
      }
    }
  }
  return res
}

/**
 * @description 整数转罗马数字，枚举法列出所有情况，for循环比对
 * @param {number} num
 * @return {string}
 */
const intToRoman = num => {
  const symbloArr = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]
  let res = ''
  for (const [k, v] of object) {
    while (num >= k) {
      num -= k
      res += v
    }
    if (num === 0) break
  }
  return res
}


console.log(getPalindrome('acdfd'))
