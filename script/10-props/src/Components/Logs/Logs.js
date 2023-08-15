import LogItem from "./LogItem/LogItem";
import "./Logs.css";

// 日志的容器
const Logs = () =>
{
    return <div className="logs">
        {/* 在父组件中可以直接在子组件中设置属性*/}
        <LogItem date={new Date(2023, 8, 15, 0)} desc={"Study Props"} time={"2"} />
        <LogItem date={new Date(2023,1,22,30)} desc={"Study Component"} time={"1"} />
  
    </div>
};

export default Logs;