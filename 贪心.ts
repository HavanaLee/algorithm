// /**
//  * @description 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
//  * @link https://leetcode-cn.com/problems/assign-cookies/
//  * @method 贪心
//  * @param {number[]} g
//  * @param {number[]} s
//  * @return {number}
//  */
// var findContentChildren = function (g, s) {
//   g.sort((a, b) => a - b)
//   s.sort((a, b) => a - b)
//   let res = 0, index = s.length - 1
//   for (let i = g.length; i >= 0; i--) {
//     if (index < 0) break
//     if (s[index] >= g[i]) {
//       res++
//       index--
//     }
//   }
//   return res
// }

// /**
//  * @link https://leetcode-cn.com/problems/wiggle-subsequence/
//  * @method 贪心
//  * @param {number[]} nums
//  * @return {number}
//  */
// var wiggleMaxLength = function (nums) {
//   let res = 1 // 因为一个元素和两个不同元素也算摆动序列
//   let preDiff = 0, curDiff = 0 // 记录当前和前序差值
//   for (let i = 0; i < nums.length; i++) {
//     curDiff = nums[i + 1] - nums[i]
//     if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) { // curDiff != 0，否则不满足摆动序列
//       res++
//       preDiff = curDiff
//     }
//   }
//   return res
// }

// /**
//  * @link https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   let dp: number[] = [], res = 0
//   for (let i = 1; i < prices.length; i++) {
//     dp.push(prices[i] - prices[i - 1])
//   }
//   for (const iterator in dp) {
//     Number(iterator) > 0 && (res += +iterator)
//   }
//   return res
// }

// /**
//  * @link https://leetcode-cn.com/problems/jump-game/
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function (nums) {
//   let cover = 0 // 能覆盖到的格子数
//   for (let index = 0; index <= cover; index++) {
//     cover = Math.max(index + nums[index], cover)
//     if (cover >= nums.length - 1) return true
//   }
//   return false
// }

// /**
//  * @link https://leetcode-cn.com/problems/jump-game-ii/
//  * @param {number[]} nums
//  * @return {number}
//  */
// var jump = function (nums) {
//   let ans = 0 // 走的步数
//   let curCover = 0 // 当前覆盖最大距离
//   let nextCover = 0 // 下一步最大距离
//   for (let index = 0; index < nums.length; index++) {
//     nextCover = Math.max(nums[index] + index, nextCover)
//     if (index === curCover) {
//       if (curCover < nums.length - 1) { // 如果当前覆盖步数 < 最后一位下标，说明还要走一步
//         ans++
//         curCover = nextCover  // 当前覆盖距离更新
//         if (nextCover >= nums.length - 1) break
//       } else break
//     }
//   }
//   return ans
// }

// /**
//  * @link https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var largestSumAfterKNegations = function (nums, k) {
//   nums.sort((a, b) => a - b)
//   let start = 0
//   while (start < k) {
//     if (nums[start] < 0) nums[start] = -nums[start]
//     else if ((k - start) % 2 === 0) break
//     else {
//       nums.sort((a, b) => a - b)
//       nums[0] = -nums[0]
//     }
//     start++
//   }
//   return nums.reduce((pre, cur) => pre + cur, 0)
// }

// /**
//  * @link https://leetcode-cn.com/problems/gas-station/
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  */
// var canCompleteCircuit = function (gas, cost) {
//   let total_sum = 0, cur_sum = 0, start = 0
//   for (let i = 0; i < cost.length; i++) {
//     total_sum += gas[i] - cost[i]
//     cur_sum += gas[i] - cost[i]
//     if (cur_sum < 0) {
//       cur_sum = 0
//       start = i + 1 // 当前总和小于0，说明一定出现在当前下标的后方
//     }
//   }
//   if (total_sum < 0) return -1
//   return start
// }

// /**
//  * @link https://leetcode-cn.com/problems/candy/
//  * @param {number[]} ratings
//  * @return {number}
//  */
// var candy = function (ratings) {
//   let candys = Array.from({ length: ratings.length }, v => 1)
//   for (let i = 1; i < ratings.length; i++) {
//     if (ratings[i] > ratings[i - 1]) candys[i] = candys[i - 1] + 1
//   } // 从前往后遍历，先确定右侧的糖果数量
//   for (let i = ratings.length - 2; i >= 0; i--) {
//     if (ratings[i] > ratings[i + 1]) candys[i] = Math.max(candys[i], candys[i + 1] + 1)
//   }
//   let res = candys.reduce((pre, cur) => pre + cur, 0)
//   return res
// }

// /**
//  * @link https://leetcode-cn.com/problems/lemonade-change/
//  * @param {number[]} bills
//  * @return {boolean}
//  */
// function lemonadeChange(bills: number[]): boolean {
//   let map = new Map<number, number>()
//   for (let i = 0; i < bills.length; i++) {
//     switch (bills[i] - 5) {
//       case 0:
//         map.set(5, map.get(5) ? map.get(5) + 1 : 1)
//         break;
//       case 5:
//         if (map.get(5)) {
//           map.set(5, map.get(5) - 1)
//           map.set(10, map.get(10) ? map.get(10) + 1 : 1)
//           break
//         }
//         else return false
//       case 15:
//         if (map.get(5) >= 1 && map.get(10) >= 1) {
//           map.set(5, map.get(5) - 1)
//           map.set(10, map.get(10) - 1)
//           break
//         } else if (map.get(5) >= 3) {
//           map.set(5, map.get(5) - 3)
//           break
//         } else return false
//     }
//   }
//   return true
// };

/**
 * @link https://leetcode-cn.com/problems/queue-reconstruction-by-height/
 * @method 贪心 时间复杂度O(n²)
 */
function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]) // 先按身高排序，从大到小，k小的在前面
  for (let i = 1; i < people.length; i++) {
    if (people[i][1] === 0) {
      people.unshift(people.splice(i, 1)[0])
      continue
    } else if (people[i][1] === i) {
      continue
    } else {
      let index = people[i][1]
      people.splice(index, 0, people.splice(i, 1)[0])
      continue
    }
  }
  return people
};

