import React from "react";

function FundingStages() {
  const stages = ["Ideation", "Pre-Seed", "Seed", "Series A", "Series B", "Series C", "IPO"];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white via-yellow-50 to-white">
      {/* Decorative background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-200/40 via-transparent to-yellow-200/40 blur-3xl" />

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
        <span className="bg-gradient-to-r from-yellow-600 to-gray-900 bg-clip-text text-transparent">
          Funding Stages
        </span>
      </h2>

      {/* Horizontal Scrollable Timeline */}
      <div className="overflow-x-auto">
        <div className="flex items-center justify-start gap-6 min-w-max px-4">
          {stages.map((stage, i) => (
            <div key={i} className="flex items-center">
              {/* Stage Card */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300 px-6 py-4 text-center border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800">{stage}</h3>
              </div>

              {/* Connector (except last one) */}
              {i < stages.length - 1 && (
                <div className="flex-1 h-1 w-12 bg-gradient-to-r from-yellow-500 to-gray-700 mx-2 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Subtext */}
      <p className="text-center text-gray-700 max-w-2xl mx-auto mt-10 mb-8 text-lg leading-relaxed">
        A <span className="font-bold text-yellow-600">100 AED</span> investment can
        transform a startup and yield{" "}
        <span className="font-bold text-gray-900">rich returns</span>.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:opacity-95 transform transition">
          Donate
        </button>
        <a
          href="https://wa.me/" // Replace with real WhatsApp group
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:opacity-95 transform transition"
        >
          Join via WhatsApp
        </a>
      </div>
    </section>
  );
}

export default FundingStages;

