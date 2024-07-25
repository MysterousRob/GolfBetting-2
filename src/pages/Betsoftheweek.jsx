import React from "react";
import Competiton from "./tournaments/tournaments";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
//function NewPage

function Week() {
  return (
    <div>
      <Header />
      <div className="mt-1.5 p-5 bg-black text-2xl text-white">
        <h1>Golf Bets of the week</h1>
      </div>
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Week;
