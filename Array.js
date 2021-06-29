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

