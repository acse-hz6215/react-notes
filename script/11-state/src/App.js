import "./App.css";
import React, { useState } from "react"; // 引入useState钩子函数

const App = () =>
{
    // let count = 0; // 使用普通变量作为计数器的初始值
    // const handler1 = () => {
    //     count++; // 每次点击，计数器加1
    // };

    //-----------------------------state--------------------------------------------

    const [count, setCount] = useState(0); // 创建一个state变量count，初始值为0，以及一个修改count的函数setCount
    const [user, setUser] = useState({ name: 'Jack', age: 19 })
    const handler1 = () =>
    {
        setCount(count + 1); // 每次点击，调用setCount函数，修改count的值
    }

    const handler2 = () => 
    {
        // setUser({ name: 'Mark'}) // 这样修改的话名字会变，但是age会直接消失
        setUser({ ...user, name: 'Mark' }); // 只修改其中一个变量name, age保持不变
    }

    return (
        <div className="app">
            <h1>Count: {count} -- {user.name} -- {user.age} </h1> {/*在页面中显示变量的值*/}
            <button onClick={handler1}>Click me</button>
            <button onClick={handler2}>User</button>
            {/*  点击按钮后，调用handler1函数  */}
        </div>
    );
}
export default App;
