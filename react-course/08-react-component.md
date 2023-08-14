# React 组件

React 中组件的定义方式有两种：

1. 基于函数的组件 
2. 基于类的组件 

类组件比起函数组件，有更多的功能，但是也更加复杂，所以在实际开发中尽量使用函数组件，必要时再使用类组件

## 函数组件 Functional Component

- 基于函数的组件其实就是一个<u>会返回 JSX（React 元素）</u> 的普通的 JS 函数
- 函数名必须以大写字母开头

```js
import ReactDOM from "react-dom/client";

// 定义一个函数组件
function App() {
    return <h1>我是一个函数式组件！</h1>;
}

cosnt root = ReactDOM.createRoot(document.getElementById('root'));
// React组件需要使用JSX语法，所以这里需要使用<></>标签
root.render(<App />);
```

## 类组件 Class Component
- 类组件必须要继承 React.Component
- 类组件必须要有一个 render 方法，render 方法必须要返回一个 JSX 元素

```js
import React from "react"; 

class App extends React.Component {
    render() {
        return <h1>我是一个类组件！</h1>;
    }
}

```
