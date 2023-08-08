# This

动态绑定： 在 JavaScript 中，this 的值是动态绑定的。**这意味着 this 的值取决于函数是如何被调用的**，而不是函数在哪里被定义

# 类的 This

1. 严格模式中的 this:

   - 类中的所有代码都是在严格模式下执行的
   - 在严格模式下，如果没有明确设置调用上下文，this 的默认值是 undefined。（非严格模式下是全局对象 (在浏览器中是 Window，Node 中是 global)

2. 类中方法的 this 不是固定的：

   - 以方法形式调用时，this 就是当前的实例
   - 以函数形式调用（不是作为对象的方法）时，this 在严格模式下是 undefined

   例如：

   ```js
   //先定义一个类
   class myClass {
     func() {
       console.log(this);
     }
   }

   const p = new myClass();
   p.func(); // 输出: myClass {}

   const test = p.func;
   test(); // 输出: undefined
   ```

   当方法被对象实例调用时，this 指向对象本身，谁调用了方法，this 就指向谁

   - `p.func()` 通过 p 这个对象实例调用 func 方法。在这种情况下，this 的值是调用它的对象，即 p。因此， this 指向 p 对象

   当类的方法被当作函数调用（没有通过对象实例）时，this 会失去其原始的调用上下文并变为 undefined

   - `const test = p.func `首先将 p.func 的引用（不带括号，所以没有调用）分配给了 test 变量。这种情况下，你失去了原始的调用上下文（即 p 对象）。当直接调用 test() 时，由于是在严格模式下（因为这是一个类），this 的默认值是 undefined

   ```js

   ```

3. 固定 this 的值:

   在开发时，有时我们希望 this 是固定的，不会随着调用方式的改变而改变

   - 可以使用 `bind()` 方法
   - 当然更普遍的是使用 arrow function 定义类中的方法，则方法中的 this 恒为当前实例，不会改变

   ```js
   // class myClass {
   //   constructor() {
   //     this.func = this.func.bind(this); //通过bind将this绑定到当前实例
   //   }
   //   func() {
   //     console.log(this);
   //   }
   // }

   //通过箭头函数将this绑定到当前实例
   class myClass {
     func = () => {
       console.log(this);
     };
   }

   const p = new myClass(); // 创建一个实例
   const test = p.func;

   p.func(); // 打印结果：myClass {}
   test(); // 打印结果：myClass {}
   ```

4. **注意：严格模式”与 this 的默认值是两个相关但独立的概念**

   - 严格模式导致函数中的 this 默认值变为了 undefined
   - 但这并不意味着在严格模式下，this 永远是 undefined。this 的值仍然取决于函数是如何被调用的

   ```js
   // 以方法形式调用，this指向该对象，无论是否在严格模式下
   const obj = {
     testMethod: function () {
       console.log(this);
     },
   };
   obj.testMethod(); // 输出 obj, 无论是否在严格模式下
   ```

   ```js
   // 直接调用函数: 在严格模式下，当你直接调用一个函数，this会是undefined
   function testFunc() {
     console.log(this);
   }
   testFunc(); // 在严格模式下，输出 undefined
   ```
