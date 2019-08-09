function Animal(name) {
  this.name = name
  this.sleep = function() {
    console.log(this.name + '睡着了')
  }
}
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃' + food)
}
// --------------原型链的继承
// function Cat() {}
//   Cat.prototype = new Animal()
//   Cat.prototype.name = 'cat'
//   let cat = new Cat()
//   console.log(cat.name)   // cat
//   console.log(cat.eat('fish'))
//   console.log(cat.sleep())
//   console.log(cat instanceof Animal)
//   console.log(cat instanceof Cat)


// ---------------构造函数的继承
// function Cat(name) {
//   Animal.call(this)
//   this.name = name || 'Tom'
// }
// var cat = new Cat()
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat instanceof Cat)   // true
// console.log(cat instanceof Animal)    // false
// console.log(cat.__proto__ === Cat.prototype)
// console.log(cat.__proto__ === Animal.prototype)


// -----------------组合继承
// function Cat(name) {
//   Animal.call(this)
//   this.name = name || 'Tom'
// }
// Cat.prototype = new Animal()
// var cat = new Cat()
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat instanceof Cat)
// console.log(cat instanceof Animal)


// ----------------- 寄生组合继承
function Cat(name) {
  Animal.call(this)
  this.name = name || 'Tom'
}
(function () {
  // 创建一个没有实例方法的类 
  var Super = function() {}
  Super.prototype = Animal.prototype
  Cat.prototype = new Super()
})()
var cat = new Cat()
console.log(cat.name)
console.log(cat.sleep())
console.log(cat instanceof Cat)
console.log(cat instanceof Animal)
