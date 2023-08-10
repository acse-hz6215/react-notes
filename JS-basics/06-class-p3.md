# 类的继承 Class Inheritance

1. 通过继承可以让子类拥有父类的所有属性和方法，使用`extends`关键字实现继承
2. 如果子类重写父类的构造函数，必须调用`super()`，否则会报错

```js
// 先将多个类的共同部分提取出来，放到一个父类中
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting = () => {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
  };
}

/*
 * 通过继承可以让子类拥有父类的所有属性和方法
 * 使用extends关键字实现继承，继承后相当于把父类的所有属性和方法都复制到了子类中
 */

// 1. 创建子类John，继承自父类Person
class John extends Person {
  //当子类重写了父类的构造函数时，必须调用super()，否则会报错！
  constructor(name, age, job) {
    // super()调用父类的构造函数
    super(name, age);
    this.job = job;
  }

  // 可以创建同名的属性和方法来对父类进行重写
  greeting = () => {
    return `I'm a ${this.job}.`;
  };
}

// 2. 创建子类Jane，继承自父类Person
class Jane extends Person {}

// 创建实例
const john = new John("John", 18, "teacher");
const jane = new Jane("Jane", 20);

// 打印结果
console.log(john.name, john.age, john.job);
// 输出：John 18 teacher
console.log(john.greeting());
// 输出：I'm a teacher.
console.log(jane.greeting());
// 输出：Hello, I'm Jane and I'm 20 years old.
```
