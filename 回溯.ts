/**
 * @link https://leetcode.cn/problems/permutation-i-lcci/?favorite=xb9lfcwi
 */
function permutationUnique(S: string): string[] {
  let res: Array<string> = [], temp = S.split(''), len = temp.length
  dfs(0)
  function dfs(index: number) {
    // 终止条件index==len，已经都遍历了一次
    if (index === len) {
      res.push(temp.join())
      return
    }
    for (let i = index; i < len; i++) {
      [temp[i], temp[index]] = [temp[index], temp[i]] // 交换位置
      dfs(index + 1);
      [temp[i], temp[index]] = [temp[index], temp[i]] // 回溯
    }
  }
  return res
};

/**
 * @link https://leetcode.cn/problems/permutation-ii-lcci/description/?favorite=xb9lfcwi
 */
function permutation(S: string): string[] {
  let res: Array<string> = [], temp = S.split(''), len = temp.length
  dfs(0)
  function dfs(index: number) {
    // 终止条件index==len，已经都遍历了一次
    if (index === len) {
      res.push(temp.join(''))
      return
    }
    let set = new Set() // 利用set来去重，每一次循环新建set存储已经用过的字符串
    for (let i = index; i < len; i++) {
      if (!set.has(temp[i])) {
        [temp[i], temp[index]] = [temp[index], temp[i]] // 交换位置
        dfs(index + 1);
        [temp[i], temp[index]] = [temp[index], temp[i]]; // 回溯
        set.add(temp[i])

      }
    }
  }
  return res
};

/**
 * @link https://leetcode.cn/problems/bracket-lcci/?favorite=xb9lfcwi
 */
function generateParenthesis(n: number): string[] {
  let res: string[] = [], temp = Array.from({ length: n * 2 }, (v, k) => k % 2 ? ')' : '('), len = temp.length
  dfs(1)
  function dfs(k: number) {
    if (!isValid(temp.slice(0, k + 1))) return
    if (k == len - 1) {
      res.push(temp.join(''))
      return
    }
    let set = new Set<string>()
    for (let i = k; i < len - 1; i++) {
      if (!set.has(temp[i])) {
        [temp[i] as '(' | ')', temp[k] as '(' | ')'] = [temp[k], temp[i]]
        dfs(k + 1);
        [temp[i] as '(' | ')', temp[k] as '(' | ')'] = [temp[k], temp[i]];
        set.add(temp[i])
      }
    }
  }
  function isValid(temp: ('(' | ')')[]) {
    let stack: string[] = []
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === '(') stack.push(temp[i])
      else {
        if (stack.length) stack.pop()
        else return false
      }
    }
    return true
  }
  return res
};

/**
 * @link https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 */
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return []
  let res: string[] = [],
    obj = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z']
    }

  function dfs(index: number, combination: string) {
    // 终止条件
    if (index === digits.length) {
      res.push(combination)
      return
    }
    const digit = digits[index]
    const letters: string[] = obj[digit], len = letters.length
    for (let i = 0; i < len; i++) {
      // 先把这一次遍历到的字母加上
      combination += letters[i]
      dfs(index + 1, combination);
      // 回溯，清除上一次的字母
      combination = combination.substring(0, combination.length - 1)
    }
  }

  dfs(0, '')
  return res
};

letterCombinations('23')

generateParenthesis(3)
