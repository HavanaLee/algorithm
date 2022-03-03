class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
    this.val = val
    this.left = left
    this.right = right
  }
}
export function levelOrder(root: TreeNode | null): number[][] {
  let res = [], free: TreeNode[] = []
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