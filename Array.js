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

