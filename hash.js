// 哈希算法

/**
 * @description 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  // if (s.length !== t.length) return false
  // const map = {}
  // for (let i = 0; i < s.length; i++) {
  //   map[s[i] + ''] = (map[s[i] + ''] || 0) + 1
  // }
  // for (let i = 0; i < t.length; i++) {
  //   if (!map[t[i]]) return false
  //   map[t[i]]--
  // }
  // return true
  if (s.length !== t.length) return false
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!map.get(t[i])) return false
    map.set(t[i], map.get(t[i]) - 1)
  }
  return true
}

console.log(isAnagram("aacc", "ccac"))
