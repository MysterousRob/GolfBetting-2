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
    { id: 1, title: 'Bonus Code', content: 'BONUS2024' },
    { id: 2, title: 'Site Review', content: 'Reviews and ratings' },
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
  
        <div className="text-white bg-black mt-6 p-1 text-2xl">
          <h1>Different Golf Betting Websites</h1>
          <div className="m-2.5 bg-black bg-opacity-10 border-4 border-blue-500 flex flex-row">
            <div className="p-[125px] border-3 border-blue-500 bg-[#021434]">
              <h1>Image goes here</h1>
            </div>
            <div className="w-full border-2 border-blue-500 p-4">
              <div className="align-middle mb-4">
                <h1 className="text-center text-[50px] font-bold">Bonus Data</h1>
              </div>
  
              <div className="align-baseline">
                {sections.map((section) => (
                  <div key={section.id} className="mb-4">
                    <h2 className="text-xl font-bold">{section.title}</h2>
                    <p>{section.content}</p>
                  </div>
                ))}
                <button
                  onClick={toggleMenu}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {isMenuOpen ? 'Open' : 'Close'}
                </button>
                {isMenuOpen && (
                  <div className="mt-4">
                    <h2 className="text-xl font-bold">Offers Menu</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {menuItems.map((item, index) => (
                        <li key={index} className="text-white">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          <div className="grid grid-rows-4 w-[300px] border-2 border-blue-500">
            <div>
              <h1>Box 1</h1>
            </div>
            <div>
              <h1>Box 2</h1>
            </div>
            <div>
              <h1>Box 3</h1>
            </div>
            <div>
              <h1>Box 4</h1>
            </div>
          </div>
        </div>
      </div> 

      <div className="relative bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default BoxComponent;
