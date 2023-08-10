# React API

## React.createElement()

作用：`React.createElement()`用于创建一个 React 元素

此函数主要有三个参数：

1. **元素名**：指定创建元素的类型（HTML 标签名必须小写）
2. **元素属性**：
   - class 属性要写成 className，for 属性要写成 htmlFor
   - 设置事件时，属性应采用驼峰命名法，例如 onClick，并且属性值是一个<u>函数</u>
3. **元素内容（子元素）**：定义元素的内容或子元素

注意：

- React 元素会通过虚拟 DOM 被转换为真实的 DOM 元素
- React 元素一旦创建就不能修改，只能通过创建新的元素来替换

示例代码：
[../script/03-react-API/createElement.html](../script/03-react-API/createElement.html)

```js
// 创建一个按钮元素
const button = React.createElement(
  "button",
  {
    className: "btn",
    onClick: () => {
      alert("hello"); // 点击按钮时弹出hello
    },
  },
  "我是按钮"
);

// 创建一个 div 元素，按钮元素作为 div 的子元素：
const div = React.createElement("div", {}, "我是一个div", button); // 这个div包括文本"我是一个div"，以及按钮子元素

// 将 div 元素渲染到页面上：
const root = ReactDOM.createRoot(document.getElementById("root")); // 创建根元素
root.render(div); // 将 div 元素添加到根元素中：
```

### React 元素的不可变性

这里指的是一旦 React 元素被创建并存在于内存中，它的实例就不能被修改。若需要更改属性或内容，需要重新创建元素

场景：已经创建了一个 react 元素并且渲染到页面上，现在出于某些原因（比如用户交互），需要修改这个元素的属性或内容

```js
// 错误示例
button.props.children = "新的文本"; // 这样做是不允许的
```

```js
// 正确示例
const newButton = React.createElement(
  "button",
  {
    className: "btn",
    onClick: () => {
      alert("hello"); // 点击按钮时弹出hello
    },
  },
  "新的文本"
);

const newDiv = React.createElement("div", {}, "我是一个新的div", newButton);

// 不需要获取根元素，直接二次render
root.render(div);
```

## ReactDOM.createRoot()

作用：获取或创建根元素（root）。根元素是 React 元素要插入的位置

注意：当对页面进行重新渲染时，React 会对比新旧元素之间的差异，并只更新有差异的部分，从而提高页面渲染效率

什么是根元素？

- 在 React 中，根元素通常是你在 HTML 文档中为 React 应用预留的一个元素，React 会在这个元素中渲染整个应用的内容。常见的情况是使用一个 div 元素作为根元素，例如： `<div id="root"></div>`
- 当使用`ReactDOM.createRoot(document.getElementById("root"))`时，这个 div 就被当作 React 应用的根元素，所有 React 的内容都会在这个 div 里渲染

## root.render()

作用：用来将 React 元素渲染到根元素中

- 根元素中所有的内容都会被删除，被 React 元素替换， i.e. 当 React 调用 render 方法时，指定的容器（也就是根元素）里的所有内容都会被新渲染的 React 元素替换掉
- 当重复调用 render()时，React 会比较两次渲染的结果，确保只修改发生变化的元素，从而对 DOM 做最小的修改
- 当首次调用时，容器节点里的所有 DOM 元素都会被替换，后续的调用则会使用 React 的 DOM 差分算法（DOM diffing algorithm）进行高效的更新
