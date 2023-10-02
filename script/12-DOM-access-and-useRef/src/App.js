import "./App.css";
import React, { useRef } from "react"; // 引入useRef钩子函数

const App = () =>
{
    const h1Ref = useRef(); // 创建一个容器


    const clickHandler = () =>
    {
        h1Ref.current.innerText = "新标题"; // 修改容器中的内容
    };

    return (
        <div className="app" >
            <h1 ref={h1Ref}>我是标题</h1> {/* 获取h1 */}
            <button onClick={clickHandler}>Click me</button>
            {/*  点击按钮后，调用handler1函数  */}
        </div>
    );
};
export default App;
