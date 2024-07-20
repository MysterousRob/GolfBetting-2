import React from "react";
import Footer from "../components/footer";
import Header from "./../components/Header";
import { useState } from "react";
import StarRating from "./../components/stars";
import williamHill from "./../assets/photos/williamHill.png";

// follow same styling as cricket betting with the coloring being the same as the main sites
const BoxComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  //create a call back function
  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mt-1.5 p-10 bg-black text-2xl text-white">
    <Header />
    <div className="text-white bg-black p-1 text-2xl">
      <h1>Different Golf Betting Websites</h1>
      <div className="m-2.5 bg-black bg-opacity-10 border-4 border-blue-500 h-[265px] flex flex-row">
        <div className="m-0 p-[125px] border-3 border-blue-500 bg-[#021434]"></div>
        <div className="grid grid-rows-4 w-[1000px] border-2 border-blue-500">
          <div>
            <h1>box 1</h1>
          </div>
          <div>
            <h1>box 2</h1>
          </div>
          <div>
            <h1>box 3</h1>
          </div>
          <div>
            <h1>box 4</h1>
          </div>
        </div>
        <div className="grid grid-rows-4 w-[300px] border-2 border-blue-500">
          <div>
            <h1>box 1</h1>
          </div>
          <div>
            <h1>box 2</h1>
          </div>
          <div>
            <h1>box 3</h1>
          </div>
          <div>
            <h1>box 4</h1>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default BoxComponent;
