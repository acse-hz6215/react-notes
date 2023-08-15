import React from "react";
import "./LogDate.css";

function LogDates(props)
{
    const month = props.date.toLocaleString("en-US", { month: "long" }); // 获取月份
    const day = props.date.getDate(); // 获取日期

    return (
        <div className="date">
            <div className="month">{month}</div>
            <div className="day">{day}</div>
        </div>
    );
}

export default LogDates;
