# 类 Class

类是对象的模板，类中定义了对象中包含了哪些属性和方法。也可以直接通过 function 来定义类，但这两种定义方式并不是完全通用

## 简单的 Class

类的定义：

```js
class Person {
  // 可以直接在类中定义属性 （不需要const关键字）
  name = "John";
  age = 18;

  // 也可以在类中定义方法 （不需要function关键字）
  greeting() {
    return "Hello, World!";
  }
}

const p = new Person(); // 创建一个Person类的实例

console.log(p.name);
// 输出：John
console.log(p.age);
// 输出：18
console.log(p.greeting());
// 输出：Hello, World!
```

## constructor() 构造函数

`new`的作用是创建和初始化一个对象实例

**当通过`new`创建对象时，实际上是调用了类中的`constructor()`构造函数**，`constructor()`中可以接收参数，用于初始化对象的属性

下面展示了利用`constructor()`动态接收参数：

```js
class Person {
  constructor(...args) {
    console.log(args); // args包含了所有传入的实参
  }
}

// 在调用new创建对象时，会调用类中的constructor()构造函数，并且可以传入参数
const p = new Person("John", 18);
const p2 = new Person("Jane", 20);

console.log(p.name);
// 输出：John
console.log(p2.name);
// 输出：Jane
```

常用的写法是直接把值写在 constructor()中，然后通过 this 来引用当前对象，进行动态赋值：

```js
class Person {
  constructor(name, age) {
    // 将参数赋值给对象中的属性
    // **注意：第一个name是对象中的属性，第二个name是构造函数的参数（形参）
    // 相当于把参数name赋值给了属性，相当于var name = name
    this.name = name;
    this.age = age;
  }

  // 使用arrow function定义方法
  greeting = () => {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
  };
}

// 通过new创建对象时，会调用类中的constructor()构造函数，并且传入参数
const p = new Person("John", 18);

p.greeting();
// 输出：Hello, my name is John, I'm 18 years old.
```
