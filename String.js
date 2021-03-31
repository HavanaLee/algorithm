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
console.log(lengthOfLongestSubstring(' '))

