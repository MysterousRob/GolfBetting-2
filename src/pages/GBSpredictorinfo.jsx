import React from "react";
import Header from "../components/Header/Header"; 
import Footer from "../components/Footer/Footer";

function GbsInfo() {
  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className="bg-white">
          <h1 className="text-black bg-white text-center text-[50px]">
            GBS Predictor Information
          </h1>
        </div>
        <div></div>
      </div>
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default GbsInfo;
