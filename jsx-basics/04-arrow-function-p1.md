# 箭头函数 Arrow Function

作用：简化函数的编写

## 箭头函数的定义

使用"fat arrow"（=>）来定义。<u>当函数体只包含一个表达式时</u>，可以省略{大括号}和 return 关键字

> const 函数名 = 参数 => 返回值

```js
const sum = (a) => a + 1;

// 上面的箭头函数与以下传统函数功能相同
function sum(a) {
  return a + 1;
}

console.log(sum(1));
// 输出：2
```

当函数没有参数，或有多个参数，需要用(小括号)括起来

> const 函数名 = (参数 1,参数 2) => 返回值

```js
const sum = (a, b) => a + b;

let result = sum(1, 2);

console.log(result);
// 输出：3
```

- 返回值必须是一个表达式（有值的语句）i.e.最终会给你一个值， 不能用 if else, for, while, switch, try catch 等语句
- 如果返回值是 object，需要使用(小括号)包围对象，以避免与函数体的{大括号}混淆
  > const sum = (a,b) => ({name:'jack', age:18});
