#q1 js全局执行上下文为我们创建了两个东西: 全局对象和this关键字

new的实现原理：
1. 创建一个空对象，构造函数的this指向指向这个空对象
2. 这个新对象被执行[原型]连接
3. 执行构造函数 将属性或方法添加到this引用的对象上
4. 如果构造函数中没有返回其他对象那么返回this，即创建的新对象，否则返回构造函数返回的对象

#q2 call  bind  apply
- b.call(a) 就相当于把b里面的作用域强行指到a里面
  第一个参数一定是this作用域要去到的地方，第2,3,4…个参数是该作用域用到的参数
- b.apply(a)  与call作用一样
  但是除第一个参数外，别的参数需要用数组类型
- b.call() || b.apply()  此时this的作用域会指向window
- c = b.bind(a)
  c()
  bind()返回值是函数,所以要用函数该有的姿态去调用
  bind()接受的参数是按照形参的顺序进行的

#q3 浅拷贝和深拷贝
1. 数组解构
  let [x, y] = [1, 2]     // x = 1  y = 2
2. 对象解构 
  let {foo, bar} = {foo: 'aaa', bar: 'bbb'}    // foo = 'aaa', bar = 'bbb'
  且允许给赋值的变量重命名
  let {foo: baz} = {foo: 'abc'}     // baz = 'abc'
3. 浅拷贝
  只是第一层属性进行拷贝，当第一层的属性为基本数据类型时，新对象和原对象互不影响；但是第一层的属性是 # 复杂数据类型 # 那么新对象和原对象的属性值其指向的是同一块内存地址(属性值同步更新)
4. 深拷贝
  是指将对象及值复制过来，两个对象修改其中一个的值，另一个不改变

#q4 闭包
  闭包是指有权限访问另一个函数作用域中的变量的函数
  1. 能够访问函数定义时所在的词法作用域 (阻止其被回收)
  2. 私有化变量
  3. 模拟块级作用域
  
#q5 数组去重
1. Set      [...new Set(arr)]
2. indexOf
3. includes
4. map
5. reduce

#q6 防抖节流函数原理

#q7 __proto__ 和 prototype 关联
  __proto__是每一个实例都有的属性，可以访问[prototype]属性，
  实例的__proto__与其构造函数的prototype指向的是同一对象