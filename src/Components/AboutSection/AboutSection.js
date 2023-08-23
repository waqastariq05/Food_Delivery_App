import React from "react";
import "../AboutSection/AboutSection.css";
import photo3 from "../../images/Photo/photo-3.png";
import Card from "../Card/Card";
import { Link, useLocation } from "react-router-dom";

const AboutSection = () => {
  const location = useLocation();

  return (
    <div className="about">
      <div className="pad-56">
        <div className="row body align-items-center">
          <div className="col-md-5 box photo-section">
            <img src={photo3} className="img-fluid" alt="photo3"></img>
            <div className="photo-tab">
              <span className="one">
                <i className="fa-solid fa-burger"></i> Burgers
              </span>
              <span className="two">
                <i className="fa-solid fa-cheese"></i> Steaks
              </span>
              <span className="three">
                <i className="fa-solid fa-martini-glass"></i> Drinks
              </span>
            </div>
          </div>
          <div className="col-md-7 box text-section">
            <h2>Food from your favorite restaurants to your table</h2>
            <p>
              Pretium lectus quam id leo in vitae turpis massa sed. Lorem donec
              massa sapien faucibus et molestie. Vitae elementum curabitur vitae
              nunc.
            </p>
            <Link className="btn" to="/menu" state={{ from: location }}>Order now</Link>
          </div>
        </div>
        <div className="row service align-items-center">
          <div className="col-md-3 box">
            <h2>Service shows good taste.</h2>
          </div>
          <div className="col-md-3 box">
            <Card title={976} text="Satisfied Customer" />
          </div>
          <div className="col-md-3 box">
            <Card title={2000} text="Total Dishes" />
          </div>
          <div className="col-md-3 box">
            <Card title={1000} text="Food Delivered" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
