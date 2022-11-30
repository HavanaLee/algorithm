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


smallestDifference([-2147483648, 1], [2147483647, 0])