/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

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

/**
 * @description 给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储 一位数字。请你将两个数相加，并以相同形式返回一个表示和的链表。你可以假设除了数字0之外，这两个数都不会以0开头。
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNum = (l1, l2) => {
  let head = null, tail = null, carry = 0
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0, n2 = l2 ? l2.val : 0, sum = n1 + n2 + carry
    if (!head) head = tail = new ListNode(sum % 10)
    else {
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    }
    carry = Math.floor(sum / 10) // 记录进位
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  carry && (tail.next = new ListNode(carry)) // 最后的进位
  return head
}

