/**
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */

const twoSums = (nums, target) => {
  // 利用map结构存放数据
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else map.set(target - nums, i)
  }
}

/**
 * @description 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0, r = height.length - 1
  let ans = 0
  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l)
    ans = Math.max(ans, area)
    height[l] >= height[r] ? --r : ++l
  }
  return ans
}

/**
 * @description 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * @type 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let l = 0, r = nums.length - 1  // 形成一个左右闭区间
  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2) // l+(r-l)/2 避免溢出
    if (target < nums[mid]) r = mid - 1 // 因为nums[mid] != target，所以target必然在mid右侧，即从mid+1开始
    else if (target > nums[mid]) l = mid + 1
    else return mid
  }
  return -1 // 没有找到结果，返回-1
}

/**
 * @description 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * @type 快慢指针
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let slow = 0
  for (let i = 0; i < nums.length; i++) {
    if (val != nums[i]) {
      nums[slow++] = nums[i]
    }
  }
  return slow
}

/**
 * @description 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * @type 双指针
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  let k = nums.length - 1
  let res = new Array(nums.length).fill(0)
  for (let i = 0, j = nums.length - 1; i <= j;) { // 因为数组有序，所以最大值一定在最左或者最右
    if (Math.pow(nums[i], 2) <= Math.pow(nums[j], 2)) {
      res[k--] = Math.pow(nums[j], 2)
      j--
    } else {
      res[k--] = Math.pow(nums[i], 2)
      i++
    }
  }
  return res
}

/**
 * @description 给定一个含有 n 个正整数的数组和一个正整数 target 。找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * @type 滑动窗口
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  let max_length = 0 // 满足条件的数组长度
  let i = 0 // 起始位置
  let sum = 0 // 数组总和
  let result = Number.MAX_VALUE
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j] // 滑动数组的值
    while (sum >= target) {
      max_length = j - i + 1 // 滑动区间长度
      result = Math.min(max_length, result)
      sum -= nums[i++] // 起始位置向前滑动
    }
  }
  return result === Number.MAX_VALUE ? 0 : result
}


/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
  // new Array(n).fill(new Array(n))
  // 使用fill --> 填充的是同一个数组地址
  const res = Array.from({ length: n }).map(() => new Array(n))
  let loop = n >> 1, i = 0, //循环次数
    count = 1,
    startX = startY = 0 // 起始位置 
  while (++i <= loop) {
    // 定义行列
    let row = startX, column = startY
    // [ startY, n - i)
    while (column < n - i) {
      res[row][column++] = count++
    }
    // [ startX, n - i)
    while (row < n - i) {
      res[row++][column] = count++
    }
    // [n - i ,  startY)
    while (column > startY) {
      res[row][column--] = count++
    }
    // [n - i ,  startX)
    while (row > startX) {
      res[row--][column] = count++
    }
    startX = ++startY
  }
  if (n & 1) {
    res[startX][startY] = count
  }
  return res
}

/**
 * @description 找出数组中重复的数字。在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 * @method 原地交换 空间复杂度O(1)，时间复杂度O(n²)
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let cur
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] != i) {
      cur = nums[i]
      if (nums[i] == nums[cur]) {
        return nums[i]
      } else {
        nums[i] = nums[cur]
        nums[cur] = cur
      }
    }
  }
}

/**
 * @description 统计一个数字在排序数组中出现的次数。
 * @method 双指针 时间复杂度O(n)，空间复杂度O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1
  while (nums[l] < target) l++
  while (nums[r] > target) r--
  return r - l > 0 ? r - l + 1 : 0
}

/**
 * @description 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 * @method 二分法{有序数组搜索就用二分法} 时间复杂度O(logN)，空间复杂度O(1)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let l = 0, r = nums.length, mid
  while (l <= r) {
    mid = Math.floor((l + r) / 2)
    nums[mid] === mid ? l = mid + 1 : r = mid - 1
  }
  return l
}

/**
 * @description 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * @method 二分法{相当于从二维数组的右上角开始找} 时间复杂度O(n+m)，循环体最多执行m+n次,空间复杂度O(1)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length || !matrix[0]['length']) return false
  let rows = matrix.length, colmuns = matrix[0].length // 取到行数和列数
  let row = 0, colmun = colmuns - 1
  while (row < rows && colmun >= 0) {
    if (matrix[row][colmun] === target) return true // 相等，返回true
    else if (matrix[row][colmun] > target) colmun-- // 大于目标数，说明只有这一列往前的数才有可能等于目标
    else if (matrix[row][colmun] < target) row++ // 小于目标数，只有这一行下面的数才可能等于目标
  }
  return false
}

/**
 * @description 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。
 * @method 二分法 时间复杂度O(n)，空间复杂度O(1)
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let l = 0, r = numbers.length - 1, mid
  while (l < r) {
    mid = l + Math.floor((r - l) / 2) // 先减后加，避免栈溢出
    if (numbers[mid] < numbers[r]) r = mid // 中间数大于数组最左端，所以中位数右侧属于反常数组，最小值一定在[0,mid]之中，所以不能把mid排除
    else if (numbers[mid] > numbers[r]) l = mid + 1
    else r--
  }
  return numbers[l]
}

/**
 * @description 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 * @method 哈希遍历 时间复杂度O(n)，最多循环s的长度即n次，空间复杂度O(∣Σ∣)
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (!s) return ' '
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return s[i]
  }
  return ' '
}

findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
generateMatrix(3)
