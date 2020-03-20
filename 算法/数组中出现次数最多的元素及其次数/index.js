// JS面试：找出数组中出现次数最多的元素及其次数

function getMost(arr) {
  // 数组为空时
  if (arr.length === 0) {
    return 0
  }
  let map = new Map()
  var value = 1, key = arr[0] // 定义次数value为1，键值为数组第一项
  arr.forEach((item, index) => { // 遍历数组
    if (map.get(item) === undefined) { // 未出现的元素，没有定义，则value为undefined
      map.set(item, 1)
    } else {
      // 否则，已定义过则说明前面已经出现过此元素，则将次数+1
      let num = map.get(item)
      map.set(item, ++num)
    }
    // 将最大值的键值取出
    if (map.get(item) > value) {
      value = map .get(item)
      key = item
    }
  })
  return [key, value]
}

let strArr = []
// let strArr = ['utf', 'abc', 'cca', 'abc', 'gbk', 'ios', 'abc', 'gbk', 'hzz']
console.log(getMost(strArr)) // [ 'abc', 3 ]