# 箭头函数 Hooks
作用：简化函数的编写

## 箭头函数的定义
箭头后面直接跟函数体，不需要写return，如果函数体只有一行代码，可以省略大括号
> const 函数名 = 参数 => 函数体

```js
const sum = a => a+1; 

//相当于
function sum(a){
    return a+1;
}

console.log(sum(1)); //打印结果：2
```
当函数没有参数，或有多个参数，需要用(小括号)括起来
> const 函数名 = (参数1,参数2) => 返回值

- `返回值`必须是一个表达式（有值的语句）i.e.最终会给你一个值， 不能用if else, for, while, switch, try catch等语句
- 如果`返回值`是object，需要用(小括号)括起来 const sum = (a,b) => ({name:'jack',age:18});

```js
const sum = (a,b) => a+b;

let result = sum(1,2);
console.log(result); //打印结果：3
```