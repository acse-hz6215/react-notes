import ReactDOM from "react-dom/client";
import App from './App';

// 渲染

// 获取根元素
const root = ReactDOM.createRoot(document.getElementById('root'));
// React组件需要使用JSX语法，所以这里需要使用<></>标签
root.render(<App />);