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

/**
 * @link https://leetcode.cn/problems/words-frequency-lcci/?favorite=xb9lfcwi
 */
class WordsFrequency {
    map = new Map<string, number>()
    constructor(book: string[]) {
        for (let i = 0; i < book.length; i++) {
            let value = this.map.has(book[i]) ? this.map.get(book[i]) : 0
            value++
            this.map.set(book[i], value)
        }
    }

    get(word: string): number {
        return this.map.get(word) ?? 0
    }
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])