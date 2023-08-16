import LogItem from "./LogItem/LogItem";
import "./Logs.css";

// 创建一个数据库
const database = [
    {
        id: "001",
        date: new Date(2023, 8, 15, 0),
        desc: "Study Props",
        time: "2",
    },
    {
        id: "002",
        date: new Date(2023, 1, 22, 30),
        desc: "Study Component",
        time: "3",
    },
    {
        id: "003",
        date: new Date(2023, 2, 2, 30),
        desc: "Study JSX",
        time: "1",
    },
    {
        id: "004",
        date: new Date(2023, 3, 2, 30),
        desc: "Study Event",
        time: "1",
    }
];

// JSX 逻辑放外面，让代码更加简洁
// map() 函数
const logItemData = database.map(item =>
    <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />);

// 日志的容器
const Logs = () =>
{
    return (
        <div className="logs">
            {/* 在父组件中可以直接在子组件中设置属性*/}
            {/*   <LogItem date={new Date(2023, 8, 15, 0)} desc={"Study Props"} time={"2"} />
            <LogItem date={new Date(2023,1,22,30)} desc={"Study Component"} time={"1"} /> */}
            {logItemData}
        </div>
    );
};

export default Logs;
