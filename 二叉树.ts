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
      node.left && free.push()
    }
    let node = free.shift()
    res.push(node.val)
    node.left && free.push(node.left)
    node.right && free.push(node.right)
  }
  return res
};