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

/**
 * @description 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  let dummyNode = new ListNode(0)
  dummyNode.next = head
  let temp = dummyNode
  while (dummyNode.next != null) {
    if (dummyNode.next.val === val) dummyNode.next = dummyNode.next.next
    else dummyNode = dummyNode.next
  }
  return dummyNode.next
}

class MyLinkedList {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }
  /**
   * @description 根据下标取到对应节点
   * @param {Number} index 下标
   */
  getNode (index) {
    if (index < 0 || index >= this.size) return null
    let cur = new ListNode(0)
    cur.next = this.head
    while (index-- >= 0) cur = cur.next
    return cur
  }
  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
   * @param {number} index
   * @return {number}
   */
  get (index) {
    if (index < 0 || index >= this.size) return -1
    return this.getNode(index).val
  }
  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
   * @param {number} val
   * @return {void}
   */
  addHead (val) {
    let cur = new ListNode(val)
    cur.next = this.head  // 当前节点next指向head
    this.head = cur
    this.size++
    if (!this.tail) this.tail = cur
  }
  /**
   * Append a node of value val to the last element of the linked list. 
   * @param {number} val
   * @return {void}
   */
  addTail (val) {
    let cur = new ListNode(val)
    cur.next = null
    if (this.tail) {
      this.tail.next = cur
      this.tail = cur
    } else {
      this.tail = cur
      this.head = cur
    }
    this.size++
  }
  /**
   * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
   * @param {number} index 
   * @param {number} val
   * @return {void}
   */
  addAtIndex (index, val) {
    if (index > this.size) return null
    else if (index <= 0) this.addHead(val)
    else if (index === this.size) this.addTail(val)
    let cur = this.getNode(index - 1) // 取到下标对应的前一个节点
    cur.next.next = cur.next  // 中间插入一个节点
    cur.next = new ListNode(val)
    this.size++
  }
  /**
   * Delete the index-th node in the linked list, if the index is valid. 
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex (index, val) {
    if (index < 0 || index >= this.size) return
    else if (index === 0) {
      this.head = this.head.next
      this.size--
      return
    }
    let cur = this.getNode(index - 1)
    cur.next = cur.next.next
    if (index === this.size - 1) this.tail = cur // 如果下标=size-1，即删除尾节点
    this.size--
  }
}

// /**
//  * Your MyLinkedList object will be instantiated and called as such:
//  * var obj = new MyLinkedList()
//  * var param_1 = obj.get(index)
//  * obj.addAtHead(val)
//  * obj.addAtTail(val)
//  * obj.addAtIndex(index,val)
//  * obj.deleteAtIndex(index)
//  */