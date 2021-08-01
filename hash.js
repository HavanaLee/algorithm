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

/**
 * @description 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。你可以按任意顺序返回答案。
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let res = []
  let map = new Map()
  // 先把words第一项的值存到map中
  words[0].split('').forEach(e => {
    map.set(e, (map.get(e) || 0) + 1)
  })
  for (let i = 1; i < words.length; i++) {
    let map1 = new Map()
    for (let j = 0; j < words[i].length; j++) {
      map.has(words[i][j]) && map1.set(words[i][j], (map1.get(words[i][j]) || 0) + 1)
    }
    Array.from(map1.keys()).forEach(e => {
      map.has(e) && map1.set(e, Math.min(map.get(e), map1.get(e)))
    })
    map = map1
  }
  Array.from(map.keys()).forEach(e => {
    while (map.get(e) > 0) {
      res.push(e)
      map.set(e, map.get(e) - 1)
    }
    // for (let i = 0; i < map.get(e); i++) {
    //   res.push(e)
    // }
  })
  console.log(res)
  return res
}

/**
 * @description 给定两个数组，编写一个函数来计算它们的交集。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1 = new Set(nums1)
  nums2 = new Set(nums2)
  let res = []
  nums2.forEach(e => {
    nums1.has(e) && res.push(e)
  })
  return res
}

/**
 * @description 编写一个算法来判断一个数 n 是不是快乐数。「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。如果 n 是快乐数就返回 true ；不是，则返回 false 。
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  // 先求和
  const getNum = (n) => {
    if (n === 1 || n === 0) return n
    let num = 0
    while (n) {
      num += Math.pow((n % 10), 2)
      n = ~~(n / 10)
    }
    num += Math.pow(n, 2)
    return num
  }
  // 如果求和后的值重复出现，说明是一个无线循环的数
  let set = new Set()
  while (n !== 1 && !set.has(n)) {
    set.add(n)
    n = getNum(n)
  }
  return n === 1
}

/**
 * @description 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。你可以按任意顺序返回答案。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [i, map.get(target - nums[i])]
    else map.set(nums[i], i)
  }
}

/**
 * @description 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过 231 - 1
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let map = new Map()
  let count = 0 // 元组个数
  // 先计算a和b的大数组，把a和b的合以及出现的次数存入map
  for (const n of nums1) {
    for (const m of nums2) {
      map.set(m + n, (map.get(m + n) || 0) + 1)
    }
  }
  for (const n of nums3) {
    for (const m of nums4) {
      let sum = n + m
      count += map.get(0 - sum) || 0
    }
  }
  return count
}

/**
 * @description 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false
  let map = new Map()
  for (const i of magazine) {
    map.set(i, (map.get(i) || 0) + 1)
  }
  for (const i of ransomNote) {
    if (!map.has(i) || !map.get(i)) return false
    map.set(i, map.get(i) - 1)
  }
  return true
}

isHappy(23)
commonChars(["bella", "label", "roller"])
// console.log(isAnagram("aacc", "ccac"))
