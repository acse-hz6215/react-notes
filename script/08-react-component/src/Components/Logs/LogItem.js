import React from "react";
import LogDates from "./LogDate";
import LogContent from "./LogContent";
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
