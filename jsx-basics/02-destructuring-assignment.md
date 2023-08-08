# 解构赋值 Destructuring assignment

作用：从**数组**和**对象**中提取值，对变量进行赋值

## 解构数组

可以跳过元素把最后一个值赋给c
```js
let a,b,c;  // 定义变量
let arr = [1,2,3,4]; // 定义一个array

const [a, b, , c] = arr; // 可以跳过元素
// 直接把arr数组里[0],[1],[3]的值分别赋给a,b, c

console.log(a, b, c); // 输出：1,2,4
```
也可以把arr里剩余的数组赋给一个c，**但是c只能放在最后**
```jsx
let a,b,c ; //  定义变量
let arr = [1,2,3,4]; // 定义array
const [a, b, ...c] = arr; // 把arr里剩余的数组赋给c 

console.log(a, b, c); // 输出：1,2,[3,4]

```
## 解构对象
```js
const object = {
    name:'jack',
    age:18,
    gender:m
}; // 定义一个对象

//  let a,b,c; 
//  ({name:a, age:b, gender:c} = object;) 
//  这里把object里的值分别赋给a,b,c
//  **注意：** 任何时候都不要用{大括号}开头，要加(括号)，否则会被认为是一个代码块
//  这个相当于 a=obj.name; b=obj.age; etc.

const {name, gender,age} = object; // 这是更common的写法，一边声明变量，一边解构，同时属性名和变量名一致
// 这个相当于const {name:name; gender:gender,age:age} = obj; 
// 只不过属性名和变量名一致，如果不一致，就要写成上面那样

console.log(name,age,gender); // 输出：jack,18,m
```
## 解构对象里的对象
```js
const {inner:{size}} ={a:10, b:20, inner:{size:6}}; // 将对象中的inner.size赋值给变量size 
console.log(size); // 输出：6
```
