# State

示例：[../script/11-state/](../script/11-state/)

<img src=" ./image/11-counter.png" width="200">

在 React 中，当组件渲染完毕后，直接修改组件内的变量并不会导致组件的重新渲染。要让组件重新渲染，需要使用一个特殊的变量`state`

**例子**：以下代码每次点击后，计数器的值会加 1，但是组件并不会重新渲染

```js
// App.js

import React from "react";
import "./App.css";

const App = () => {
  let count = 0; // 使用普通变量作为计数器的初始值

  const handleClick = () => {
    count++; // 每次点击，计数器加1
  };

  return (
    <div className="app">
      <h1>Count: {count}</h1> {/*在页面中显示变量的值*/}
      <button onClick={handleClick}>Click me</button> {/*  点击按钮后，调用handleClick函数  */}
    </div>
  );
};

export default App;
```

注意：React 并不会因为一个普通变量的改变而重新渲染组件，React 只会在state或 props 发生变化时重新渲染组件

为了让组件重新渲染，需要创建一个state变量，state相当于一个在React后台已经注册的变量，React会监控这个变量的变化，当state变化时会自动触发重新渲染。
> import {useState} from "react";

要创建state变量，需要使用钩子函数（Hooks）useState 。钩子函数需要一个值作为他的参数，这个值就是state的初始值（比如：useState(0)的 initial state是0）：
> useState(0)

钩子函数返回的是一个数组，数组中第一个元素是初始值，第二个元素是一个函数，通常命名为setXxx。注意，要想修改state不能直接修改初始值，需要通过函数来修改，这样才能触发重新渲染。
>  [initialState, fucntion]

```js
// App.js

import React, { useState } from "react"; // 首先引入useState钩子函数
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0); // 创建一个state变量count，初始值为0，以及一个修改count的函数setCount

  const handleClick = () => {
    setCount(count + 1);
    // 每次点击，调用setCount函数，修改count的值
    // 注意这是一个特殊函数，专门用来修改state变量的值
  };

  return (
    <div className="app">
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
```

## 注意

1. 钩子函数都以`use`开头，比如`useState`、`useEffect`等

2. `useState` 返回的是一个数组，数组的第一个元素是 state 变量，第二个元素是修改 state 变量的函数

````js
// 这是一个解构赋值的写法
const [count, setCount] = useState(0);

// 相当于
 const result = useState(0); // 返回结果[0, function(){}]
 const count = result[0];
 const setCount = result[1];
 ```
````
