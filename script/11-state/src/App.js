import "./App.css";
import React, { useState } from "react"; // 引入useState钩子函数

const App = () =>
{
    // let count = 0; // 使用普通变量作为计数器的初始值
    // const handleClick = () => {
    //     count++; // 每次点击，计数器加1
    // };

    const [count, setCount] = useState(0); // 创建一个state变量count，初始值为0，以及一个修改count的函数setCount

    const handleClick = () =>
    {
        setCount(count + 1); // 每次点击，调用setCount函数，修改count的值
    }

    return (
        <div className="app">
            <h1>Count: {count}</h1> {/*在页面中显示变量的值*/}
            <button onClick={handleClick}>Click me</button>{" "}
            {/*  点击按钮后，调用handleClick函数  */}
        </div>
    );
}
export default App;
