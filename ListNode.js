/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const isPalindrome = (head) => {
  let fast = head, slow = head
  // 找到链表的中间节点
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  // fast不为空说明链表为奇数个
  if (fast !== null) slow = slow.next
  slow = reverse(slow)
  fast = head

  while (slow !== null) {
    if (slow.val !== fast.val) return false
    slow = slow.next
    fast = fast.next
  }
  return true

  // 翻转链表
  function reverse (node) {
    // 新建null节点
    let prev = null
    while (node !== null) {
      let next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return prev
  }
}

