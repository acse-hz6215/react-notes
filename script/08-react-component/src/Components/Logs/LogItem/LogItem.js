import React from "react";
import LogDates from "./LogDate/LogDate";
import LogContent from "./LogContent/LogContent";
import "./LogItem.css";

function LogItem()
{
  return (
    <div className="log-item">
      <LogDates />
      <LogContent />


    </div>
  );
}

export default LogItem;
