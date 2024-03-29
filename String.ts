/**
 * @description 求无字符串的最长长度
 * @param {String} s 
 * @returns {number}
 */

const lengthOfLongestSubstring = (s: string | any[]) => {
  // let max = 0, j = 0
  // let map = new Map()
  // for (let i = 0; i < s.length; i++) {
  //   map.has(s[i]) && (j = Math.max(j, map.get(s[i]) + 1))
  //   map.set(s[i], i)
  //   max = Math.max(max, i - j + 1)
  // }
  // return max
}
// console.log(lengthOfLongestSubstring(' '))

/**
 * @description 求最长回文串
 * @param {string} s
 * @return {string}
 */
const getPalindrome = (s: string) => {
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
const intToRoman = (num: number) => {
  const symbloArr = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]
  let res = ''
  for (const [k, v] of symbloArr) {
    while (num >= k) {
      num -= k as number
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
var reverseString = function (s: string) {
  // let l = 0, r = s.length - 1, m
  // while (r > l) {
  //   m = s[l]
  //   s[l] = s[r]
  //   s[r] = m
  //   l++
  //   r--
  // }
  // return s
}

/**
 * @description 给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。如果剩余字符少于 k 个，则将剩余字符全部反转。如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s: string, k: number) {
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
var replaceSpace = function (s: string) {
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
var reverseWords = function (s: string) {
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
  function removeSpace(len: string | any[]) {
    // // 快慢指针去除空格
    // let slow = 0, quick = 0
    // while (quick < len.length) {
    //   // 如果快指针下标是空串且是0或者前一位=空串时，快指针前进
    //   if (len[quick] === ' ' && (quick === 0 || len[quick - 1] === ' ')) quick++
    //   else len[slow++] = len[quick++]
    // }
    // len.length = len[slow - 1] === ' ' ? slow - 1 : slow // 去除末尾的空格
  }

  // 反转
  function reverseArr(ast: { [x: string]: any }, start: number, end: number) {
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
var strStr = function (haystack: string, needle: string | any[]) {
  if (needle === '' || needle === haystack) return 0
  let len = needle.length
  for (let i = 0; i <= haystack.length - len; i++) {
    if (haystack.substr(i, len) === needle) return i
  }
  return - 1
}

/**
 * @description 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s: any) {
  let s1 = (s + s).slice(1, -1)
  return s1.indexOf(s) !== -1
}

console.log(reverseWords("  hello world  "))
// reverseStr('abcdefg', 2)
// console.log(getPalindrome('acdfd'))

/**
 * @description 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * @method 分治法 空间复杂度O(1)，时间复杂度O(n)
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s: any, n: number) {
  let l = '', r = ''
  for (const iterator of s) {
    n-- > 0 ? (l += iterator) : (r += iterator)
  }
  return l + r
}

/**
 * @link https://leetcode-cn.com/problems/longest-word-in-dictionary/
 */
function longestWord(words: string[]): string {
  words.sort((a, b) => {
    if (a.length != b.length) return a.length - b.length
    else return b.localeCompare(a)
  })
  let max_len = '', set = new Set()
  set.add('')
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (set.has(word.slice(0, word.length - 1))) {
      set.add(words[i])
      max_len = words[i]
    }
  }
  return max_len
};

/**
 * @link https://leetcode-cn.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
 * @method 贪心，比较A,B的次数，如果Alice操作的次数小于Bob，不成立，因为Alice先操作
 */
function winnerOfGame(colors: string): boolean {
  if (colors.length <= 2) return false
  let n = colors[0], a_time = 0, b_time = 0
  for (let i = 1; i < colors.length - 1; i++) {
    const cur = colors[i], next = colors[i + 1]
    if (cur === n && next === n) n === 'A' ? a_time++ : b_time++
    else if (cur === n && next !== n) continue
    else if (cur !== n) n === 'A' ? n = 'B' : n = 'A'
  }
  return a_time > b_time
};

/**
 * @link https://leetcode-cn.com/problems/maximize-the-confusion-of-an-exam/
 */
function maxConsecutiveAnswers(answerKey: string, k: number): number {
  const getMaxLen = (key: string, tar: string, k: number): number => {
    let ans = 0
    for (let l = 0, r = 0, noEq = 0; r < key.length; r++) {
      noEq += key[r] !== tar ? 1 : 0  // 记录不等于给定字符串的数量
      while (noEq > k) {  // 不等于给定字符串的数量>可操作次数就需要缩减区间
        noEq -= key[l++] !== tar ? 1 : 0
      }
      ans = Math.max(ans, r - l + 1)  // 滑动区间，取最大的一个区间为最长连续数
    }
    return ans
  }
  return Math.max(getMaxLen(answerKey, 'T', k), getMaxLen(answerKey, 'F', k))
};

/**
 * @link https://leetcode-cn.com/problems/rotate-string/
 */
function rotateString(s: string, goal: string): boolean {
  return s.length === goal.length && (s + s).includes(goal) // 翻转字符串，那么goal一定是s+s的子集
};

/**
 * @link https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/
 */
function countPrimeSetBits(left: number, right: number): number {
  const isPrime = (x: number): boolean => {
    if (x === 0 || x === 1) return false
    for (let i = 2; i * i <= x; i++) {
      if (!(x % 2)) return false
    }
    return true
  }
  const to2Len = (x: number): number => {
    return x.toString(2).split('0').join('').length
  }
  let ans = 0
  for (let x = left; x <= right; ++x) {
    if (isPrime(to2Len(x))) ++ans
  }
  return ans
};

/**
 * @link https://leetcode-cn.com/problems/count-numbers-with-unique-digits/
 */
function countNumbersWithUniqueDigits(n: number): number {
  if (!n) return 1
  if (n === 1) return 10 // n=1,0-9共10个数字都不相等
  let dp = [1, 10]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + (dp[i - 1] - dp[i - 2]) * (10 - i + 1) // n=2和n=1相比增加了9*9个不相等数字，同理n=3和n=2相比增加了9*9*8,因为n=3处于100和999之间，尾部只能增加8个数字
  }
  return dp[n]
};

interface obj {
  [prop: string]: number
}
/**
 * @link https://leetcode-cn.com/problems/number-of-lines-to-write-string/
 */
function numberOfLines(widths: number[], s: string): number[] {
  let letter_map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let obj: obj = {}
  for (let i = 0; i < widths.length; i++) {
    obj[letter_map[i]] = widths[i]
  }
  let row = 1, sum = 0
  for (let i = 0; i < s.length; i++) {
    if (sum + obj[s[i]] > 100) {
      sum = obj[s[i]]
      row++
      continue
    }
    else sum += obj[s[i]]
  }
  return [row, sum]
};

/**
 * @link https://leetcode-cn.com/problems/most-common-word/
 */
function mostCommonWord(paragraph: string, banned: string[]): string {
  let map = new Map<string, number>(), word: string = ''
  for (let i = 0; i <= paragraph.length; i++) {
    if (i < paragraph.length && paragraph[i].toLowerCase().charCodeAt(0) >= 65 && paragraph[i].toLowerCase().charCodeAt(0) <= 122) {
      word += paragraph[i].toLowerCase()
    } else if (word.length) {
      if (!banned.includes(word)) {
        map.set(word, (map.get(word) || 0) + 1)
      }
      word = ''
    }
  }
  let max = 0
  return Array.from(map.keys()).reduce((pre, cur) => {
    if (banned.indexOf(cur) === -1 && map.get(cur) > max) {
      max = map.get(cur)
      return cur
    }
    else return pre
  }, '')
};

/**
 * @link https://leetcode-cn.com/problems/shortest-distance-to-a-character/
 */
function shortestToChar(s: string, c: string): number[] {
  const n = s.length;
  const ans = new Array(n).fill(0);

  for (let i = 0, idx = -n; i < n; ++i) {
    if (s[i] === c) {
      idx = i;
    }
    ans[i] = i - idx;
  }

  for (let i = n - 1, idx = 2 * n; i >= 0; --i) {
    if (s[i] == c) {
      idx = i;
    }
    ans[i] = Math.min(ans[i], idx - i);
  }
  return ans;
};

/**
 * @link https://leetcode-cn.com/problems/goat-latin/
 */
function toGoatLatin(sentence: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const words = sentence.split(' ')
  for (let i = 0; i < words.length; i++) {
    let n = i + 2
    if (!vowels.includes(words[i][0].toLowerCase())) {
      words[i] = words[i].substring(1) + words[i][0]
    }
    words[i] += 'ma'
    while (--n >= 1) {
      words[i] += 'a'
    }
  }
  return words.join(' ')
};

/**
 * @link https://leetcode.cn/problems/string-to-url-lcci/solution/
 */
function replaceSpaces(S: string, length: number): string {
  let space = 0
  for (let s1 of S) {
    if (s1 === ' ') space++
  }
  if (!space) return S
  let lastIdx = length + space * 2
  const str = new Array(lastIdx)
  for (let i = length - 1; i >= 0; i--) {
    if (S[i] === '') {
      str[lastIdx--] = '0'
      str[lastIdx--] = '2'
      str[lastIdx--] = '%'
    } else {
      str[lastIdx--] = S[i]
    }
  }
  return str.join('')
};

/**
 * @link https://leetcode.cn/problems/palindrome-permutation-lcci/
 */
function canPermutePalindrome(s: string): boolean {
  let insert: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (insert.includes(s[i])) {
      let idx = insert.indexOf(s[i])
      insert.splice(idx, 1)
    }
    else insert.push(s[i])
  }
  return insert.length === 1 || insert.length === 0
};

