# 展开 Spread
作用：展开数组或对象
## 1. 展开数组
可以通过`'...'`展开数组
```js
const arr = [1,2,3];
const arr2 = [...arr, 4,5,6]; // 把arr里的值展开，然后再加上4,5,6
console.log(arr2); // 输出：[1,2,3,4,5,6]
```
在函数中展开
```js
function sum(a,b,c){
    return a+b+c;
}
const arr = [1,2,3];
let result = sum(...arr); // 把arr里的值展开，然后再传给sum函数
console.log(result); // 输出：6
```
## 2. 展开对象
```js
const obj1 = {
    name:'jack',
    age:18
    gender:'m'
};

const obj2 = {
    ...obj1,
    height:180
}; // 把obj1里的值展开，然后再加上height:180

console.log(obj2);
```

