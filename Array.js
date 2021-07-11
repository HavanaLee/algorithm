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

generateMatrix(3)
