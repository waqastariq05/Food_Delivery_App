import React from "react";
import bike from "../../images/bike.png";
import { Link, useLocation } from "react-router-dom";

const Left = () => {
  const location = useLocation();

  return (
    <div className="left-box">
      <div className="tag-line">
        <h6>More than Faster</h6> <img src={bike} alt="bike" />
      </div>
      <h1 className="title">
        We will deliver <span>the best</span> burgers
      </h1>
      <p className="text">
        Our job is filling your tummy with delicious food and with fast and free
        delivery.
      </p>
      <div className="d-flex align-items-center gap-4">
        <Link className="btn" to="/menu" state={{ from: location }}>Order online</Link>
        <a href="#reservation" className="btn">
          Reservate
        </a>
      </div>
    </div >
  );
};

export default Left;
