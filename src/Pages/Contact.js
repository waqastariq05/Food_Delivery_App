import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import MainBanner from "../Components/MainBanner/MainBanner";
import ContactSection from "../Components/ContactSection/ContactSection";

const Contact = (props) => {
  return (
    <div>
      <Navbar alert={props.alert} />
      <MainBanner title="contact Us" />
      <ContactSection showAlert={props.showAlert} />
      <Footer />
    </div>
  );
};

export default Contact;
