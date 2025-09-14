import React, { useState } from "react";

const sampleProjects = [
  {
    id: 1,
    name: "QiTaah",
    stage: "Seed",
    category: "Tech",
    raised: 0,
    goal: 250000,
    start: 100,
    banner:
      "https://img.freepik.com/free-photo/digital-tablet-screen-futuristic-city_23-2149393752.jpg",
  },
];

function Projects({ navigate }) {
  const [stage, setStage] = useState("");

  const filtered = stage
    ? sampleProjects.filter((p) => p.stage === stage)
    : sampleProjects;

  return (
    <section className="p-6 mt-16 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Explore Opportunities
      </h2>

      {/* Filter + Subtitle */}
      <div className="mb-6">
        <select
          className="p-2 border rounded-lg text-sm mb-2"
          onChange={(e) => setStage(e.target.value)}
        >
          <option value="">All Stages</option>
          <option value="Ideation">Ideation</option>
          <option value="Seed">Seed</option>
          <option value="IPO">IPO</option>
        </select>
        <p className="text-sm text-gray-600">
          Verified projects for profitable investments
        </p>
      </div>

      {/* Project Cards */}
      <div className="space-y-8">
        {filtered.length ? (
          filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow rounded-lg p-4 max-w-3xl mx-auto"
            >
              {/* Banner Image */}
              <img
                src={p.banner}
                alt={p.name}
                className="w-full h-80 object-cover rounded"
              />

              {/* Project Info */}
              <h3 className="text-xl font-bold mt-4">{p.name}</h3>
              <p className="text-gray-600 text-sm mt-1">
                Starting at {p.start} AED
              </p>
              <p className="text-gray-600 text-sm">
                Raised: {p.raised.toLocaleString()} AED / Raising:{" "}
                {p.goal.toLocaleString()} AED
              </p>

              {/* Category */}
              <p className="mt-2 text-sm font-medium text-gray-700">
                {p.category}
              </p>

              {/* Button */}
              <button
                onClick={() => navigate("project-details")}
                className="mt-4 bg-gradient-to-r from-gray-800 to-yellow-600 text-white font-semibold px-4 py-2 rounded shadow hover:opacity-90"
              >
                VIEW DETAILS & INVEST
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No projects available.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
