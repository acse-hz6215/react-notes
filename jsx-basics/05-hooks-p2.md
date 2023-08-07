
# 箭头函数的特点
  
## 1. 箭头函数中没有arguments，可以用rest参数...代替
- arguments是一个类数组对象，用来获取函数的参数
- 比如下面的函数，没有定义参数，但是可以通过arguments获取参数

```js
//arguments含一个 length 属性，可以用 arguments.length 来获得传入函数的参数个数
function func(){
    console.log("The number of parameters is " + arguments.length); 
}

func(); 
func(1, 2);
func(1, 2, 3);

//打印结果：
//The number of parameters is 0
//The number of parameters is 2
//The number of parameters is 3
```

如果使用箭头函数，会报错
```js
const func = (...args) => {
    console.log("The number of parameters is " + args.length); 
}

func();
//打印结果：Uncought ReferenceError: args is not defined
```
为什么箭头函数没有arguments呢？
  - 因为arguments是一个类数组对象，

```js
function fn(){
    console.log(this); //打印结果：window
    const arrowFn = () => {
        console.log(this); //打印结果：window
    }
    arrowFn();
}

```