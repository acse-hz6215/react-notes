# 渲染列表

示例代码：[../script/05-rendering-list.html](../script/05-rendering-list.html)

两种方式：for 循环和 map()， map() 更简洁常用

1. map()

   > 公式：`array.map((element, index, array) => { ... } )`

   可参考[../JS-basics/07-arrary.md](../JS-basics/07-arrary.md)

```js
// 使用map() 渲染列表：
const data= ["Coffee", "Tea", "Milk"];

const arr = data.map(item => <li>{item}</li>);

const list = <ul>{arr}</ul>;
);

// 输出结果：
// - Coffee
// - Tea
// - Milk
```

2. for 循环

```js
// 使用for循环渲染列表：

const data = ["Coffee", "Tea", "Milk"];

const arr = [];

for (let i = 0; i < data.length; i++) {
  arr.push(<li>{data[i]}</li>);
}

const list = <ul>{arr}</ul>;

/* 相当于 生成
 * <ul>
 *   <li>Coffee</li>
 *   <li>Tea</li>
 *   <li>Milk</li>
 * </ul>
 */
```
