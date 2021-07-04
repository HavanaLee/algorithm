const p1 = () => {
  return new Promise((resolve, reject) => {
    resolve(1)
  })
}
const p2 = () => {
  return new Promise((resolve, reject) => {
    resolve(2)
  })
}
const p3 = () => {
  return new Promise((resolve, reject) => {
    resolve(3)
  })
}
const p4 = () => {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}


const promiseAll = promiseArr => {
  // promise.all可以传入非promise对象，为了返回promise所以return promise
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) return reject('promiseArr必须是数组') // 传入参数必须为数组
    let result = new Array(promiseArr.length), iterorCount = 0
    // 使用for循环为了保证resolve的顺序和传入的顺序一致
    for (let i = 0; i < promiseArr.length; i++) {
      Promise.resolve(promiseArr[i]).then(r => {  // 非promise转为promise
        iterorCount++
        result[i] = r
        if (iterorCount === promiseArr.length) return resolve(result)
      }).catch(err => reject(err))
    }
  })
}

promiseAll([p1(), p2(), p3()]).then(res => { console.log(res) })