
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