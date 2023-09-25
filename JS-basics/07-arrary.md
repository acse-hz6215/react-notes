# 数组 Array

## 回调函数
回调函数：简单地说就是一个函数，它作为参数传递给另一个函数，并在适当的时候由那个函数调用


## map()

- 可以根据原有数组返回一个新的数组
- 需要一个回调函数为参数， 回调函数的返回值将会作为新数组的元素

回调函数有三个参数

- element：当前元素
- index：当前元素的索引
- array：原数组
  > 公式：`array.map((element, index, array) => { ... } )`

```jsx
// 用 map() 方法将每个元素*2

const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((num) => num * 2); //
/*
 * 这里回调函数是箭头函数'num => num*2'
 * "另一个函数"指 map()
 * 被调用指对于原数组的每个元素'map()'都会执行一次回调函数
 */

console.log(result);
// 输出：[2, 4, 6, 8, 10]
```

如果只想处理 index：

```jsx
// 创建一个新数组，其中的元素值为原始数组的index的两倍

const arr = ["a", "b", "c", "d"];

result = arr.map((_, index) => index * 2); // 这里的'_'是占位符，表示不需要用到这个参数

console.log(result);
// 输出：[0, 2, 4, 6]
```

## filter(), find()

filter()

- 从原有数组中筛选出符合条件的元素，返回一个新的数组
- 会根据回调函数的返回值是 true 还是 false 来决定是否保留元素

find()

- 从原有数组中找出符合条件的第一个元素

```jsx
// 用 filter() 筛选出偶数, 用 find() 找出第一个偶数

const numbers = [1, 2, 3, 4, 5];

// 除以2余数为0的是偶数，偶数返回true
result = numbers.filter((x) => x % 2 === 0); // 输出：[2, 4]
result2 = numbers.find((x) => x % 2 === 0); // 输出：2
```

## reduce()

- 可以用来合并数组中的元素，返回一个新的值
- 需要两个参数
  - 回调函数（指定合并规则）
    - 四个参数：
      - prev 上一次运算结果
      - curr 当前元素
      - index 当前元素的索引
      - arr 原数组
  - 初始值（可选）
    - 用来指定第一次运算时的 prev，如果不指定，prev 默认为数组的第一个元素，curr 默认为数组的第二个元素

> 公式：`array.reduce((prev, curr, index, arr) => { ... }, initialValue)`

```jsx
// 用 reduce() 求和 
// 1+2+3+4+5
const numbers = [1, 2, 3, 4, 5];

result = numbers.reduce((prev, curr) => {
  console.log(prev, curr);
  return prev + curr;
};

console.log(result);
/*
* 输出：
* 1 2
* 3 3
* 6 4
* 10 5
* 15
*/

// 如果指定初始值为0，prev就是0，curr就是数组的第一个元素
// 0+1+2+3+4+5

const initialValue = 0;

result = numbers.reduce((prev, curr) => {
  console.log(prev, curr);
  return prev + curr;
}, initialValue);

console.log(result);
/*
* 输出：
* 0 1
* 1 2
* 3 3
* 6 4
* 10 5
* 15
*/

```
