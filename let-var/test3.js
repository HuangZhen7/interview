for (var i = 0; i <10; i++) {  
  setTimeout(function() {  // 同步注册回调函数到 异步的 宏任务队列。
    console.log(i);        // 执行此代码时，同步代码for循环已经执行完成
  }, 0);
}
// 输出结果
// 10 10 10 10 10 10 10 10 10 10
// 这里面的知识点： JS的事件循环机制，setTimeout的机制等

// i虽然在全局作用域声明，但是在for循环体局部作用域中使用的时候，变量会被固定，不受外界干扰。
for (let i = 0; i < 10; i++) { 
  setTimeout(function() {
    console.log(i);    //  i 是循环体内局部作用域，不受外界影响。
  }, 0);
}
// 输出结果：
// 0  1  2  3  4  5  6  7  8 9