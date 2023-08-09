- [箭头函数的特点](#箭头函数的特点)
  - [1. 箭头函数中没有 arguments，可以用 rest 参数...代替](#1-箭头函数中没有-arguments可以用-rest-参数代替)
  - [2. 箭头函数中没有自己的 this，它的 this 总是外层代码块的 this](#2-箭头函数中没有自己的-this它的-this-总是外层代码块的-this)
  - [3. 箭头函数中的 this 无法通过 call、apply、bind 改变指向](#3-箭头函数中的-this-无法通过-callapplybind-改变指向)
  - [4. 箭头函数无法作为构造函数使用](#4-箭头函数无法作为构造函数使用)

# 箭头函数的特点

## 1. 箭头函数中没有 arguments，可以用 rest 参数...代替

为什么箭头函数没有 arguments？

- 因为 arguments 不是数组，而是一个类数组对象，用于获取函数的实参

```js
// 比如下面的函数，没有定义参数，但是可以通过 arguments 获取参数:

// arguments含一个 length 属性，可以用 arguments.length 来获得传入函数的参数个数
function func() {
  console.log("The number of parameters is " + arguments.length);
}

func();
// 输出：The number of parameters is 0
func(1, 2);
// 输出：The number of parameters is 2
func(1, 2, 3);
// 输出：The number of parameters is 3
```

如果箭头函数使用 arguments，会报错

```js
const func = (args) => {
  console.log("The number of parameters is " + args.length);
};

func();
// 报错：Uncaught TypeError: Cannot read property 'length' of undefined
```

对于箭头函数，需要用 rest 参数（剩余参数）`...`代替 arguments

```js
const func = (...args) => {
  console.log("The number of parameters is " + args.length);
};

func();
// 输出：The number of parameters is 0
```

好处是 args 还可以配合其他参数去使用。而且不一定用 args，可以用其他名字，比如 `...aaa`

```js
const func = (a, b, ...args) => {
  console.log(a, b, args);
};
console.log(args);

func(1);
// 输出：1 undefined []

func(1, 2);
// 输出：1 2 []
// 因为没有传入第三个参数，所以args是空数组

func(1, 2, 3, 4);
// 输出：1,2, [3, 4]
// 传入了第三个参数，所以args是[3, 4]
```

## 2. 箭头函数中没有自己的 this，它的 this 总是外层代码块的 this

关于 this：

- this 是一个关键字，它代表函数运行时，自动生成的一个内部对象
- 只能在函数内部使用
- 在全局作用域中，this 通常指向全局对象，如浏览器环境中的 window

this 的指向：

- 对于普通函数，this 指向的是对象本身
- 对于箭头函数，它不绑定自己的 this, 总是指向外层代码块的 this
  - 这种特性在事件处理或回调中尤为有用，因为你不需要使用.bind()或其他方法来确保 this 的正确绑定

示例：

1. 全局作用域中的箭头函数

   ```js
   function func = () => {
       console.log(this);
   } // 这里this指向window对象

   func();
   //  在浏览器环境下输出：Window
   ```

2. 对象方法中的 this

   使用普通函数作为对象的方法：

   ```js
   // this指向对象本身，即obj1
   const obj1 = {
     func1: function () {
       console.log(this);
     },
   };

   obj1.func1();
   // 输出：{func1: ƒ}
   ```

   使用箭头函数作为对象的方法：

   ```js
   // 这里this依旧指向window
   const obj2 = {
     func2: () => {
       console.log(this);
     },
   };

   obj2.func2();
   // 在浏览器环境下输出：Window
   ```

3. 嵌套函数中的 this

   ```js
   // 这里this指向obj3
   const obj3 = {
     func3: function () {
       const test = () => {
         console.log(this);
       };
       test(); // 在func3中调用test，这里this指向obj3，因为箭头函数没有自己的this，它的this总是外层代码块的this
     },
   };

   obj3.func3();
   // 输出：{func3: ƒ}
   ```

## 3. 箭头函数中的 this 无法通过 call、apply、bind 改变指向

箭头函数的特点之一就是它不绑定自己的 this

而 `call`、`apply `和 `bind` 这三个函数的作用是允许你显式地设置函数运行时的 this 值

因此，由于箭头函数的特性，这三个函数无法改变箭头函数中 this 的指向

```js
let myObject = { value: "Hello, World!" };

// 普通函数：
let myFunction = function () {
  console.log(this.value);
};

myFunction.call(myObject);
//  输出: "Hello, World!", because 'this' was set to 'myObject'

// 箭头函数：
let myArrowFunction = () => {
  console.log(this.value);
};

myArrowFunction.call(myObject);
// 仍然输出 'undefined', 因为 'this' 无法在箭头函数中被更改
```

## 4. 箭头函数无法作为构造函数使用

箭头函数不能被用作构造函数，所以使用 new 关键字实例化它会导致错误

```js
let ArrowFunction = () => {}; // 定义一个箭头函数

let instance = new ArrowFunction(); // 使用new关键字实例化一个箭头函数
//  输出：TypeError: ArrowFunction is not a constructor
```
