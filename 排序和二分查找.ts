/**
 * @link https://leetcode.cn/problems/sorted-matrix-search-lcci/?favorite=xb9lfcwi
 * @method z字形查找
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    if (!matrix.length) return false // 空数组的情况
    let m = matrix.length - 1, n = matrix[0].length - 1, x = m, y = 0
    // 因为是升序数组，可以从二维数组的左下角开始遍历，大于target的说明target一定在当前行的上方，小于target说明一定在当前列的右方
    while (x >= 0 && y <= n) {
        if (matrix[x][y] === target) return true
        else if (matrix[x][y] > target) x--
        else y++
    }
    return false
};

/**
 * @link https://leetcode.cn/problems/rank-from-stream-lcci/description/?favorite=xb9lfcwi
 * @method 二分查找
 */
class StreamRank {
    stack: number[]
    constructor(x: number[]) {
        this.stack = x
    }

    track(x: number): void {
        if (!this.stack.length) {
            this.stack.push(x)
            return
        }
        const l = this.getRankOfNumber(x)
        this.stack.splice(l, 0, x)
    }

    getRankOfNumber(x: number): number {
        if (!this.stack.length) return 0
        let r = this.stack.length - 1, l = 0
        while (l <= r) {
            let mid = l + r >> 1
            if (this.stack[mid] <= x) l = mid + 1
            else r = mid - 1
        }
        return l
    }
}

/**
 * @link https://leetcode.cn/problems/peaks-and-valleys-lcci/description/?favorite=xb9lfcwi
 * @method 快速排序
 */
function wiggleSort(nums: number[]): void {
    function quikcSort(nums: number[]): number[] {
        if (nums.length < 2) return nums
        let l = [], r = [], m = ~~(nums.length >> 1)
        const mid = nums.splice(m, 1)[0]
        for (let i = 0; i < nums.length; i++) {
            nums[i] > mid ? r.push(nums[i]) : l.push(nums[i])
        }
        return quikcSort(l).concat([mid], quikcSort(r))
    }
    // 快速排序，然后每次从快排后的数组尾部和头部按顺序插入nums当中
    const sorAry = quikcSort(nums)
    let l = 0, r = sorAry.length - 1, start = 0
    while (l <= r) {
        nums[start++] = sorAry[r--]
        if (l <= r) nums[start++] = sorAry[l++]
    }
};

/**
 * @link https://leetcode.cn/problems/swap-numbers-lcci/?favorite=xb9lfcwi
 * @method 位运算
 */
function swapNumbers(numbers: number[]): number[] {
    // 利用异位或的特性
    numbers[0] = numbers[0] ^ numbers[1]
    numbers[1] = numbers[0] ^ numbers[1]
    numbers[0] = numbers[0] ^ numbers[1]
    return numbers
};

/**
 * @link https://leetcode.cn/problems/smallest-difference-lcci/?favorite=xb9lfcwi
 */
function smallestDifference(a: number[], b: number[]): number {

    b.sort((h1, h2) => h1 - h2)
    let min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < a.length; i++) {
        let l = 0, r = b.length - 1, m: number
        if (r === 0) { // 处理只有一个数值的情况
            min = Math.min(min, Math.abs(a[i] - b[0]))
            continue
        }
        while (l <= r) {
            m = Math.floor((r - l) / 2 + l)
            const absm = Math.abs(a[i] - b[m])
            min = Math.min(min, absm)
            if (b[m] < a[i]) l = m + 1
            else r = m - 1
        }

    }
    return min
};

/**
 * @link https://leetcode.cn/problems/sub-sort-lcci/?favorite=xb9lfcwi
 * @method 双指针
 */
function subSort(array: number[]): number[] {
    // 这道题默认数组是升序的
    let l = -1, r = -1, max = Number.MIN_SAFE_INTEGER, min = Number.MAX_SAFE_INTEGER
    // 先从前往后遍历一次
    for (let i = 0; i < array.length; i++) {
        // 如果当前值小于遍历的最大值，说明在这里出现了问题
        if (array[i] < max) r = i
        // 正常升序，更新最大值
        else max = array[i]
    }
    // 从后往前遍历一次
    for (let i = array.length - 1; i >= 0; i--) {
        // 因为是从后往前，是会越来越小的，如果当前值大于了最小值，说明这里出现了问题
        if (array[i] > min) l = i
        // 正常升序，更新最小值
        else min = array[i]
    }
    // 最后的区间按从小到大顺序返回
    return [Math.min(l, r), Math.max(l, r)]
};

/**
 * @link https://leetcode.cn/problems/sum-swap-lcci/?favorite=xb9lfcwi
 * @method 二分法
 */
function findSwapValues(array1: number[], array2: number[]): number[] {
    let res = [] as number[]
    // 先排序
    array1.sort((a, b) => a - b)
    array2.sort((a, b) => a - b)
    let sum1: number = 0, sum2: number = 0
    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i]
    }
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i]
    }
    const diff = sum1 - sum2
    if (diff % 2 !== 0) return res
    for (let i = 0; i < array1.length; i++) {
        let l = 0, r = array2.length - 1, m
        const target = array1[i] - diff / 2
        while (l <= r) {
            m = Math.floor((r - l) / 2 + l)
            const mid = array2[m]
            if (target == mid) break
            else if (mid < target) l = m + 1
            else r = m - 1
        }
        if (l <= r) res.push(array1[i], array2[m])
    }
    return res
};
findSwapValues([4, 1, 2, 1, 1, 2], [3, 6, 3, 3])

/**
 * @link https://leetcode.cn/problems/minimum-limit-of-balls-in-a-bag/
 * @method 二分法
 */
function minimumSize(nums: number[], maxOperations: number): number {
    let l = 1, r = nums.reduce((pre, cur) => Math.max(pre, cur), 0), ans = 0
    while (l <= r) {
        let ops = 0, y = Math.floor((r - l) / 2 + l)
        for (const x of nums) {
            ops += Math.floor((x - 1) / y)
        }
        if (ops <= maxOperations) {
            ans = y
            r = y - 1
        } else l = y + 1
    }
    return ans
};





smallestDifference([-2147483648, 1], [2147483647, 0])