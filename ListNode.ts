class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * @link https://leetcode-cn.com/problems/remove-linked-list-elements/
 * @method 迭代 时间复杂度o(n)链表长度
 */
export function removeElements(head: ListNode | null, val: number): ListNode | null {
  let dummy = new ListNode(0)
  dummy.next = head
  let temp = dummy  // 记录虚拟节点
  while (dummy.next) {
    if (dummy.next.val === val) dummy.next = dummy.next.next
    else dummy = dummy.next
  }
  return temp.next
};


/**
 * @link https://leetcode-cn.com/problems/reverse-linked-list/
 * @method 迭代链表 时间复杂度O(n)链表长度，空间复杂度O(1)
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let cur = head, pre: ListNode = null, temp: ListNode
  while (cur) {
    temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
};
