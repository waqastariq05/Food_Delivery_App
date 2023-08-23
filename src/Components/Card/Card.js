import React from "react";
import "../Card/Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="mini-card">
        <div className="mini-card-img">
          <img src={props.img} className="card-img-top" alt="..." />
        </div>
        <div className="icon">
          <i className={`fa-solid ${props.icon}`}></i>
        </div>
        <div className="mini-card-body">
          <h5 className="card-title">
            {props.title >= 1000 ? String(props.title)[0] + "K+" : props.title}
          </h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
