import React from "react";
import "./../assets/css/index.css";
import Competiton from "./tournaments/tournaments";
import Header from "./../components/Header";
import Footer from "../components/footer";
//function NewPage

function Week() {
  return (
    <div>
      <Header />
      <div className="mt-1.5 p-5 bg-black text-2xl text-white">
        <h1>Golf Bets of the week</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Week;
