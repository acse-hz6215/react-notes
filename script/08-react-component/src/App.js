import Logs from "./Components/Logs/Logs";

function App()
{
    // 文件名为App.js，所以这里的函数名为App，最好一致
    return <div>
        <Logs />
    </div>;
}

/*
// 也可以使用类组件
import React from "react"; 

class App extends React.Component {
    render() {
        return <h1>我是一个类组件！</h1>;
    }
}
*/

export default App; // 默认导出App函数
