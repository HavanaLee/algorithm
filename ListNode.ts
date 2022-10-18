class ListNode {
  val: number
  next: ListNode | null = null
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
  // 先遍历链表，得出各自的长度
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
  // 计算差值，链表长的向前走


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

/**
 * @link https://leetcode-cn.com/problems/design-linked-list/
 * @method 双链表 维护两个头尾两个链表，添加的时候要判断头尾是否为空，为空就要相应进行赋值，同时size++。删除的时候同样要对头尾重新赋值，size--，这样在计算的时候可以比对下标和size，减少计算复杂度
 */
export class MyLinkedList {
  size: number
  head: ListNode
  tail: ListNode
  constructor() {
    this.size = 0
    this.tail = null
    this.head = null
  }

  getNode(index: number): ListNode {
    if (index < 0 || index >= this.size) return null
    let cur = new ListNode(0)
    cur.next = this.head
    while (index-- >= 0) {
      cur = cur.next
    }
    return cur
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) return -1
    return this.getNode(index).val
  }

  addAtHead(val: number): void {
    let cur = new ListNode(val)
    cur.next = this.head
    this.head = cur
    this.size++
    if (!this.tail) this.tail = cur
  }

  addAtTail(val: number): void {
    let cur = new ListNode(val)
    cur.next = null
    this.size++
    if (this.tail) {
      this.tail.next = cur
      this.tail = cur
    } else {
      this.tail = cur
      this.head = cur
    }
  }

  addAtIndex(index: number, val: number): void {
    if (index <= 0) {
      this.addAtHead(val)
      return
    }
    else if (index > this.size) return null
    else if (index === this.size) {
      this.addAtTail(val)
      return
    }
    let cur = new ListNode(val)
    const prev = this.getNode(index - 1)
    cur.next = prev.next
    prev.next = cur
    this.size++
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return null
    else if (index === 0) {
      let cur = new ListNode(null)
      cur.next = this.head.next
      this.head = cur.next
      this.size--
      return
    }
    let prev = this.getNode(index - 1)
    prev.next = prev.next.next
    if (index === this.size - 1) this.tail = prev
    this.size--
  }
}

/**
 * @link https://leetcode.cn/problems/remove-duplicate-node-lcci/?favorite=xb9lfcwi
 */
function removeDuplicateNodes(head: ListNode | null): ListNode | null {
  if (!head) return head
  let set = new Set()
  set.add(head.val)
  let prev: ListNode | null = head;     // head是存在的，赋给prev
  let cur: ListNode | null = head.next; // head是存在的，它的next赋给cur

  while (cur) {
    if (set.has(cur.val)) { // 如果当前节点是重复的
      if (prev?.next) prev.next = cur.next; // 让prev的next直接指向cur的next，完成删除

      cur = cur.next;       // 更新一下cur
    } else {
      set.add(cur.val);     // 当前节点是第一次出现，存储一下
      if (prev?.next) prev = prev.next;     // prev和cur都更新一下，跳到下一个
      cur = cur.next;
    }
  }
  return head; // 返回删除重复节点后的链表
};

