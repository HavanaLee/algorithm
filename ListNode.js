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
  return temp.next
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


/**
 * @description 反转链表
 * @type 双指针
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
  let cur = head // 指针指向头节点
  let prev = null // 翻转节点
  let temp // 保存节点下一级
  while (cur) {
    temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  return prev
}

/**
 * @description 两两交换节点
 * @param {ListNode} head
 * @return {ListNode}
 */
const exchangeBetween = head => {
  let dummyNode = new ListNode(0) // 虚拟头结点
  dummyNode.next = head
  let cur = dummyNode
  while (cur.next && cur.next.next) {
    let temp = cur.next, temp1 = cur.next.next
    temp.next = temp1.next // 因为调换了顺序，1号节点指针要指向3号节点
    cur.next = temp1
    cur.next.next = temp
    cur = cur.next.next  //  移动位置，准备下一轮交换
  }
  return dummyNode.next
}


/**
 * @description 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * @param {ListNode} head
 * @type 双指针
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummyNode = new ListNode(0) // 虚拟节点
  dummyNode.next = head
  let slow = dummyNode, fast = dummyNode
  while (n-- && fast != null) {
    fast = fast.next  // 移动n位，剩余的就是倒数第n
  }
  fast = fast.next // 让slow最后指向倒数n - 1，删除第n个
  while (fast != null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummyNode.next
}

/**
 * @description 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 取到当前链表长度
  const getHeadLength = (head) => {
    let len = 0, cur = head
    while (cur) {
      len++
      cur = cur.next
    }
    return len
  }
  let curA = headA, curB = headB
  let lenA = getHeadLength(headA)
  let lenB = getHeadLength(headB)
  // 以a为标准，如果a小于b，调换顺序
  if (lenA < lenB) {
    [lenA, lenB] = [lenB, lenA]
    [curA, curB] = [curB, curA]
  }
  let i = lenA - lenB
  // a的末尾对准b的末尾
  while (i-- > 0) {
    curA = curA.next
  }
  while (curA && curA !== curB) {
    curA = curA.next
    curB = curB.next
  }
  return curA
}

/**
 * @description 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。
 * @type 快慢指针 或者 哈希
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // if (!head || !head.next) return null // 长度小于2直接返回null
  // let slow = head.next, fast = head.next.next
  // while (fast && fast.next && fast !== slow) {
  //   slow = slow.next
  //   fast = fast.next.next
  // }
  // if (!fast || !fast.next) return null
  // slow = head
  // while (fast !== slow) {
  //   slow = slow.next
  //   fast = fast.next
  // }
  // return slow

  let set = new Set()
  while (head && head.next) {
    if (set.has(head)) return head
    set.add(head)
    head = head.next
  }
  return null
}

/**
 * @description 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
 * @summary 时间复杂度O(n)，空间复杂度O(n)
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null
  let copyHead = head
  let map = new Map()
  // 循环遍历，把链表所有值存到map当中
  while (copyHead) {
    map.set(copyHead, new ListNode(copyHead.val))
    copyHead = copyHead.next
  }
  copyHead = head
  // 再次循环遍历，拼接链表的random
  while (copyHead) {
    map.get(copyHead).next = map.get(copyHead.next) === null ? null : map.get(copyHead.next)
    map.get(copyHead).random = map.get(copyHead.random)
    copyHead = copyHead.next
  }
  return map.get(head)
}

/**
 * @link https://leetcode.cn/problems/kth-node-from-end-of-list-lcci/?favorite=xb9lfcwi
 */
function kthToLast (head, k) {
  let dummy = new ListNode(0)
  dummy.next = head
  let slow = dummy, fast = dummy
  while (k--) {
    fast = fast.next
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow.val
};

/**
 * @link https://leetcode.cn/problems/partition-list-lcci/?favorite=xb9lfcwi
 */
var partition = function (head, x) {
  let dummy = new ListNode(0)
  const dummyNode = dummy
  let temp = new ListNode(0)
  const tempHead = temp
  while (head) {
    if (head.val < x) {
      dummy.next = head
      dummy = dummy.next
    } else {
      temp.next = head
      temp = temp.next
    }
    head = head.next
  }
  temp.next = null // 清除大于x的链表引用关系
  dummy.next = tempHead.next // 小于x的链表尾部指向大于x的链表头部
  return dummyNode.next
};

/**
 * link https://leetcode.cn/problems/sum-lists-lcci/?favorite=xb9lfcwi
 */
var addTwoNumbers = function (l1, l2) {
  let str1 = 0, str2 = 0, carry = 0, dummy = new ListNode(0)
  const dummyNode = dummy
  while (l1 || l2) {
    str1 = l1?.val ?? 0
    str2 = l2?.val ?? 0
    let sum = str1 + str2 + carry
    dummy.next = new ListNode(sum % 10)
    carry = sum >= 10 ? 1 : 0
    dummy = dummy.next
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry) dummy.next = new ListNode(1)
  return dummyNode.next
};