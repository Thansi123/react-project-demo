import React from "react";

function FundingStages() {
  const stages = ["Ideation", "Pre-Seed", "Seed", "Series A", "Series B", "Series C", "IPO"];

  return (
    <section className="p-6 text-center bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
        Funding Stages
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-4">
        {stages.map((stage, i) => (
          <div
            key={i}
            className="border rounded-lg p-3 font-semibold text-gray-700 hover:bg-yellow-100 cursor-pointer"
          >
            {stage}
          </div>
        ))}
      </div>
      <p className="text-gray-600 mb-4">
        A 100 AED investment can transform a startup and yield rich returns.
      </p>
      <button className="bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-4 py-2 rounded-lg shadow">
        Donate
      </button>
      <p className="mt-3 text-sm text-gray-600">
        Via WhatsApp:{" "}
        <a href="https://wa.me/" className="text-yellow-600 underline">
          Join
        </a>
      </p>
    </section>
  );
}

export default FundingStages;
