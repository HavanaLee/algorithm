
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// 翻转二叉树
const invertTree = function (root) {
  // 后序遍历
  // if (root === null) return null
  // const left = invertTree(root.left)
  // const right = invertTree(root.right)
  // root.left = right
  // root.right = left
  // return root

  // 前序遍历
  // if (root == null) return null
  // root.left = root.right
  // root.right = root.left
  // invertTree(root.left)
  // invertTree(root.right)
  // return root

  // BFS层序遍历
  if (root === null) return null
  // 先进先出维护队列，出列即做事情，交换左右节点
  const queen = [root]
  while (queen.length) {
    let current = queen.shift()
    [current.left, current.right] = [current.right, current.left]
    if (current.left) queen.push(current.left)
    if (current.right) queen.push(current.right)
  }
  return root
}

/**
 * @description 左叶子之和
 * @param {TreeNode} root
 * @returns {number} 左叶子之和
 */
const sumOfLeftLeaves = function (root) {
  if (root === null) return 0 // 为空返回0
  let sum = 0 // 总和
  let isLeft = false // 左树标识

  const def = (root) => {
    // 子节点为空时，只有是左节点才能累加
    if (root.left === null && root.right === null) {
      if (isLeft) sum += root.val
      return
    }
    // 左节点存在，isLeft为true，传入左节点
    if (root.left) {
      isLeft = true
      def(root.left)
    }
    // 右节点存在，isLeft为false，传入右节点
    if (root.right) {
      isLeft = false
      def(root.right)
    }
  }

  def(root)
  return sum
}

/**
 * @description 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 * @method 队列，先入先出 时间复杂度O(n)，空间复杂度O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
const levelOrder = function (root) {
  if (!root) return []
  const res = [], queen = [root]
  while (queen.length) {
    const node = queen.shift() // 从上往下
    res.push(node.val)
    node.left && queen.push(node.left)
    node.right && queen.push(node.right)
  }
  return res
}

/**
 * @description 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 * @method 时间复杂度O(n)，空间复杂度O(n)
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder2 = function (root) {
  if (!root) return []
  const res = [], queen = [root]
  while (queen.length) {
    const tmp = [] // 保存当前层数据
    for (let i = queen.length; i > 0; i--) { // 倒序循环{循环时的i只会初始化一次，所以可以保存下来queen的长度}，因为要插入左右节点，所以正序循环会死循环
      let node = queen.shift()
      tmp.push(node.val)
      node.left && queen.push(node.left)
      node.right && queen.push(node.right)
    }
    res.push(tmp)
  }
  return res
}

/**
 * @description 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
 * @method 时间复杂度O(n)，空间复杂度O(n)
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const res = [], queen = [root]
  while (queen.length) {
    const tmp = []
    for (let i = queen.length; i > 0; i--) {
      const node = queen.shift()
      res.length % 2 !== 0 ? tmp.unshift(node.val) : tmp.push(node.val) // 根据res的数组长度和2的余数来判断奇数和偶数行
      node.left && queen.push(node.left)
      node.right && queen.push(node.right)
    }
    res.push(tmp)
  }
  return res
}