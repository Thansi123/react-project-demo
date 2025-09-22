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
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-yellow-600 to-gray-900 bg-clip-text text-transparent">
          Funding Stages
        </span>
      </h2>

      {/* Mobile View: Vertical Timeline */}
      <div className="relative flex flex-col items-center gap-10 md:hidden">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-yellow-500 to-gray-700 -translate-x-1/2" />

        {stages.map((stage, i) => (
          <div
            key={i}
            onClick={() =>
              navigate(`/stage/${stage.toLowerCase().replace(/\s+/g, "-")}`)
            }
            className="relative z-10 flex flex-col items-center group cursor-pointer"
          >
            {/* Marker */}
            <div
              className="w-8 h-8 rounded-full bg-yellow-600 border-4 border-white shadow-md
              transition duration-300 group-hover:scale-125 group-hover:shadow-yellow-400 group-hover:shadow-lg"
            />

            {/* Stage Card */}
            <div
              className="mt-4 bg-white rounded-xl shadow-md px-6 py-3 text-center w-40
              transition duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:bg-yellow-50"
            >
              <h3 className="text-base font-bold text-gray-800 group-hover:text-yellow-700">
                {stage}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View: Horizontal Timeline */}
      <div className="hidden md:block relative max-w-6xl mx-auto">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-gray-700 rounded-full transform -translate-y-1/2" />

        {/* Stage Items */}
        <div className="grid grid-cols-7 gap-4 relative">
          {stages.map((stage, i) => (
            <div
              key={i}
              onClick={() =>
                navigate(`/stage/${stage.toLowerCase().replace(/\s+/g, "-")}`)
              }
              className="relative flex flex-col items-center group cursor-pointer"
            >
              {/* Stage Marker */}
              <div
                className="w-8 h-8 rounded-full bg-yellow-600 border-4 border-white shadow-md
                transition duration-300 group-hover:scale-125 group-hover:shadow-yellow-400 group-hover:shadow-lg"
              />

              {/* Stage Card */}
              <div
                className="mt-6 bg-white rounded-xl shadow-md px-4 py-2 text-center w-28
                transition duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-yellow-50"
              >
                <h3 className="text-sm font-bold text-gray-800 group-hover:text-yellow-700">
                  {stage}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FundingStages;
