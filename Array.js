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

