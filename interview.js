/**
 * @description 函数防抖
 */

/**
 * @description 实现instance of
 */
const isInstance = (l, r) => {
  if (typeof l !== 'object' || l === null) return false // instance不能判断null 和 原始数据类型
  let rPrototype = r.prototype // instance of通过原型链来比较是否相等
  l = l._proto_ // 左侧的数寻找上一级的原型
  while (true) {
    if (l === null) return false // 原型指向null返回false
    if (l === rPrototype) return true // 左侧_proto_上存在r的prototype
    l = l._proto_
  }
}

/**
 * @description bind方法
 */
Function.prototype.bind1 = function () {
  // 将参数抓换为数组
  const args = Array.prototype.slice.call(arguments)
  // 把改变的第一项this提取出来
  const t = args.shift()
  // 获取当前this
  const self = this
  // 返回一个当前函数的拷贝
  return function () {
    return self.apply(t, args)
  }
}

var n = 10
function fn () {
  var n = 20
  function f () {
    n++
    console.log(n)
  }
  return f
}
var x = fn()
x()
x()

// debounce
function debounce (fn, delay = 500) {
  // timer 写在闭包中，因此防抖也是闭包的一个应用
  let timer = null
  console.log(this)
  function f () {
    console.log(this, arguments)
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {

      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
  return f
}

let myObj = { value: 3 }
myObj.a = function (fn) {
  console.log('adssad')
  function f () {
    console.log(this)
    fn.apply(this, arguments)
  }
  return f
}
// myObj.a(() => { console.log('aaa', this.value) })

let b = {
  hl: 1,
  value: 2,
  c: myObj.a(function () { console.log('aaa', this.value) }),
  d: function () { console.log(this.value) }
}
b.d.bind(myObj)()


// 验证
// document.getElementById('input').addEventListener('input', debounce(function (e) {
//   console.log(e.target.value)
// }), 600)

