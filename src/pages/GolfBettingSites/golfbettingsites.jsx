import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState } from "react";
import StarRating from "../../components/stars";
// import williamHill from "../../assets/photos/williamHill.png";

// follow same styling as cricket betting with the coloring being the same as the main sites
const BoxComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  //create a call back function
  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const sections = [
    { 
      id: 1, 
      title: 'Bonus Code', 
      content: 'BONUS2024' 
    },
    { id: 2,
      title: 'Site Review', 
      content: 'Reviews and ratings' 
    },
  ];

  const menuItems = [
    'Tournament Bonus',
    'Golf-Odds',
    'Cash Out',
    'Boosted Odds Bonus',
    'In play Betting',
    'Live Streaming'
  ];

  return (
    <div>
    <div className="relative top-0 w-full">
      <Header />
    </div>
    <div>
      hi
    </div>
    <div className="relative bottom-0 w-full">
      <Footer />
    </div>
  </div>
  );
};

export default BoxComponent;
