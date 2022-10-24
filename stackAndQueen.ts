
/**
 * @link https://leetcode.cn/problems/wiggle-sort-ii/
 */
function wiggleSort(nums: number[]): void {
  const [...cp] = nums, n = nums.length
  cp.sort((a, b) => a - b)
  for (let i = Math.floor((n + 1) / 2) - 1, j = n - 1, idx = 0; idx < n; idx++, i--, j--) {
    nums[idx++] = cp[i]
    if (idx < n) {
      nums[idx] = cp[j]
    }
  }
};

/**
 * @link https://leetcode.cn/problems/zero-matrix-lcci/?favorite=xb9lfcwi
 */
function setZeroes(matrix: number[][]): void {
  let m = matrix.length, n = matrix[0].length, colIs0 = false
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) colIs0 = true // 第一列有0，记录下来
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0 // 通过首行和首列来记录矩阵状态
      }
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0
    }
    if (colIs0) matrix[i][0] = 0
  }
};

/**
 * @link https://leetcode.cn/problems/three-in-one-lcci/?favorite=xb9lfcwi
 */
class TripleInOne {
  size: number = 0
  stack: number[][]
  indexs: number[]
  constructor(stackSize: number) {
    this.size = stackSize
    this.stack = Array.from({ length: 3 }, e => new Array(stackSize))
    this.indexs = [0, 1, 2]
  }

  push(stackNum: number, value: number): void {
    if (this.stack[stackNum].length < this.size) this.stack[stackNum].push(value)
  }

  pop(stackNum: number): number {
    if (this.stack[stackNum].length) return this.stack[stackNum].pop()
    return -1
  }

  peek(stackNum: number): number {
    if (this.stack[stackNum].length) return this.stack[stackNum][this.stack[stackNum].length - 1]
    return -1
  }

  isEmpty(stackNum: number): boolean {
    return this.stack[stackNum].length <= 0
  }
}

class MinStack {
  stack: number[]
  min_stack: number[]
  constructor() {
    this.stack = []
    this.min_stack = [Infinity]
  }

  push(x: number): void {
    this.stack.push(x)
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x))
  }

  pop(): void {
    this.stack.pop()
    this.min_stack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.min_stack[this.min_stack.length - 1]
  }
}

/**
 * @link https://leetcode.cn/problems/stack-of-plates-lcci/comments/
 */
class StackOfPlates {
  size: number
  stack: number[][]
  constructor(cap: number) {
    this.size = cap
    this.stack = []
  }

  push(val: number): void {
    if (this.size <= 0) return
    if (!this.stack.length || this.stack[this.stack.length - 1].length === this.size) this.stack.push([val])
    else this.stack[this.stack.length - 1].push(val)
  }

  pop(): number {
    const last = this.stack[this.stack.length - 1]
    if (!last || !last.length) {
      this.stack.pop()
      return -1
    } else {
      const pop = last.pop()
      if (!last.length) this.stack.pop()
      return pop
    }
  }

  popAt(index: number): number {
    const cur = this.stack[index]
    if (cur) {
      const pop = cur.pop()
      if (cur.length === 0) this.stack.splice(index, 1)
      return pop
    } else return -1
  }
}

/**
 * @link https://leetcode.cn/problems/implement-queue-using-stacks-lcci/?favorite=xb9lfcwi
 */
class MyQueue {
  inner: number[]
  outter: number[]
  constructor() {
    this.inner = []
    this.outter = []
  }

  push(x: number): void {
    this.inner.push(x)
  }

  pop(): number {
    const size = this.outter.length
    if (size) return this.outter.pop()
    while (this.inner.length) {
      this.outter.push(this.inner.pop())
    }
    return this.outter.pop()
  }

  peek(): number {
    const pop = this.pop()
    this.outter.push(pop)
    return pop
  }

  empty(): boolean {
    return Boolean(!this.inner.length) && Boolean(!this.outter.length)
  }
}

/**
 * @link https://leetcode.cn/problems/sort-of-stacks-lcci/?favorite=xb9lfcwi
 * @method 惰性更新
 */
class SortedStack {
  stack: number[]
  min_stack: number[]
  constructor() {
    this.stack = []
    this.min_stack = []
  }

  // 临时栈 < val <= 栈
  push(val: number): void {
    if (this.isEmpty()) this.stack.push(val)
    else {
      while (!this.isEmpty() && this.peek() < val) {
        this.min_stack.push(this.stack.pop()) // 小于val的值从stack里取出暂存到临时栈中
      }
      this.stack.push(val)
      while (this.min_stack.length) {
        this.stack.push(this.min_stack.pop()) // 插入val后再把临时栈中清空，push到stack中
      }
    }

  }

  pop(): void {
    this.stack.pop()
  }

  peek(): number {
    return this.isEmpty() ? -1 : this.stack[this.stack.length - 1]
  }

  isEmpty(): boolean {
    return !this.stack.length
  }
}

/**
 * @link https://leetcode.cn/problems/animal-shelter-lcci/?favorite=xb9lfcwi
 */
class AnimalShelf {
  constructor() {

  }

  enqueue(animal: number[]): void {

  }

  dequeueAny(): number[] {

  }

  dequeueDog(): number[] {

  }

  dequeueCat(): number[] {

  }
}