/**
 * @link https://leetcode.cn/problems/one-away-lcci/?favorite=xb9lfcwi
 */
function oneEditAway(first: string, second: string): boolean {
  if (first.length - second.length > 1) return false
  let n1 = first, n2 = second
  if (first.length < second.length) {
    n1 = second
    n2 = first
  }

  let s1 = 0, s2 = 0
  for (let i = 0; i < n1.length; i++) {
    if (n1[i] === n2[n1.length === n2.length ? i : s2]) s2++
    s1++
  }

  return s1 - s2 <= 1
};

/**
 * @link https://leetcode.cn/problems/compress-string-lcci/?favorite=xb9lfcwi 
 */
function compressString(S: string): string {
  if (!S.length) return S
  let fast = 0, cur = S[0], res = ''
  for (let i = 0; i <= S.length; i++) {
    if (S[i] === cur) fast++
    else {
      res += `${cur}${fast}`
      fast = 1
      cur = S[i]
    }
  }
  return res.length >= S.length ? S : res
};

/**
 * @link https://leetcode.cn/problems/string-rotation-lcci/?favorite=xb9lfcwi
 */
function isFlipedString(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false
  return (s1 + s1).indexOf(s2) !== -1
};

/**
 * @link https://leetcode.cn/problems/is-unique-lcci/?favorite=xb9lfcwi
 * @method 位运算
 */