/**
 * @link https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/
 * @method 贪心 
 */
function findMinArrowShots(points: number[][]): number {
  if (!points.length) return 0
  let count = 1
  points.sort((a: number[], b: number[]): number => a[0] - b[0])
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > points[i - 1][1]) {
      count++
    } else {
      points[i][1] = Math.min(points[i][1], points[i - 1][1])
    }
  }
  return count
};

/**
 * @link https://leetcode-cn.com/problems/non-overlapping-intervals/
 * @method 贪心 时间复杂度O(nlogn) 从左往右排序就要从右往左遍历，不重复的数+1
 */
function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0])
  let count = 1
  for (let i = intervals.length - 2; i >= 0; i--) {
    if (intervals[i][1] <= intervals[i + 1][0]) count++
    else[intervals[i], intervals[i + 1]] = [intervals[i + 1], intervals[i]]
  }
  return intervals.length - count
};

type str = {
  [name in string]: number
}
/**
 * @link https://leetcode-cn.com/problems/partition-labels/
 * @method 贪心 时间复杂度O(nlogn) sort排序复杂度为o(nlogn)
 */
function partitionLabels(s: string): number[] {
  let res = [] as number[], strObj: str = {}, maxLen = 0, start = 0
  for (let i = 0; i < s.length; i++) {
    strObj[s[i]] = i
  }
  for (let i = 0; i < s.length; i++) {
    maxLen = Math.max(maxLen, strObj[s[i]])
    if (maxLen === i) {
      res.push(maxLen - start + 1)
      start = maxLen + 1
    }
  }
  return res
};

/**
 * @link https://leetcode-cn.com/problems/merge-intervals/
 * @method 贪心 时间复杂度o(nlogn)
 */
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  let res = [] as number[][], min = intervals[0][0], max = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= max) {
      max = Math.max(max, intervals[i][1])
    } else {
      res.push([min, max])
      min = intervals[i][0]
      max = intervals[i][1]
    }
  }
  res.push([min, max])
  return res
};

/**
 * @link https://leetcode-cn.com/problems/monotone-increasing-digits/
 */
function monotoneIncreasingDigits(n: number): number {
  let s = n.toString().split('')
  let floor = false
  for (let i = s.length - 1; i >= 1; i--) {
    if (floor) {
      if (s[i]) {
        s[i] = +s[i] - 1 + ''
        floor = false
      }
      else {
        s[i] = '9'
        s.fill('9', i + 1)
        floor = true
      }
    }
    if (s[i] < s[i - 1]) {
      s[i] = '9'
      s.fill('9', i + 1)
      floor = true
    } else floor = false
  }
  floor && (s[0] = +s[0] - 1 + '')
  return Number(s.join(''))
};

/**
 * @link https://leetcode.cn/problems/largest-merge-of-two-strings/
 */
function largestMerge(word1: string, word2: string): string {
  let l = 0, r = 0, merge = ''
  while (l < word1.length || r < word2.length) {
    // 字符串比较会默认转换为chartCode码来比较
    if (l < word1.length && word1.slice(l) > word2.slice(r)) {
      merge += word1[l]
      l++
    } else {
      merge += word2[r]
      r++
    }

  }
  return merge
};

/**
 * @link https://leetcode.cn/problems/minimum-length-of-string-after-deleting-similar-ends/
 * @method 双指针
 */
function minimumLength(s: string): number {
  let l = 0, r = s.length - 1
  while (l < r) {
    let start = s[l], end = s[r]
    if (start !== end) break
    while (s[l] === start) {
      l++
    }
    while (s[r] === end) {
      r--
    }
  }
  return (r - l) < 0 ? 0 : r - l + 1
};

partitionLabels("ababcbacadefegdehijhklij")
// findMinArrowShots([[-1, 1], [0, 1], [2, 3], [1, 2]])
eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]);

// largestSumAfterKNegations([4, 2, 3], 1)



