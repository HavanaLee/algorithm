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