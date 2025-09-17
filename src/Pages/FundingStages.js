import React from "react";
import { useNavigate } from "react-router-dom";

function FundingStages() {
  const navigate = useNavigate();
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

      {/* Stages Timeline */}
      <div className="flex justify-center">
        <div className="flex items-center justify-center gap-6 flex-wrap px-4">
          {stages.map((stage, i) => (
            <div
              key={i}
              className="flex items-center cursor-pointer"
              onClick={() => navigate(`/stage/${stage.toLowerCase().replace(/\s+/g, '-')}`)}
            >
              {/* Stage Card */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300 px-6 py-4 text-center border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800">{stage}</h3>
              </div>

              {/* Connector */}
              {i < stages.length - 1 && (
                <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 to-gray-700 mx-2 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FundingStages;
