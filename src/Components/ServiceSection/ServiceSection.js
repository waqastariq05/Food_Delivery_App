import React from "react";
import "../ServiceSection/ServiceSection.css";
import Title from "../Title/Title";
import Card from "../Card/Card";
import img1 from "../../images/Service/1.png";
import img2 from "../../images/Service/2.png";
import img3 from "../../images/Service/3.png";

const ServiceSection = () => {
  return (
    <div className="service">
      <div className="pad-56">
        <Title h6="HOW IT WORKS" h2="Simple Process" />
        <div className="row body">
          <div className="col-md-4 box">
            <Card
              img={img1}
              title="Your Order"
              text="Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets."
            />
          </div>
          <div className="col-md-4 box">
            <Card
              img={img2}
              title="Cash On Delivery"
              text="Our Online food Delivery for hiring Foodhub We appreciate your business, and we’ll do best to continue to give you the new kind."
            />
          </div>
          <div className="col-md-4 box">
            <Card
              img={img3}
              title="Receive Order"
              text="We at truly appreciate your business and we’re grateful for the trust you’ve placed in us. We sincerely hope you are satisfied ."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
