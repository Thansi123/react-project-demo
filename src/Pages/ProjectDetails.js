import React, { useState } from "react";

function ProjectDetails() {
  const [amount, setAmount] = useState(0);

  const goal = 250000;
  const raised = 0; // demo value

  const percent = Math.min((raised / goal) * 100, 100);
  const investPercent = ((amount / goal) * 100).toFixed(2);
  const profitShare = ((amount / goal) * 90).toFixed(2);

  return (
    <section className="p-6 mt-16">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6 text-center">
        {/* Banner */}
        <img
          src="https://via.placeholder.com/1200x400?text=Project+Banner"
          alt="Project Banner"
          className="w-full rounded mb-4"
        />

        {/* Logo */}
        <img
          src="https://via.placeholder.com/150?text=Logo"
          alt="Project Logo"
          className="mx-auto mb-4"
        />

        {/* Project Info */}
        <p className="text-gray-700 mb-2">
          Verified project – 10% equity dividends.
        </p>
        <p className="text-sm text-gray-600">Stage: Series A – Jan 2, 2028</p>
        <p className="text-sm text-gray-600">Category: Tech</p>
        <p className="text-sm text-gray-600">Timeline: 12 months</p>
        <p className="text-sm text-gray-600">Team: John (CEO), Sara (CTO)</p>
        <p className="text-sm text-gray-600">
          Risks: Market competition, funding gaps
        </p>

        {/* Funds */}
        <p className="mt-3 text-gray-700 font-medium">
          Funds Needed for Seed Launch: 250,000 AED (Immediate)
        </p>
        <p className="text-gray-700 font-medium">
          Raised: {raised.toLocaleString()} AED / Goal:{" "}
          {goal.toLocaleString()} AED
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 my-4">
          <div
            className="bg-yellow-600 h-2 rounded-full"
            style={{ width: `${percent}%` }}
          ></div>
        </div>

        {/* Analytics */}
        <hr className="border-yellow-600 my-6" />
        <p className="text-sm text-gray-700">Percentage Invested: {percent}%</p>
        <p className="text-sm text-gray-700">Valuation (Series A): ~2.5M AED</p>
        <p className="text-sm text-gray-700">Launch Date: Oct 2, 2025</p>
        <p className="text-sm text-gray-700">Status: Active</p>
        <p className="text-sm text-gray-700">
          Prepared by: Asif Azad, Aug 15, 2025
        </p>
        <p className="text-sm text-gray-700">
          Contact: +971581877917 | Email: ceo@frshar.com
        </p>
        <p className="text-sm text-gray-700">
          Daily Meet: 7 PM at{" "}
          <a
            href="https://meet.google.com"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-600 underline"
          >
            Google Meet
          </a>
        </p>

        {/* Investment Options */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            Investment Options
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Invested ${amount} AED successfully!`);
            }}
            className="space-y-3"
          >
            <input
              type="number"
              min="100"
              placeholder="Investment Amount (min 100 AED)"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full border rounded p-2"
            />

            <p>Your Contribution: {investPercent}%</p>
            <p>Profit Share: {profitShare}% (after 10% equity)</p>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-3 py-2 rounded shadow"
            >
              CONFIRM PAYMENT
            </button>
          </form>

          {/* Payment Methods */}
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            <span className="bg-yellow-600 text-white px-3 py-1 rounded text-sm shadow">
              BANK TRANSFER
            </span>
            <span className="bg-yellow-600 text-white px-3 py-1 rounded text-sm shadow">
              CRYPTOCURRENCY
            </span>
            <span className="bg-yellow-600 text-white px-3 py-1 rounded text-sm shadow">
              PAYPAL
            </span>
          </div>
        </div>

        {/* Extra Buttons */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <button className="bg-yellow-600 text-white px-3 py-1 rounded text-sm shadow">
            VIEW FULL REPORT
          </button>
          <button className="bg-yellow-600 text-white px-3 py-1 rounded text-sm shadow">
            FEEDBACK
          </button>
          <button className="bg-yellow-600 text-white px-3 py-1 rounded text-sm shadow">
            REPORT ISSUE
          </button>
          <button className="bg-yellow-600 text-white px-3 py-1 rounded text-sm shadow">
            TOGGLE LIVE STATUS
          </button>
        </div>

        {/* Advanced Analytics */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            Advanced Analytics
          </h3>
          <p className="text-sm text-gray-700">Amount Needed: {goal} AED</p>
          <p className="text-sm text-gray-700">Average Investment: AED</p>
          <p className="text-sm text-gray-700">Total Raised: {raised} AED</p>
          <p className="text-sm text-gray-700">Investors: (demo)</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
