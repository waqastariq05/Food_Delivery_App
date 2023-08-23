import React from "react";
import "../Title/Title.css";

const Title = (props) => {
  return (
    <div className="top">
      <h6>{props.h6}</h6>
      <h2>{props.h2}</h2>
      <div className="bottom-dots">
        <span className="dot line-dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Title;
