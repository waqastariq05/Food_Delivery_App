import React from "react";
import "../Testimonial/Testimonial.css";
import Title from "../Title/Title";
import photo1 from "../../images/Photo/photo-1.png";
import photo2 from "../../images/Photo/photo-2.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="pad-56">
        <Title h6="SATISFIED CLIENTS" h2="Testimonials" />
        <div className="row body align-items-center">
          <div className="col-md-6 test-box">
            <div className="text">
              <h2>What Our Customer Say About Us</h2>
              <p>
                Dapibus ultrices in iaculis nunc sed augue lacus viverra
                vitae.Mauris a diam maecenas sed enim. Egestas diam in arcu
                cursus euismod quis. Quam quisque id diam vel Dapibus
              </p>
            </div>
            <div className="profile">
              <div className="img">
                <img src={photo2} className="img-fluid" alt="photo2" />
              </div>
              <div className="profile-body">
                <h2>Thomas Adamson</h2>
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 test-img">
            <img src={photo1} className="img-fluid" alt="photo1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
