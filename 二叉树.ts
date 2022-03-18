class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = (val === undefined ? 0 : val)
    this.children = []
  }
}
export function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [], free: TreeNode[] = []
  if (!root) return res
  free.push(root)
  while (free.length) {
    const len = free.length, layer = []
    for (let i = len; i > 0; i--) {
      const node: TreeNode = free.shift()
      layer.push(node.val)
      node.left && free.push(node.left)
      node.right && free.push(node.right)

    }
    res.push(layer)
  }
  return res
};

/**
 * @link https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 */
function levelOrderBottom(root: TreeNode | null): number[][] {
  let res: number[][] = [], free = [root]
  if (!root) return res
  while (free.length) {
    let layer = [], len = free.length
    for (let i = len; i > 0; i--) {
      const node = free.shift()
      layer.push(node.val)
      node.left && free.push(node.left)
      node.right && free.push(node.right)
    }
    res.unshift(layer)
  }
  return res
};

/**
 * @link https://leetcode-cn.com/problems/binary-tree-right-side-view/
 */
function rightSideView(root: TreeNode | null): number[] {
  let res: number[] = [], free = [root]
  if (!root) return res
  while (free.length) {
    let len = free.length
    while (len--) {
      const node = free.shift()
      !len && res.push(node.val)
      node.left && free.push(node.left)
      node.right && free.push(node.right)
    }
  }
  return res
};

/**
 * @link https://leetcode-cn.com/problems/symmetric-tree/
 */
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  function symmetries(left: TreeNode, right: TreeNode) {
    if ((!left && right) || (!right && left)) return false
    if (!left && !right) return true
    if (left.val !== right.val) return false
    let out = symmetries(left.left, right.right)
    let inner = symmetries(left.right, right.left)
    return out && inner
  }
  return symmetries(root.left, root.right)
};

/**
 * @link https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */
function maxDepth(root: TreeNode | null): number {
  function getDept(root: TreeNode) {
    if (!root) return 0
    const left_len = getDept(root.left)
    const right_len = getDept(root.right)
    return 1 + Math.max(left_len, right_len)
  }
  return getDept(root)
};


/**
 * @link https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 */
function minDepth(root: TreeNode | null): number {
  function getDept(root: TreeNode) {
    if (!root) return 0
    const left_len = getDept(root.left)
    const right_len = getDept(root.right)
    return 1 + Math.min(left_len, right_len)
  }
  return getDept(root)

};

/**
 * @link https://leetcode-cn.com/problems/count-complete-tree-nodes/
 */
function countNodes(root: TreeNode | null): number {
  const getNum = (root: TreeNode): number => {
    if (!root) return 0
    const left_len = getNum(root.left)
    const right_len = getNum(root.right)
    const sum = left_len + right_len + 1  // 加上自身节点
    return sum
  }
  return getNum(root)
};

/**
 * @link https://leetcode-cn.com/problems/balanced-binary-tree/
 */
function isBalanced(root: TreeNode | null): boolean {
  const getHeight = (root: TreeNode | null): number => {
    if (!root) return 0
    const left_len = getHeight(root.left)
    if (left_len === -1) return -1
    const right_len = getHeight(root.right)
    if (right_len === -1) return -1
    return Math.abs(left_len - right_len) > 1 ? -1 : 1 + Math.max(left_len, right_len)
  }
  return getHeight(root) === -1 ? false : true
};

/**
 * @link https://leetcode-cn.com/problems/binary-tree-paths/
 */
function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = []
  const getPath = (root: TreeNode, path: string): void => {
    if (!root.left && !root.right) {
      path += root.val
      res.push(path)
      return
    }
    path += root.val + '->'
    root.left && getPath(root.left, path)
    root.right && getPath(root.right, path)
  }
  getPath(root, '')
  return res
};

/**
 * @link https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 */
function preorder(root: Node | null): number[] {
  // 递归法
  let res: number[] = []
  const getNode = (root: Node, res: number[]) => {
    if (!root) return
    res.push(root.val)
    for (const item of root.children) {
      getNode(item, res)
    }
  }
  getNode(root, res)
  return res
};

/**
 * @link https://leetcode-cn.com/problems/sum-of-left-leaves/
 */
function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0
  let left_val = sumOfLeftLeaves(root.left)
  let right_val = sumOfLeftLeaves(root.right)
  let mid_val = 0
  if (root.left && !root.left.left && !root.left.right) {
    mid_val = root.left.val
  }
  return mid_val + left_val + right_val
};

/**
 * @link https://leetcode-cn.com/problems/find-bottom-left-tree-value/
 */
function findBottomLeftValue(root: TreeNode | null): number {
  let free: TreeNode[] = []
  free.push(root)
  while (free.length) {
    const len = free.length, layer = []
    let isBottom = true
    for (let i = len; i > 0; i--) {
      const node: TreeNode = free.shift()
      layer.push(node.val)
      node.left && free.push(node.left) && (isBottom = false)
      node.right && free.push(node.right) && (isBottom = false)
    }
    if (isBottom) return layer[0]
  }
};

/**
 * @link https://leetcode-cn.com/problems/path-sum/
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false
  let res = []
  const getPathSum = (root: TreeNode | null, pathSum: number) => {
    if (!root) return 0
    pathSum += root.val
    root.left && getPathSum(root.left, pathSum)
    root.right && getPathSum(root.right, pathSum)
    !root.left && !root.right && res.push(pathSum)
  }
  return res.includes(targetSum)
};

/**
 * @link https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 */
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!postorder.length) return null
  const root = postorder.pop()  // 后序遍历（左右中），所以最后一个就是构造二叉树的中间节点
  const rootIdx = inorder.indexOf(root) // 前序遍历（左中右），找到中间节点在前序遍历里面的下标
  let tree = new TreeNode(root)
  tree.left = buildTree(inorder.slice(0, rootIdx), postorder.slice(0, rootIdx))
  tree.right = buildTree(inorder.slice(rootIdx + 1), postorder.slice(rootIdx))
  return tree
};