function isUnique(astr: string): boolean {
  let mark = 0
  for (let i of astr) {
    let code = i.charCodeAt(0) - 97
    if ((mark & (1 << code)) !== 0) return false
    else mark = mark | 1 << code
  }
  return true
};

/**
 * @link https://leetcode.cn/problems/insert-into-bits-lcci
 * @method 位运算
 */
function insertBits(N: number, M: number, i: number, j: number): number {
  for (let k = i; k <= j; ++k) {
    N &= ~(1 << k);
  }

  return N + (M << i);

};

/**
 * @link https://leetcode.cn/problems/decode-the-message/
 */
function decodeMessage(key: string, message: string): string {
  let cur = 'a', rules = new Map<string, string>()
  for (let i = 0; i < key.length; i++) {
    let c = key[i]
    if (!rules.has(c) && c !== ' ') {
      rules.set(c, cur)
      // 静态 String.fromCharCode() 方法返回由指定的 UTF-16 代码单元序列创建的字符串
      cur = String.fromCharCode(cur.charCodeAt(0) + 1)
    }
  }
  let str = ''
  for (let i = 0; i < message.length; i++) {
    let c = message[i]
    if (c !== ' ') {
      c = rules.get(c)
    }
    str += c
  }
  return str
};

/**
 * @link https://leetcode.cn/problems/replace-the-substring-for-balanced-string/
 */
function balancedString(s: string): number {
  let map = new Map<string, number>()
  map.set('Q', 0)
  map.set('W', 0)
  map.set('E', 0)
  map.set('R', 0)

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    map.set(c, map.get(c) + 1)
  }

  let sum = s.length, average = s.length / 4
  if (check(map, average)) return 0
  for (let l = 0, r = 0; l < s.length; l++) {
    while (r < s.length && !check(map, average)) {
      map.set(s[r], map.get(s[r]) - 1)
      r++
    }
    if (!check(map, average)) break
    sum = Math.min(sum, r - l)
    map.set(s[l], map.get(s[l]) + 1)
  }

  return sum

  function check<T extends Map<string, number>, U>(map: T, average: number): U {
    if (map.get('Q') > average || map.get('W') > average || map.get('E') > average || map.get('R') > average) return false
    return true
  }
};

balancedString("WWWEQRQEWWQQQWQQQWEWEEWRRRRRWWQE")



shortestToChar('aaab', 'b')

mostCommonWord("Bob", ["hit"])

winnerOfGame("AAAABBBB")

replaceSpaces("Mr John Smith    ", 13)

canPermutePalindrome("carerac")