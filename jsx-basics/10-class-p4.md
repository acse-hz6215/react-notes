# 静态方法和属性 Static Methods and Properties

直接通过类名调用的方法和属性，称为静态方法和属性。静态方法和属性不需要实例化就可以使用

使用`static`关键字定义静态方法和属性

```js
class myClass {
  // 使用static开头定义静态方法和属性
  static a = 1; // 静态属性

  static func = () => {
    console.log("hello");
  }; // 静态方法
}

// 不需要创建实例，可以直接通过类名调用：

console.log(myClass.a);
// 输出：1
myClass.func();
// 输出：hello
```

注意：**静态方法中的 this 指向类本身**，不再是实例

```js
class myClass {
  static func = () => {
    console.log(this);
  };
}

myClass.func();
// 输出：class myClass {}
```

# 实例方法和属性 Instance Methods and Properties

需要先实例化类，然后通过实例调用属性和方法

```js
class myClass {
  a = 1; // 实例属性

  func = () => {
    console.log("hello");
  }; // 实例方法
}

const p = new myClass(); // 创建一个实例

console.log(p.a);
// 输出：1
p.func();
// 输出：hello
```

实例方法中的 this 指向实例本身

```js
class myClass {
  func() {
    console.log(this);
  }
}

const p = new myClass();
p.func();
// 输出：myClass {}
```
