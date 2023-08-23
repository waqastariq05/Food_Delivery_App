import React, { useEffect } from "react";
import "../MainBanner/MainBanner.css";
import { useLocation } from "react-router-dom";

const MainBanner = (props) => {
  const location = useLocation();
  let str = location.state?.from?.pathname.toString();
  let str2 = location.pathname.toString();
  let prev = str.substring(1);
  let curr = str2.substring(1);

  return (
    <div className="mainBanner">
      <div className="pad-56">
        <div className="content">
          <h2>{props.title}</h2>
          <h3>
            <span>{prev === "" ? "home" : prev === curr ? "home" : prev}</span>{" "}
            <i className="fa-solid fa-arrow-right"></i> {curr}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
