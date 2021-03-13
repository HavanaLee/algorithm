
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