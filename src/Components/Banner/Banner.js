import React from "react";
import "../Banner/Banner.css";
import Left from "./Left";
import Right from "./Right";

const Navbar = () => {
  return (
    <div className="banner">
      <div className="row">
        <div className="col-md-6">
          <Left />
        </div>
        <div className="col-md-6 rightBanner">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
