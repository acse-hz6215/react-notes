import React from "react";
import LogDates from "./LogDate/LogDate";
import LogContent from "./LogContent/LogContent";
import "./LogItem.css";

function LogItem(props)
{
    // 在函数组件中，属性就相当于是函数的参数，可以通过参数来访问
    // 可以在函数组件的形参中定义一个props，props指向的是一个对象
    // 它包含了父组件中传递的所有参数
    // console.log(props);
  
  return (
    <div className="log-item">
      {/* 在父组件中可以直接在子组件中设置属性*/}
      
      <LogDates date={props.date} />
      <LogContent desc={props.desc} time = {props.time} /> 

    </div>
  );
}

export default LogItem;
