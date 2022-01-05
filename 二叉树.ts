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