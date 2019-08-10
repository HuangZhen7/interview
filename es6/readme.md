对es6的理解

es6 是相对于 es5 ECMAScript 的第六次修订
ES2015 随着babel webpack 构建工具的成熟，es6已成为js编程的事实标准
我认为 es6 比 es5 更加简洁，提高了开发效率，让js代码更优雅

- 新增的特性
  let 和 const 常量声明，具有var没有的块级作用域。比如循环事件监听时、闭包，让代码更好理解
  var 有变量提升的能力，但是let const 不会到顶级对象，使用的变量或常量一定要声明。

- 箭头函数
  简化了函数的表达形式，
  1. 不用function关键字， () => { }
  2. 如果只有一个参数， () 也可以省略
  3. 如果带啊直接返回， {} 也可以省略，右侧的代码就是返回值
  4. 箭头函数有效的规避了 this 丢失的问题，指向上一级

- 模板字符串
  增强版的字符串， 用``云括号，它的多行表达方式特别适合 react jsx template 的书写
  DOM 或 HTML 模板的构建更加优雅

- 解构赋值
  可解 spread 可合reset ，从对象或数组中提取值，对变量进行赋值，提高开发效率

- for of 循环
  for 计步循环，只对数组友好，但是 对象 set map 类数组 以及字符串都可以遍历

- SET  es6新增的数据结构 类似数组。提供唯一、没有重复的值

- import export  es6的模块化，es6原生支持的module，将js代码分割成不同的小块独立开发，
  一个文件一个类，一个独立的模块，比如说 utils api

- ...  展开运算符

- 终于支持原生的 class 关键字了，js 有了传统面向对象的写法，extends，
  不过它只是语法糖，底层还是基于原型的面向对象

- promise 为js提供了异步解决方案，规避了回调地狱  .then()  代码的书写和执行是一样的

- 更棒的异步解决方案 es7 的 async await
  koa 就是基于 async await 快速取代了 express 的江湖地位

- vue react 响应式编程依赖的proxy defineProperty 监听对象的改变，做一些事情

- es6提供了新的数据类型， Symbol
