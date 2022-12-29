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

/**
 * @link https://leetcode.cn/problems/t9-lcci/?favorite=xb9lfcwi
 */
function getValidT9Words(num: string, words: string[]): string[] {
    let map = new Map<string, string[]>()
    map.set('2', ['a', 'b', 'c'])
    map.set('3', ['d', 'e', 'f'])
    map.set('4', ['g', 'h', 'i'])
    map.set('5', ['j', 'k', 'l'])
    map.set('6', ['m', 'n', 'o'])
    map.set('7', ['p', 'q', 'r', 's'])
    map.set('8', ['t', 'u', 'v'])
    map.set('9', ['w', 'x', 'y', 'z'])
    const res = [] as string[]
    for (const word of words) {
        let isTrue = true
        for (let i = 0; i < word.length; i++) {
            const arr = map.get(num[i])
            if (!arr.includes(word[i])) isTrue = false
        }
        isTrue && res.push(word)
    }
    return res
};

/**
 * @link https://leetcode.cn/problems/pairs-with-sum-lcci/?favorite=xb9lfcwi
 */
function pairSums(nums: number[], target: number): number[][] {
    let map = new Map<number, number>(), res: number[][] = []
    for (let i = 0; i < nums.length; i++) {
        if (map.get(target - nums[i])) {
            res.push([nums[i], target - nums[i]])
            let num = map.get(target - nums[i])
            num--
            map.set(target - nums[i], num)
        } else {
            let num = map.get(nums[i]) ?? 0
            num++
            map.set(nums[i], num)
        }
    }
    return res
};

/**
 * @link https://leetcode.cn/problems/two-out-of-three/
 */
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    let map = new Map(), map2 = new Map(), res: number[] = []
    for (const num of nums1) {
        map.set(num, 1)
    }
    for (const num of nums2) {
        if (map.has(num)) !res.includes(num) && res.push(num)
        map2.set(num, 1)
    }
    for (const num of nums3) {
        if (map.has(num)) !res.includes(num) && res.push(num)
        if (map2.has(num)) !res.includes(num) && res.push(num)
    }
    return res
};


groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])