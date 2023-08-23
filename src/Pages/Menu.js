import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import MainBanner from "../Components/MainBanner/MainBanner";
import MenuSection from "../Components/MenuSection/MenuSection";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <MainBanner title="All Products" />
      <MenuSection />
      <Footer />
    </div>
  );
};

export default Menu;
