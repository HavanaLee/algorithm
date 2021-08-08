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
  for (const [k, v] of symbloArr) {
    while (num >= k) {
      num -= k
      res += v
    }
    if (num === 0) break
  }
  return res
}

/**
 * @description 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let l = 0, r = s.length - 1, m
  while (r > l) {
    m = s[l]
    s[l] = s[r]
    s[r] = m
    l++
    r--
  }
  return s
}

/**
 * @description 给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。如果剩余字符少于 k 个，则将剩余字符全部反转。如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let arr = s.split('')
  for (let i = 0; i < s.length; i += (k * 2)) {
    let l = i - 1, r = i + k > s.length ? s.length : i + k
    while (--r > ++l) {
      [arr[l], arr[r]] = [arr[r], arr[l]]
    }
  }
  return arr.join('')
}

/**
 * @description 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') arr[i] = '%20'
  }
  return arr.join('')
}

/**
 * @description 给你一个字符串 s ，逐个翻转字符串中的所有 单词 。单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。请你返回一个翻转 s 中单词顺序并用单个空格相连的字符串。说明：输入字符串 s 可以在前面、后面或者单词间包含多余的空格。翻转后单词间应当仅用一个空格分隔。翻转后的字符串中不应包含额外的空格。
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = Array.from(s)

  removeSpace(arr) // 先去除多余的空格

  reverseArr(arr, 0, arr.length - 1)

  let start = 0
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === ' ' || i === arr.length) {
      reverseArr(arr, start, i - 1)
      start = i + 1
    }
  }

  // 去除空格的方法
  function removeSpace (len) {
    // 快慢指针去除空格
    let slow = 0, quick = 0
    while (quick < len.length) {
      // 如果快指针下标是空串且是0或者前一位=空串时，快指针前进
      if (len[quick] === ' ' && (quick === 0 || len[quick - 1] === ' ')) quick++
      else len[slow++] = len[quick++]
    }
    len.length = len[slow - 1] === ' ' ? slow - 1 : slow // 去除末尾的空格
  }

  // 反转
  function reverseArr (ast, start, end) {
    let l = start, r = end
    while (r > l) {
      [ast[l], ast[r]] = [ast[r], ast[l]]
      l++
      r--
    }
  }

  return arr.join('')
}

/**
 * @description 实现 strStr() 函数。给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。说明：当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '' || needle === haystack) return 0
  let len = needle.length
  for (let i = 0; i <= haystack.length - len; i++) {
    if (haystack.substr(i, len) === needle) return i
  }
  return - 1
}

console.log(reverseWords("  hello world  "))
// reverseStr('abcdefg', 2)

// console.log(getPalindrome('acdfd'))
