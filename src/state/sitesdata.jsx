import React, { useState } from 'react';

// Sample data for demonstration
const siteData = [
  {
    imageUrl: '/photos/williamHill.png',   
    bonusData: 'Up to $500 bonus',
    bonusCode: 'GOLF2024',
    reviewLink: '',
    tournamentBonus: 'Yes',
    cashOut: 'No',
    boostedOdds: 'Yes',
    bonus: 'Yes',
    inPlayBetting: 'No',
    liveStreaming: 'Yes',
    starRating: 4.5,
    paymentMethods: [
      '/Payment/70606_discover_straight_icon.png',
      '/Payment/206681_payment_bitcoin_method_icon.png',
      '/Payment/206683_wallet_google_method_payment_icon.png',
      '/Payment/206684_visa_method_card_payment_icon.png',
      '/Payment/1933704_american-express_amex_charge_credit card_payment_icon.png',
      '/Payment/2629972_card_cash_checkout_credit_mastercard_icon.png',
    ]
  },
  // Add more site data here
];

const SiteData = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Horizontal Scrolling Container */}
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {siteData.map((site, index) => (
          <div key={index} className="flex-none w-80 bg-white border border-gray-300 rounded-lg shadow-md">
            {/* First Section: Image */}
            <section className="relative">
              <img
                src={site.imageUrl}
                alt={`Betting site ${index + 1}`}
                className=" h-60 w-full  rounded-t-lg"
              />
            </section>

            {/* Second Section: Bonus and Details */}
            <section className="p-6">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Bonus Data</h2>
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
                  {expandedIndex === index ? 'Hide Details' : 'Show Details'}
                </button>
              </div>

              {/* Third Section: Additional Details */}
              {expandedIndex === index && (
                <div className="space-y-4">
                  <DetailRow title="Tournament Bonus" value={site.tournamentBonus} />
                  <DetailRow title="Cash Out" value={site.cashOut} />
                  <DetailRow title="Boosted Odds" value={site.boostedOdds} />
                  <DetailRow title="Bonus" value={site.bonus} />
                  <DetailRow title="In-Play Betting" value={site.inPlayBetting} />
                  <DetailRow title="Live Streaming" value={site.liveStreaming} />
                </div>
              )}
            </section>

            {/* Third Section: Actions and Payment Methods */}
            <section className="p-6 bg-gray-100 rounded-b-lg">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Star Rating</h2>
                <p>{'★'.repeat(Math.round(site.starRating))} ({site.starRating})</p>
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
              <div className="flex flex-wrap gap-4">
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