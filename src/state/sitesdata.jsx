import React, { useState } from 'react';

export const sectionData = [
  {
    sectionName: {
      BonusData: "Bonus Data",
      BonusCode: "Bonus Code",
      BoostedOdds: "Boosted Odds",
      LiveStreaming: "Live Streaming",
      InPlayBetting: "In Play Betting",
      TermsAndConditions: "T&C",
    }
  }
];

export const siteData = [
  {
    nameSite: "betway", 
    info: {
      bonusData: "Betway bonus data",
      bonusCode: "BETWAY2024",
      boostedOdds: "20% boosted odds",
      liveStreaming: "Available",
      inPlayBetting: "Yes",
      termsConditions: "Standard T&Cs apply",
    },
    link: {
      claimLink: "https://betway.com/claim",
      visitLink: "https://betway.com",
      reviewLink: "https://betway.com/review",
    },
  },
  {
    nameSite: "bwin", 
    info: {
      bonusData: "Bwin bonus data",
      bonusCode: "BWIN2024",
      boostedOdds: "15% boosted odds",
      liveStreaming: "Available",
      inPlayBetting: "Yes",
      termsConditions: "Standard T&Cs apply",
    },
    link: {
      claimLink: "https://bwin.com/claim",
      visitLink: "https://bwin.com",
      reviewLink: "https://bwin.com/review",
    },
  },
  // Add more site data as needed...
];

const SitesData3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sectionTitles = sectionData[0].sectionName;
  const sectionKeys = Object.keys(sectionTitles);

  return (
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

            {siteData.map((site, siteIndex) => (
              <div key={siteIndex} className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{site.nameSite}</h2>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-4">
                    {sectionKeys.map((key) => (
                      <div key={key}>
                        <h2 className="text-xl font-bold">{sectionTitles[key]}</h2>
                        <p>{site.info[key.toLowerCase()]}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={toggleMenu}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    {isMenuOpen ? 'Close' : 'Open'}
                  </button>
                </div>

                {isMenuOpen && (
                  <div className="mt-4">
                    <h2 className="text-xl font-bold">Offers Menu</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="text-white">
                        <a href={site.link.claimLink} target="_blank" rel="noopener noreferrer">Claim Offer</a>
                      </li>
                      <li className="text-white">
                        <a href={site.link.visitLink} target="_blank" rel="noopener noreferrer">Visit Site</a>
                      </li>
                      <li className="text-white">
                        <a href={site.link.reviewLink} target="_blank" rel="noopener noreferrer">Site Review</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
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
  );
};

export default SitesData3;