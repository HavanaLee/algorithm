
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

/**
 * @description 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * @method 递归 时间复杂度O(n)，空间复杂度O(1)
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true // 都为空相等
  else if (!q || !p) return false
  else if (q.val !== p.val) return false // 值不相等
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

/**
 * @description 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构),B是A的子结构， 即 A中有出现和B相同的结构和节点值。
 * @method 递归 和isSameTree相似，利用递归的方法找到a的子级节点是否和b相等，所以判断条件不同，时间复杂度O(n)
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) return false
  return isSameTree2(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

function isSameTree2 (A, B) {
  if (!B) return true // b为空，是所有的子集
  if (!A) return false // a不能为空
  if (A.val !== B.val) return false
  return isSameTree2(A.left, B.left) && isSameTree2(A.right, B.right)
}

/**
 * @description 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 * @method 递归 时间复杂度O(n)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) return null
  // 递归找到子叶节点
  const left = mirrorTree(root.left)
  const right = mirrorTree(root.right)
  // 从子叶节点开始翻转左右节点
  root.left = right
  root.right = left
  return root
}

/**
 * @description 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
 * @method 递归 时间复杂度O(n) 比较的关键在于清楚镜像的定义，即左节点的左=右节点的右，左节点的右=右节点的左
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true
  return Symmetries(root.left, root.right)
}

function Symmetries (l, r) {
  if (!l && !r) return true
  else if (!l || !r) return false
  else if (l.val !== r.val) return false
  return Symmetries(l.left, r.right) && Symmetries(l.right, r.left)
}

/**
 * @description 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。根节点-左数节点-右树节点
 * @link https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * @method 递归 时间复杂度：O(n) 其中nn是二叉树的节点数。每一个节点恰好被遍历一次。空间复杂度：O(n)，为递归过程中栈的开销，平均情况下为 O(logn)，最坏情况下树呈现链状，为 O(n)。
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = []
  const dep = (root, res) => {
    if (!root) return res
    res.push(root.val)
    preorderTraversal(root.left, res)
    preorderTraversal(root.right, res)
  }
  dep(root, res)
  return res
}

/**
 * @description 给定一个二叉树，返回它的 后序 遍历。 左数节点-右数节点-根节点
 * @link https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * @method 递归 时间复杂度和空间复杂度都为O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = []
  let dep = (root, res) => {
    if (!root) return res
    dep(root.left, res)
    dep(root.right, res)
    res.push(root.val)
  }
  dep(root, res)
  return res
}

/**
 * @description 给定一个二叉树，找出其最大深度。二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。说明: 叶子节点是指没有子节点的节点。
 * @link https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  else {
    let leftHeight = maxDepth(root.left)
    let rightHeight = maxDepth(root.right)
    return Math.max(leftHeight, rightHeight) + 1
  }
}