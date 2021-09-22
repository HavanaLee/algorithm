/**
 * Initialize your data structure here.
 */
class MyQueue {
  constructor() {
    this.inner = []
    this.outter = []
  }
  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push (x) {
    this.inner.push(x)
  }
  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop () {
    const size = this.outter.length
    if (size) return this.outter.pop()
    while (this.inner.length) {
      this.outter.push(this.inner.pop())
    }
    return this.outter.pop()
  }
  /**
   * Get the front element.
   * @return {number}
   */
  peek () {
    let x = this.pop()
    this.outter.push(x)
    return x
  }
  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty () {
    return !this.inner.length && !this.outter.length
  }
}

/**
 * Initialize your data structure here.
 */
class MyStack {
  constructor() {
    this.stack = []
  }
  /**
   * Push element x onto stack.
   * @param {number} x
   * @return {void}
   */
  push (x) {
    this.stack[this.stack.length] = x
  }
  /**
   * Removes the element on top of the stack and returns that element.
   * @return {number}
   */
  pop () {
    if (this.empty()) return undefined
    const x = this.stack[this.stack.length - 1]
    this.stack.length = this.stack.length - 1
    return x
  }
  /**
   * Get the top element.
   * @return {number}
   */
  top () {
    if (this.empty()) return undefined
    return this.stack[this.stack.length - 1]
  }
  /**
   * Returns whether the stack is empty.
   * @return {boolean}
   */
  empty () {
    return !this.stack.length
  }
}

/**
 * @name 20. 有效的括号
 * @description 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。有效字符串需满足：左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false
  let outter = []
  for (let i = 0; i < s.length; i++) {
    let x
    if (s[i] === '(') outter.unshift(')')
    else if (s[i] === '{') outter.unshift('}')
    else if (s[i] === '[') outter.unshift(']')
    else if (s[i] === ']') {
      x = outter.shift()
      if (x !== ']') return false
    }
    else if (s[i] === '}') {
      x = outter.shift()
      if (x !== '}') return false
    }
    else if (s[i] === ')') {
      x = outter.shift()
      if (x !== ')') return false
    }
  }
  return outter.length ? false : true
}

/**
 * @name 1047. 删除字符串中的所有相邻重复项
 * @description 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。在 S 上反复执行重复项删除操作，直到无法继续删除。在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = []
  for (const x of s) {
    let c = null
    if (stack.length && x === (c = stack.pop())) continue
    c && stack.push(c)
    stack.push(x)
  }
  return stack.join('')
}

/**
 * @name 150. 逆波兰表达式求值
 * @description 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。说明：整数除法只保留整数部分。给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [] // 模拟队列，先进先出
  for (let i = 0; i < tokens.length; i++) {
    if (['+', '-', '*', '/'].includes(tokens[i])) {
      let p1 = stack.pop()
      let p2 = stack.pop()
      if (tokens[i] === '+') stack.push(p1 * 1 + p2 * 1)
      else if (tokens[i] === '-') stack.push(p2 - p1)
      else if (tokens[i] === '*') stack.push(p1 * p2)
      else if (tokens[i] === '/') stack.push((p2 / p1) | 0)
      continue
    } else stack.push(tokens[i])
  }
  return stack.pop()
}

/**
 * @description 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map()

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  // 创建小顶堆
  const priorityQueue = new PriorityQueue((a, b) => a[1] - b[1])

  // entry 是一个长度为2的数组，0位置存储key，1位置存储value
  for (const entry of map.entries()) {
    priorityQueue.push(entry)
    if (priorityQueue.size() > k) {
      priorityQueue.pop()
    }
  }

  const ret = []

  for (let i = priorityQueue.size() - 1; i >= 0; i--) {
    ret[i] = priorityQueue.pop()[0]
  }

  return ret
}


function PriorityQueue (compareFn) {
  this.compareFn = compareFn
  this.queue = []
}

// 添加
PriorityQueue.prototype.push = function (item) {
  this.queue.push(item)
  let index = this.queue.length - 1
  let parent = Math.floor((index - 1) / 2)
  // 上浮
  while (parent >= 0 && this.compare(parent, index) > 0) {
    // 交换
    [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]]
    index = parent
    parent = Math.floor((index - 1) / 2)
  }
}

// 获取堆顶元素并移除
PriorityQueue.prototype.pop = function () {
  const ret = this.queue[0]

  // 把最后一个节点移到堆顶
  this.queue[0] = this.queue.pop()

  let index = 0
  // 左子节点下标，left + 1 就是右子节点下标
  let left = 1
  let selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left

  // 下沉
  while (selectedChild !== undefined && this.compare(index, selectedChild) > 0) {
    // 交换
    [this.queue[index], this.queue[selectedChild]] = [this.queue[selectedChild], this.queue[index]]
    index = selectedChild
    left = 2 * index + 1
    selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left
  }

  return ret
}

PriorityQueue.prototype.size = function () {
  return this.queue.length
}

// 使用传入的 compareFn 比较两个位置的元素
PriorityQueue.prototype.compare = function (index1, index2) {
  if (this.queue[index1] === undefined) {
    return 1
  }
  if (this.queue[index2] === undefined) {
    return -1
  }

  return this.compareFn(this.queue[index1], this.queue[index2])
}


topKFrequent([1, 1, 1, 2, 2, 3], 2)