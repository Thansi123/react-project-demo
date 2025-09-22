import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import banner from "../assets/banner-image.jpg";

const sampleProjects = [
  // Pre-Seed Projects
  {
    id: 1,
    name: "InnoStart",
    stage: "Preseed",
    category: "Tech",
    raised: 5000,
    goal: 50000,
    start: 50,
    banner:
      "https://static.vecteezy.com/system/resources/previews/006/966/161/non_2x/startup-concept-businessman-touching-icon-start-up-and-icon-network-connection-on-modern-virtual-interface-free-photo.jpg",
    verified: false
  },

  // Seed Projects
  {
    id: 2,
    name: "QiTaah",
    stage: "Seed",
    category: "Tech",
    raised: 50000,
    goal: 250000,
    start: 100,
    banner:
      banner,
    verified: true
  },
  {
    id: 3,
    name: "AgriNext",
    stage: "Seed",
    category: "Agriculture",
    raised: 20000,
    goal: 100000,
    start: 150,
    banner:
      "https://media.istockphoto.com/id/1401722160/photo/sunny-plantation-with-growing-soya.jpg?s=612x612&w=0&k=20&c=r_Y3aJ-f-4Oye0qU_TBKvqGUS1BymFHdx3ryPkyyV0w=",
    verified: false
  },

  // Series A
  {
    id: 4,
    name: "FinGo",
    stage: "SeriesA",
    category: "Finance",
    raised: 100000,
    goal: 400000,
    start: 500,
    banner:
      "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?fm=jpg&q=60&w=3000",
    verified: false
  },

  // Series B
  {
    id: 5,
    name: "EduNova",
    stage: "SeriesB",
    category: "Education",
    raised: 250000,
    goal: 600000,
    start: 1000,
    banner:
      "https://www.holidify.com/images/cmsuploads/compressed/Colosseum_in_Rome,_Italy_-_April_2007_20181213182254.jpg",
    verified: false
  },

  // Series C
  {
    id: 6,
    name: "FoodLink",
    stage: "SeriesC",
    category: "Retail",
    raised: 400000,
    goal: 1000000,
    start: 2000,
    banner:
      "https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?fm=jpg&q=60&w=3000",
    verified: false
  },

  // Ideation
  {
    id: 7,
    name: "GreenBuild",
    stage: "Ideation",
    category: "Construction",
    raised: 2000,
    goal: 120000,
    start: 250,
    banner:
      "https://www.shutterstock.com/image-photo/construction-worker-wearing-yellow-hard-600nw-2492762443.jpg",
    verified: false
  },

  // IPO
  {
    id: 8,
    name: "HealthX",
    stage: "IPO",
    category: "Healthcare",
    raised: 75000,
    goal: 300000,
    start: 500,
    banner:
      "https://www.flamingotravels.co.in/blog/wp-content/uploads/2022/04/Main_image2.jpg",
    verified: false
  },
  {
    id: 9,
    name: "TravelGo",
    stage: "IPO",
    category: "Travel",
    raised: 120000,
    goal: 400000,
    start: 1000,
    banner:
      "https://img.freepik.com/free-photo/shocked-woman-holding-map-phone_23-2148631416.jpg?semt=ais_hybrid&w=740",
    verified: false
  },
];

function Projects() {
  const [stage, setStage] = useState("");
  const navigate = useNavigate();

  const filtered = stage
    ? sampleProjects.filter((p) => p.stage === stage)
    : sampleProjects;

  const handleProjectClick = (project) => {
    if (project.verified) {
      navigate(`/project-details/${project.id}`);
    } else {
      alert("Only verified projects are available for investment at this time. Please select QiTaah.");
    }
  };

  return (
    <section className="p-6 mt-16 bg-gray-50">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-2">
        Explore <span className="text-yellow-600">Opportunities</span>
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Verified projects for profitable investments
      </p>

      {/* Verified Projects Notice */}
      <div className="max-w-7xl mx-auto mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-center">
          <CheckCircle className="text-yellow-600 mr-2" size={20} />
          <span className="font-medium text-yellow-800">
            Only verified projects are available for investment. Look for the verified badge.
          </span>
        </div>
      </div>

      {/* Filter */}
      <div className="flex justify-center mb-8">
        <select
          className="p-2 border rounded-lg text-sm shadow focus:ring-2 focus:ring-yellow-500"
          onChange={(e) => setStage(e.target.value)}
        >
          <option value="">All Stages</option>
          <option value="Preseed">Pre-Seed</option>
          <option value="Seed">Seed</option>
          <option value="SeriesA">Series A</option>
          <option value="SeriesB">Series B</option>
          <option value="SeriesC">Series C</option>
          <option value="Ideation">Ideation</option>
          <option value="IPO">IPO</option>
        </select>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filtered.length ? (
          filtered.map((p) => {
            const percent = Math.min((p.raised / p.goal) * 100, 100);
            return (
              <div
                key={p.id}
                className={`bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 flex flex-col ${
                  !p.verified ? "opacity-70" : ""
                }`}
              >
                {/* Banner */}
                <div className="relative">
                  <img
                    src={p.banner}
                    alt={p.name}
                    className="w-full h-48 object-cover"
                  />
                  {p.verified && (
                    <div className="absolute top-2 right-2 bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center text-xs font-medium">
                      <CheckCircle size={14} className="mr-1" />
                      Verified
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <p className="text-sm text-gray-500">
                    {p.category} • {p.stage}
                  </p>

                  {/* Funding Info */}
                  <div className="mt-4">
                    <p className="text-gray-600 text-sm">
                      Starting at{" "}
                      <span className="font-semibold">{p.start} AED</span>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Raised: {p.raised.toLocaleString()} AED /{" "}
                      {p.goal.toLocaleString()} AED
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-yellow-600 h-2 rounded-full"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {percent.toFixed(1)}% Funded
                    </p>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => handleProjectClick(p)}
                    className={`mt-auto font-semibold px-4 py-2 rounded-lg shadow transition w-full ${
                      p.verified
                        ? "bg-gradient-to-r from-gray-800 to-yellow-600 text-white hover:opacity-90"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {p.verified ? "VIEW DETAILS & INVEST" : "COMING SOON"}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No projects available.
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;