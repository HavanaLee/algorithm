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
// fn()()
// fn()()