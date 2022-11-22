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
