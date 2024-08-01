import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState } from "react";
import SitesData from "../../state/sitesdata";
// import williamHill from "../../assets/photos/williamHill.png";

// follow same styling as cricket betting with the coloring being the same as the main sites
const BoxComponent = () => {
  
  return (
    <div>
    <div className="relative top-0 w-full">
      <Header />
    </div>
    <div>
     
    </div>
    <div className="relative bottom-0 w-full">
      <Footer />
    </div>
  </div>
  );
};

export default BoxComponent;
