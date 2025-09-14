import React, { useState } from "react";

function Invest({ project }) {
  const [amount, setAmount] = useState(0);

  const goal = project?.goal || 250000;
  const investPercent = ((amount / goal) * 100).toFixed(2);
  const profitShare = ((amount / goal) * 90).toFixed(2);

  return (
    <section className="p-6 mt-16">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Invest in {project?.name || "Project"}
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Minimum 100 AED investment. Annual dividends based on shares;{" "}
          {project?.name || "This project"} offers equity returns in 45 days.
        </p>

        {/* Investment Form */}
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
            placeholder="Investment Amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border rounded p-2"
          />

          <p className="text-gray-700">
            Your Contribution: <strong>{investPercent}%</strong>
          </p>
          <p className="text-gray-700">
            Profit Share: <strong>{profitShare}%</strong> (after 10% equity)
          </p>

          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            <button
              type="submit"
              className="bg-yellow-600 text-white px-4 py-2 rounded shadow"
            >
              CONFIRM PAYMENT
            </button>
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded shadow cursor-not-allowed"
              disabled
            >
              COMPLETE PAYMENT
            </button>
          </div>
        </form>

        {/* Payment Options */}
        <div className="mt-6">
          <p className="font-medium text-gray-700 mb-2">Payment Options:</p>
          <div className="flex justify-center gap-3 flex-wrap">
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
      </div>
    </section>
  );
}

export default Invest;
