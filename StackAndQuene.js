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


