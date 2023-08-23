import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import MainSection from "../Components/MainSection/MainSection";
import DealSection from "../Components/DealSection/DealSection";
import ServiceSection from "../Components/ServiceSection/ServiceSection";
import Testimonial from "../Components/Testimonial/Testimonial";
import OfferSection from "../Components/OfferSection/OfferSection";
import Reservation from "../Components/Reservation/Reservation";

const Home = (props) => {
  return (
    <div>
      <Navbar alert={props.alert} />
      <Banner />
      <ServiceSection />
      <MainSection />
      <OfferSection />
      <DealSection />
      <Testimonial />
      <Reservation showAlert={props.showAlert} />
      <Footer />
    </div>
  );
};

export default Home;
