// /**
//  * 两数之和
//  * @param {number[]} nums
//  * @param {number} target
//  * @returns {number[]}
//  */

// import { ESMap } from "typescript"

// const twoSums = (nums, target) => {
//   // 利用map结构存放数据
//   const map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(target - nums[i])) {
//       return [map.get(target - nums[i]), i]
//     } else map.set(target - nums, i)
//   }
// }

// /**
//  * @description 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
//  * @param {number[]} height
//  * @return {number}
//  */
// var maxArea = function (height) {
//   let l = 0, r = height.length - 1
//   let ans = 0
//   while (l < r) {
//     const area = Math.min(height[l], height[r]) * (r - l)
//     ans = Math.max(ans, area)
//     height[l] >= height[r] ? --r : ++l
//   }
//   return ans
// }


// /**
//  * @description 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
//  * @type 双指针
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const sortedSquares = (nums) => {
//   let k = nums.length - 1
//   let res = new Array(nums.length).fill(0)
//   for (let i = 0, j = nums.length - 1; i <= j;) { // 因为数组有序，所以最大值一定在最左或者最右
//     if (Math.pow(nums[i], 2) <= Math.pow(nums[j], 2)) {
//       res[k--] = Math.pow(nums[j], 2)
//       j--
//     } else {
//       res[k--] = Math.pow(nums[i], 2)
//       i++
//     }
//   }
//   return res
// }

// /**
//  * @description 给定一个含有 n 个正整数的数组和一个正整数 target 。找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
//  * @type 滑动窗口
//  * @param {number} target
//  * @param {number[]} nums
//  * @return {number}
//  */
// const minSubArrayLen = (target, nums) => {
//   let max_length = 0 // 满足条件的数组长度
//   let i = 0 // 起始位置
//   let sum = 0 // 数组总和
//   let result = Number.MAX_VALUE
//   for (let j = 0; j < nums.length; j++) {
//     sum += nums[j] // 滑动数组的值
//     while (sum >= target) {
//       max_length = j - i + 1 // 滑动区间长度
//       result = Math.min(max_length, result)
//       sum -= nums[i++] // 起始位置向前滑动
//     }
//   }
//   return result === Number.MAX_VALUE ? 0 : result
// }


// /**
//  * @param {number} n
//  * @return {number[][]}
//  */
// const generateMatrix = function (n) {
//   // new Array(n).fill(new Array(n))
//   // 使用fill --> 填充的是同一个数组地址
//   const res = Array.from({ length: n }).map(() => new Array(n))
//   let loop = n >> 1, i = 0, //循环次数
//     count = 1,
//     startX = 0, startY = 0 // 起始位置 
//   while (++i <= loop) {
//     // 定义行列
//     let row = startX, column = startY
//     // [ startY, n - i)
//     while (column < n - i) {
//       res[row][column++] = count++
//     }
//     // [ startX, n - i)
//     while (row < n - i) {
//       res[row++][column] = count++
//     }
//     // [n - i ,  startY)
//     while (column > startY) {
//       res[row][column--] = count++
//     }
//     // [n - i ,  startX)
//     while (row > startX) {
//       res[row--][column] = count++
//     }
//     startX = ++startY
//   }
//   if (n & 1) {
//     res[startX][startY] = count
//   }
//   return res
// }

// /**
//  * @description 找出数组中重复的数字。在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
//  * @method 原地交换 空间复杂度O(1)，时间复杂度O(n²)
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findRepeatNumber = function (nums) {
//   let cur
//   for (let i = 0; i < nums.length; i++) {
//     while (nums[i] != i) {
//       cur = nums[i]
//       if (nums[i] == nums[cur]) {
//         return nums[i]
//       } else {
//         nums[i] = nums[cur]
//         nums[cur] = cur
//       }
//     }
//   }
// }

// /**
//  * @description 统计一个数字在排序数组中出现的次数。
//  * @method 双指针 时间复杂度O(n)，空间复杂度O(1)
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function (nums, target) {
//   let l = 0, r = nums.length - 1
//   while (nums[l] < target) l++
//   while (nums[r] > target) r--
//   return r - l > 0 ? r - l + 1 : 0
// }

// /**
//  * @description 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
//  * @method 二分法{有序数组搜索就用二分法} 时间复杂度O(logN)，空间复杂度O(1)
//  * @param {number[]} nums
//  * @return {number}
//  */
// var missingNumber = function (nums) {
//   let l = 0, r = nums.length, mid
//   while (l <= r) {
//     mid = Math.floor((l + r) / 2)
//     nums[mid] === mid ? l = mid + 1 : r = mid - 1
//   }
//   return l
// }

// /**
//  * @description 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
//  * @method 二分法{相当于从二维数组的右上角开始找} 时间复杂度O(n+m)，循环体最多执行m+n次,空间复杂度O(1)
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// var findNumberIn2DArray = function (matrix, target) {
//   if (!matrix.length || !matrix[0]['length']) return false
//   let rows = matrix.length, colmuns = matrix[0].length // 取到行数和列数
//   let row = 0, colmun = colmuns - 1
//   while (row < rows && colmun >= 0) {
//     if (matrix[row][colmun] === target) return true // 相等，返回true
//     else if (matrix[row][colmun] > target) colmun-- // 大于目标数，说明只有这一列往前的数才有可能等于目标
//     else if (matrix[row][colmun] < target) row++ // 小于目标数，只有这一行下面的数才可能等于目标
//   }
//   return false
// }

// /**
//  * @description 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。
//  * @method 二分法 时间复杂度O(n)，空间复杂度O(1)
//  * @param {number[]} numbers
//  * @return {number}
//  */
// var minArray = function (numbers) {
//   let l = 0, r = numbers.length - 1, mid
//   while (l < r) {
//     mid = l + Math.floor((r - l) / 2) // 先减后加，避免栈溢出
//     if (numbers[mid] < numbers[r]) r = mid // 中间数大于数组最左端，所以中位数右侧属于反常数组，最小值一定在[0,mid]之中，所以不能把mid排除
//     else if (numbers[mid] > numbers[r]) l = mid + 1
//     else r--
//   }
//   return numbers[l]
// }

// /**
//  * @description 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
//  * @method 哈希遍历 时间复杂度O(n)，最多循环s的长度即n次，空间复杂度O(∣Σ∣)
//  * @param {string} s
//  * @return {character}
//  */
// var firstUniqChar = function (s) {
//   if (!s) return ' '
//   let map = new Map()
//   for (let i = 0; i < s.length; i++) {
//     map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (map.get(s[i]) === 1) return s[i]
//   }
//   return ' '
// }

// /**
//  * @description 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
//  * @link https://leetcode-cn.com/problems/merge-sorted-array/
//  * @method 逆向双指针 时间复杂度O(m+n)，空间复杂度O(1)
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// const merge = function (nums1, m, nums2, n) {
//   let p1 = m - 1, p2 = n - 1
//   let tail = m + n - 1, cur
//   // 逆向双指针，指针只到m，所以m之前的值不会被替换
//   while (p1 >= 0 || p2 >= 0) {
//     if (p1 === -1) cur = nums2[p2--]
//     else if (p2 === -1) cur = nums1[p1--]
//     else if (nums1[p1] > nums2[p2]) cur = nums1[p1--]
//     else cur = nums2[p2--]
//     nums1[tail--] = cur
//   }

// }

// /**
//  * @description 冒泡排序
//  * @method 时间复杂度O(n²)
//  * @param {number[]} nums
//  * @returns {number[]} nums
//  */
// const bubbleSort = nums => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j <= nums.length - i; j++) {
//       let tmp
//       if (nums[j] > nums[j + 1]) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
//       }
//     }
//   }
//   return nums
// }

// /**
//  * @description 快速排序
//  * @method 时间复杂度O(n²)
//  * @param {number[]} nums
//  * @returns {number[]} nums
//  */
// const quickSort = nums => {
//   if (nums.length < 2) {
//     return nums
//   } else {
//     var left = [], right = []
//     var middle = nums.splice(Math.floor(nums.length / 2), 1)[0]
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] <= middle) left.push(nums[i])
//       else right.push(nums[i])
//     }
//   }
//   return quickSort(left).concat([middle], quickSort(right))
// }

// /**
//  * @description 原地排序
//  * @method 时间复杂度O(n²)
//  * @param {number[]} arr
//  * @returns {number[]} nums
//  */
// function placekSort(arr, i, j) {
//   if (i < j) {
//     let left = i
//     let right = j
//     let pivot = arr[left] //备份基准值
//     while (i < j) {
//       while (arr[j] >= pivot && i < j) { // 从后往前找比基准小的数
//         j--
//       }
//       if (i < j) {
//         arr[i++] = arr[j]
//       }
//       while (arr[i] <= pivot && i < j) { // 从前往后找比基准大的数
//         i++
//       }
//       if (i < j) {
//         arr[j--] = arr[i]
//       }
//     }
//     arr[i] = pivot
//     placekSort(arr, left, i - 1)
//     placekSort(arr, i + 1, right)
//     return arr
//   }
// }

type map = {
  [key in number]: number
}
/**
 * @link https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/submissions/
 * @method 排序 时间复杂度O(nlogn)
 */
function smallerNumbersThanCurrent(nums: number[]): number[] {
  let res = nums.slice(), map: map = {}
  res.sort((a, b) => a - b)
  for (let i = res.length - 1; i >= 0; i--) {
    map[res[i]] = i
  }
  for (let i = 0; i < nums.length; i++) {
    res[i] = map[nums[i]]
  }
  return res
};

/**
 * @link https://leetcode-cn.com/problems/binary-search/ 
 * @method 二分法 时间复杂度O(logn)，空间复杂度O(1)
 */
function search(nums: number[], target: number): number {
  let l = 0, r = nums.length - 1
  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (nums[m] === target) return m
    else if (nums[m] < target) l = m + 1
    else if (nums[m] > target) r = m - 1
  }
  return -1
};

/**
 * @link https://leetcode-cn.com/problems/remove-element/
 * @method 双指针 时间复杂度O(n)，空间复杂度O(1)
 */
function removeElement(nums: number[], val: number): number {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[index++] = nums[i]
  }
  return index
};

/**
 * @link https://leetcode-cn.com/problems/squares-of-a-sorted-array/
 * @method 双指针 因为本身是有序数组，所以最大必然在左侧或者右侧 时间复杂度O(n)
 */
function sortedSquares(nums: number[]): number[] {
  let res = Array.from({ length: nums.length }).fill(0) as number[], k = nums.length - 1
  for (let i = 0, j = nums.length - 1; i <= j;) {
    if (Math.pow(nums[i], 2) <= Math.pow(nums[j], 2)) {
      res[k--] = Math.pow(nums[j], 2)
      j--
    } else {
      res[k--] = Math.pow(nums[i], 2)
      i++
    }
  }
  return res
};
smallerNumbersThanCurrent([8, 1, 2, 2, 3])
search([-1, 0, 3, 5, 9, 12], 9)

// findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
// generateMatrix(3)
// console.log(placekSort([5, 2, 4, 7, 9, 8, 3, 6, 3, 8, 3], 0, 10))
