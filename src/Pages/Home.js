import React from "react";

function Home({ navigate }) {
  return (
    <section className="p-6 text-center mt-16">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
        Crowdfunding Prosperity
      </h1>
      <p className="text-base md:text-lg text-gray-600 mb-6">
        Empower founders with a vision, supporting startups from Ideation to IPO with verified projects — 100% non-profit.
      </p>

      {/* Founder / Investor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        
        {/* For Founders Card */}
        <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              For Founders
            </h2>
            <p className="text-gray-600 mb-3">
              Launch verified projects and share 10% equity with the platform — no personal funding loss.
            </p>
          </div>
          <div className="flex gap-3 justify-center mt-auto">
            {/* Join Group link button */}
            <a
              href="https://chat.whatsapp.com/" // replace with your real WhatsApp group link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-500 to-gray-700 text-white px-4 py-2 rounded-lg shadow hover:opacity-90"
            >
              Join Group
            </a>

            {/* Start Project button */}
            <button
              onClick={() => navigate("start-project")}
              className="bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90"
            >
              Start Project
            </button>
          </div>
        </div>

        {/* For Investors Card */}
        <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              For Investors
            </h2>
            <p className="text-gray-600 mb-3">
              Invest from 100 AED in verified projects and earn dividends with up to 90% profit share annually.
            </p>
          </div>
          <button
            onClick={() => navigate("projects")}
            className="mt-auto bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90"
          >
            Invest Now
          </button>
        </div>

      </div>
    </section>
  );
}

export default Home;
