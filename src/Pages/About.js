import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import MainBanner from "../Components/MainBanner/MainBanner";
import AboutSection from "../Components/AboutSection/AboutSection";
import TeamSection from "../Components/TeamSection/TeamSection";

const About = () => {
  return (
    <div>
      <Navbar />
      <MainBanner title="About Us" />
      <AboutSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
