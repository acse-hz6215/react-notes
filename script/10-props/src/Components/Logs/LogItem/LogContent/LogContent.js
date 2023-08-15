import React from "react";
import "./LogContent.css";

const LogContent = (props) => {
  return (
    <div className="study-content">
      <h2 className="desc"> {props.desc} </h2>
      <div className="time"> {props.time} hour </div>
    </div>
  );
};

export default LogContent;
