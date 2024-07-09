import React from 'react';
import './../assets/css/app.css';
import './../assets/css/index.css';
import Header from './../components/Header';
import MultiVariableSlider from '../components/Slider/sliders';
import Footer from '../components/footer';
import LeaderboardOutline from '../components/Leaderboard/LeaderboardTable';

//function NewPage

function LiveOdds() {

  // console.log('fetchLeaderboard in livegolfodds.js:', JSON.stringify(fetchLeaderboard()))

  return (
    <div>
      <div>
        <Header />
      </div>
        <div className='Live-Odds'>
          <div className='Live-Odds-Slider'>
            <h1>
              Slider
            </h1>
            <MultiVariableSlider />
          </div>
          <div className='Live-Odds-Leaderboard'>
            <LeaderboardOutline />
          </div>
        </div>
      <Footer />
    </div>
  );
}


export default LiveOdds;

