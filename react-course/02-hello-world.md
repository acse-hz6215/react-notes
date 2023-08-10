# Hello World

使用 React 开发 Web 项目，需要引入两个 js 脚本

- react.development.js
- react-dom.development.js

P.S. 使用 `create-react-app `创建项目时，会自动处理底层依赖关系，包括 React 和 ReactDOM 库。这个工具会在项目的构建过程中引入正确的库文件，而不需要手动引入 react.development.js 和 react-dom.development.js 这些文件

# DOM vs React

分别使用用纯 DOM API 和 React AIP 来创建并将一个 div 元素添加到页面上

示例代码：
[../script/02-hello-world/use-dom-and-react-to-create-div.html](../script/02-hello-world/use-dom-and-react-to-create-div.html)

通过 DOM 创建 div：

```js
const div = document.createElement("div"); // 创建一个dom元素
div.innerText = "我是DOM创建的元素"; // 设置div元素的文本内容
const root = document.getElementById("root"); // 通过id获取元素
root.appendChild(div); // 将div添加到根元素中
```

通过 React 创建 div:

```js
/*
 * React.createElement() 用来创建一个React元素
 * - 三个参数：
 *   1. 元素的名称（组件名）
 *   2. 元素属性（比如：{id: 'xxx', className: 'xxx'}，null表示没有属性）
 *   3. 元素的子元素（内容，null表示没有子元素）
 */

// 创建一个 div 元素：
const div = React.createElement("div", {}, "我是React创建的元素"); // 创建一个React元素，返回一个虚拟DOM对象

// 将 div 元素渲染到页面上：
const root = ReactDOM.createRoot(document.getElementById("root")); // 创建根元素
root.render(div); // 将div添加到根元素中
```
