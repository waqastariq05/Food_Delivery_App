import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="pad-56">
        <div className="row">
          <div className="col-md-4">
            <div className="top d-flex align-items-center gap-2">
              <i className="fa-solid fa-burger"></i>
              <Link className="navbar-brand" to="/">
                Food<span>Hub</span>
              </Link>
            </div>
            <div className="body">
              <h2>The Best Restaurants in Your Home</h2>
              <p className="text">Our job is filling your tummy with delicious food and with fast and free delivery.</p>
            </div>
          </div>
          <div className="col-md-4 middle">
            <div className="top">
              <h2>Opening Hour</h2>
            </div>
            <div className="body">
              <ul>
                <li>
                  <h5>Monday - Saturday</h5>
                  <p>8:00 AM – 5:00 PM</p>
                </li>
                <li>
                  <h5>Sunday</h5>
                  <p>12:00 AM – 8:00 PM</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="top">
              <h2>Contacts</h2>
            </div>
            <div className="body">
              <div className="address d-flex align-items-center">
                <i className="fa-solid fa-location-dot"></i>
                <p>923 W.Marshall Lane Marshalltown, IA 50186, Los Angeles</p>
              </div>
              <p>
                <i className="fa-solid fa-envelope"></i> foodhub@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-phone"></i> (414) 857 - 0107
              </p>
              <div className="social-icon">
                <div>
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div>
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div>
                  <i className="fa-brands fa-twitter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright <span>©</span> 2023. Food<span>Hub</span>. All rights
            reserved.
          </p>
          <div className="last">
            <p className="pe-4">Privay Policy</p>
            <p>terms & conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
