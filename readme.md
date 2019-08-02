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

# q11 get 和 post 请求在缓存方面的区别
  get请求类似于查找的过程，用户获取数据，可以不用每次与数据库连接，所以可以使用缓存
  post不同，post一般做的是修改和删除数据的工作，所以必须与数据库交互，所以不能使用缓存
  因此get请求更适合于请求缓存

#q12 url长度限制
  http协议并没有限制url的长度，是浏览器或者web浏览器做了url长度的限制，并且只针对于get请求做的限制
  IE : 2803
  Firefox: 65536
  Chrome: 8182
  Safari: 80000
  Opera: 190000

# q13 前端事件流
  在DOM标准的事件模型中，事件流包括下面几个阶段：
    1. 事件捕获阶段
    2. 处于目标阶段
    3. 事件冒泡阶段
  addEventListener 是有第三个参数的， 第三个参数为 true 时，捕获；false 时，冒泡； 默认为false；
  （IE浏览器只支持事件冒泡）

# q14 图片懒加载和预加载的区别
  预加载：提前加载图片。当用户需要查看图片时，可直接从本地缓存中渲染
  懒加载：作为服务器的前端优化，减少请求或延迟请求 
  （二者都提高了用户体验，懒加载对服务器有一定缓解压力作用，而预加载会增加服务器的压力）

# q15 js中的各种位置
  clientHeight: 表示可视区域的高度，不包含border和滚动条
  offsetHeight：表示可视区域的高度，包含border和滚动条
  scrollHeight：表示所有区域的高度，包含因为滚动被隐藏的部分
  clientTop：表示边框border的厚度， 未指定的情况下一般为0
  scrollTop：表示滚动后被隐藏的高度

# q16 js拖拽功能的实现
  
# q17 类的创建和继承

# q18 click在ios手机上有300ms延迟，原因及解决方法
  原因： 由于有双击放大功能  在第一次点击后，会判断300ms内是否还会点击一下，是的话就方法；否则300ms后才去执行click事件
  解决方法：
    1. 禁止双击放大功能
      <meta name="viewport" content="width=device-width, initial-scale=no">   
    2. fastClick
      原理：检测到touchEnd事件后，立刻发出模拟click事件，并把浏览器300ms之后真实发出的事件阻断

# q19 cookies、sessionStorage、localStorage的区别
  cookies:数据始终在同源的http请求中携带（即使不需要），即cookies在浏览器和服务器之间来回传递，
          而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
          cookies还有路径(path)的概念，可以限制cookies只属于某个路径下，存储大小只有4k左右

  sessionStorage:仅在当前浏览器窗口关闭前有效，不能长久保存
  localStorage:在所以的同源窗口都是共享的 存储大小为5M左右
