/**
 * @link https://leetcode.cn/problems/group-anagrams-lcci/?favorite=xb9lfcwi
 */
function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<string, string[]>()
    for (let i = 0; i < strs.length; i++) {
        let arr = Array.from(strs[i])
        let key = arr.sort().toString()
        let list = map.has(key) ? map.get(key) : []
        list?.push(strs[i])
        map.set(key, list)
    }
    return Array.from(map.values())
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])