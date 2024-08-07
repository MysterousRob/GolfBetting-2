import React, { useState } from "react";
import { siteData } from "./global/SiteDataMap";

const SiteData = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Horizontal Scrolling Container */}
      <div className="flex justify-center  overflow-x-auto pb-4 flex-wrap">
        {siteData.map((site, index) => (
          <div
            key={index}
            className="flex-none w-80  bg-white border mr-5 mb-5 border-gray-300 rounded-lg shadow-md"
          >
            {/* First Section: Image */}
            <section className="relative">
              <img
                src={site.imageUrl}
                alt={`Betting site ${index + 1}`}
                className=" h-40 w-full  rounded-t-lg"
              />
            </section>

            {/* Second Section: Bonus and Details */}
            <section className="p-6">
              <div className="mb-4">
                <p>{site.bonusData}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Bonus Code</h2>
                <p>{site.bonusCode}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Review</h2>
                <a
                  href={site.reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Read Review
                </a>
              </div>
              <div className="mb-4">
                <button
                  onClick={() => toggleDetails(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {expandedIndex === index ? "Close" : "Open"}
                </button>
              </div>

              {/* Third Section: Additional Details */}
              {expandedIndex === index && (
                <div className="space-y-4">
                  <DetailRow
                    title="Tournament Bonus"
                    value={site.tournamentBonus}
                  />
                  <DetailRow title="Cash Out" value={site.cashOut} />
                  <DetailRow title="Boosted Odds" value={site.boostedOdds} />
                  <DetailRow title="Bonus" value={site.bonus} />
                  <DetailRow
                    title="In-Play Betting"
                    value={site.inPlayBetting}
                  />
                  <DetailRow
                    title="Live Streaming"
                    value={site.liveStreaming}
                  />
                </div>
              )}
            </section>

            {/* Third Section: Actions and Payment Methods */}
            <section className="p-6 bg-gray-100 rounded-b-lg">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Star Rating</h2>
                <p>
                  {"★".repeat(Math.round(site.starRating))} ({site.starRating})
                </p>
              </div>
              <div className="mb-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Claim Offer
                </button>
              </div>
              <div className="mb-4">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Site
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {site.paymentMethods.map((method, idx) => (
                  <img
                    key={idx}
                    src={method}
                    alt={`Payment Method ${idx + 1}`}
                    className="w-16 h-16 object-contain"
                  />
                ))}
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper component for displaying details
const DetailRow = ({ title, value }) => (
  <div className="flex justify-between items-center border-b border-gray-300 pb-2">
    <span className="font-semibold">{title}</span>
    <span>{value}</span>
  </div>
);

export default SiteData;
