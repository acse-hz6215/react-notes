// src/index.js 是整个项目的入口文件，它的作用是将 App 组件渲染到 index.html 中的 root 节点上

// 引入ReactDOM
import ReactDOM from "react-dom/client";
import app from "./App";


// 将 app组件渲染到页面上
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
