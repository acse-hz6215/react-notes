
- [箭头函数的特点](#箭头函数的特点)
  - [1. 箭头函数中没有 arguments，可以用 rest 参数...代替](#1-箭头函数中没有-arguments可以用-rest-参数代替)
  - [2. 箭头函数中没有自己的 this，它的 this 总是外层代码块的 this](#2-箭头函数中没有自己的-this它的-this-总是外层代码块的-this)
  - [3. 箭头函数中的this无法通过call、apply、bind改变指向](#3-箭头函数中的this无法通过callapplybind改变指向)
  - [4. 箭头函数无法作为构造函数使用](#4-箭头函数无法作为构造函数使用)

# 箭头函数的特点

## 1. 箭头函数中没有 arguments，可以用 rest 参数...代替

为什么箭头函数没有 arguments？

- 因为 `arguments` 是不是数组，而是一个类数组对象，用于获取函数的实参
- 比如下面的函数，没有定义参数，但是可以通过 `arguments` 获取参数

```js
// arguments含一个 length 属性，可以用 arguments.length 来获得传入函数的参数个数
function func() {
  console.log("The number of parameters is " + arguments.length);
}

// -------------------输入--------------------

func();
// 输出：The number of parameters is 0
func(1, 2);
// 输出：The number of parameters is 2
func(1, 2, 3);
// 输出：The number of parameters is 3
```

如果箭头函数使用 arguments，会报错

```js
const func = (...args) => {
  console.log("The number of parameters is " + args.length);
};

// -------------------输入-------------------

func();
// 输出：Uncought ReferenceError: args is not defined
```

对于箭头函数，需要用 rest 参数（剩余参数）`...`代替 arguments

```js
const func = (...args) => {
  console.log(args instanceof Array);
};
// ...args是rest参数

console.log(args);

// -------------------输入-------------------

[1, 2, 3];
// 输出：[1, 2, 3]
```

好处是 args 还可以配合其他参数去使用，比如：

而且不一定用 args，可以用其他名字，比如 `...aaa`

```js
const func = (a, b, ...args) => {
  console.log(a, b, args);
};
console.log(args);

// -------------------输入-------------------

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

什么是 this？

- this 是一个关键字，它代表函数运行时，自动生成的一个内部对象，只能在函数内部使用

比如下面的函数，this 指向的是 window 对象

```js
function func = () => {
    console.log(this);
} // 这里this指向window对象

func();
// 输出：Window
```

this 的指向：
- 对于普通函数，this 指向的是对象本身
- 对于箭头函数，this 指向的是外层代码块的 this

下面调用obj对象的func方法:
```js
// 如果是普通函数，this指向对象本身，即obj2
const obj2 = {
  func2: function () {
    console.log(this);
  },
};

obj2.func2(); 
// 输出：{func2: ƒ}

// 如果是箭头函数，这里this依旧指向window
const obj1 = {
  func1: () => {
    console.log(this);
  },
};

obj1.func1(); 
// 输出：Window
// 无论用什么方式调用，this都指向window
```
下面调用obj3的func3方法，然后在func3中调用箭头函数test
```js
const obj3 = {
  func3:function(){
    const test = () => {
      console.log(this); 
    }
    test(); // 在func3中调用test，这里this指向obj3，因为箭头函数没有自己的this，它的this总是外层代码块的this
  },
};

obj3.func3(); 
// 输出：{func3: ƒ} 
// 这里this是由外层代码块决定的，所以this指向obj3
```

## 3. 箭头函数中的this无法通过call、apply、bind改变指向
箭头函数的特点之一就是它不绑定自己的 this

而 `call`、`apply `和 `bind` 这三个函数的作用是允许你显式地设置函数运行时的 this 值

因此，由于箭头函数的特性，这三个函数无法改变箭头函数中 this 的指向
```js
let myObject = { value: 'Hello, World!' }; // 定义一个对象

let myFunction = function() {
  console.log(this.value);
}

myFunction.call(myObject);  
//  Prints: "Hello, World!", because 'this' was set to 'myObject'

let myArrowFunction = () => {
  console.log(this.value);
}

myArrowFunction.call(myObject);  
//  Still prints 'undefined', because 'this' cannot be set in an arrow function
```
## 4. 箭头函数无法作为构造函数使用
这意味着不能使用 `new` 关键字来实例化一个箭头函数
```js
let ArrowFunction = () => {}; // 定义一个箭头函数

let instance = new ArrowFunction(); // 使用new关键字实例化一个箭头函数
//  输出：TypeError: ArrowFunction is not a constructor

```