import React from "react";
import Header from "../components/Header/Header";
import MultiVariableSlider from "../components/Slider/sliders";
import Footer from "../components/Footer/Footer";
import LeaderboardOutline from "../components/Leaderboard/LeaderboardTable";

//function NewPage

function LiveOdds() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="Live-Odds">
        <div className="Live-Odds-Slider">
          <h1>Slider</h1>
          <MultiVariableSlider />
        </div>
        <div className="Live-Odds-Leaderboard">
          <LeaderboardOutline />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LiveOdds;
