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

/**
 * @link https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @method 迭代 时间复杂度O(n)，空间复杂度O(1)
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0)
  dummy.next = head
  let temp = dummy
  while (temp.next && temp.next.next) {
    let temp1 = temp.next, temp2 = temp.next.next
    temp1.next = temp2.next
    temp.next = temp2
    temp.next.next = temp1
    temp = temp.next.next
  }
  return dummy.next
};

/**
 * @link https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @method 快慢指针 时间复杂度O(n)，空间复杂度O(1)
 */
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy_node = new ListNode(0)
  dummy_node.next = head
  let slow = dummy_node, fast = dummy_node
  while (n-- && fast) {
    fast = fast.next
  }
  fast = fast.next // 让slow能走到要删除的节点前面，没有这一步会走到删除的节点上面
  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return dummy_node.next
};

/**
 * @link https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/
 * @method 迭代 时间复杂度O(m + n)链表1和2的长度，空间复杂度O(1)
 */
export function getIntersectionNode(head1: ListNode | null, head2: ListNode | null): ListNode | null {
  let dummy1 = head1, dummy2 = head2
  let lenA = 0, lenB = 0
  while (dummy1) {
    lenA++
    dummy1 = dummy1.next
  }
  while (dummy2) {
    lenB++
    dummy2 = dummy2.next
  }
  dummy1 = head1
  dummy2 = head2
  let gap = Math.abs(lenA - lenB)
  if (lenA > lenB) {
    while (gap--) {
      dummy1 = dummy1.next
    }
  } else {
    while (gap--) {
      dummy2 = dummy2.next
    }
  }
  while (dummy1) {
    if (dummy1 === dummy2) return dummy1
    dummy1 = dummy1.next
    dummy2 = dummy2.next
  }
  return null
}
