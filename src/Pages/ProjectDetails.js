import React, { useState } from "react";
import { useParams } from "react-router-dom";

// ✅ You can import or share this from Projects.js to avoid duplication
const sampleProjects = [
  { id: 1, name: "QiTaah", stage: "Seed", category: "Tech", raised: 50000, goal: 250000, start: 100, banner: "https://dashboard.thefinanser.com/wp-content/uploads/2024/02/Technology.jpg" },
  { id: 2, name: "AgriNext", stage: "Seed", category: "Agriculture", raised: 20000, goal: 100000, start: 150, banner: "https://media.istockphoto.com/id/1401722160/photo/sunny-plantation-with-growing-soya.jpg?s=612x612&w=0&k=20&c=r_Y3aJ-f-4Oye0qU_TBKvqGUS1BymFHdx3ryPkyyV0w=" },
  { id: 3, name: "FinGo", stage: "Seed", category: "Finance", raised: 75000, goal: 200000, start: 300, banner: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a" },
  {id: 4,
    name: "EduNova",
    stage: "Ideation",
    category: "Education",
    raised: 10000,
    goal: 150000,
    start: 200,
    banner:
      "https://www.holidify.com/images/cmsuploads/compressed/Colosseum_in_Rome,_Italy_-_April_2007_20181213182254.jpg",
    },

      {
        id: 5,
        name: "FoodLink",
        stage: "Ideation",
        category: "Retail",
        raised: 5000,
        goal: 80000,
        start: 100,
        banner:
          "https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?fm=jpg&q=60&w=3000",
      },
      {
        id: 6,
        name: "GreenBuild",
        stage: "Ideation",
        category: "Construction",
        raised: 2000,
        goal: 120000,
        start: 250,
        banner:
          "https://www.shutterstock.com/image-photo/construction-worker-wearing-yellow-hard-600nw-2492762443.jpg",
      },
    
      // IPO Projects
      {
        id: 7,
        name: "HealthX",
        stage: "IPO",
        category: "Healthcare",
        raised: 75000,
        goal: 300000,
        start: 500,
        banner:
          "https://www.flamingotravels.co.in/blog/wp-content/uploads/2022/04/Main_image2.jpg",
      },
      {
        id: 8,
        name: "TravelGo",
        stage: "IPO",
        category: "Travel",
        raised: 120000,
        goal: 400000,
        start: 1000,
        banner:
          "https://img.freepik.com/free-photo/shocked-woman-holding-map-phone_23-2148631416.jpg?semt=ais_hybrid&w=740",
      },
      {
        id: 9,
        name: "MediPlus",
        stage: "IPO",
        category: "Healthcare",
        raised: 200000,
        goal: 500000,
        start: 800,
        banner:
          "https://media.istockphoto.com/id/1363588189/photo/healthy-lifestyle-on-ketogenic-diet-eating-clean-keto-food-good-health-dietary-in-heart-dish.jpg?s=612x612&w=0&k=20&c=RVW_a2Bq3eYeUWqkUbTUHkiQbGJaAMa9Q2fyljGymgY=",
      }
  
];

function ProjectDetails() {
  const { id } = useParams();
  const project = sampleProjects.find((p) => p.id === parseInt(id));

  const [amount, setAmount] = useState(0);

  if (!project) {
    return <p className="text-center mt-20">Project not found.</p>;
  }

  const percent = Math.min((project.raised / project.goal) * 100, 100);
  const investPercent = ((amount / project.goal) * 100).toFixed(2);
  const profitShare = ((amount / project.goal) * 90).toFixed(2);

  return (
    <section className="p-6 mt-16">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6 text-center">
        {/* Banner */}
        <img src={project.banner} alt={project.name} className="w-full h-60 object-cover rounded mb-4" />

        {/* Info */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{project.name}</h2>
        <p className="text-sm text-gray-500 mb-4">{project.category} • {project.stage}</p>

        <p className="text-gray-700 mb-2">Verified project – 10% equity dividends.</p>
        <p className="text-sm text-gray-600">Stage: {project.stage}</p>

        {/* Funds */}
        <p className="mt-3 text-gray-700 font-medium">
          Raised: {project.raised.toLocaleString()} AED / Goal: {project.goal.toLocaleString()} AED
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 my-4">
          <div className="bg-yellow-600 h-2 rounded-full" style={{ width: `${percent}%` }}></div>
        </div>
        <p className="text-sm text-gray-700">{percent.toFixed(1)}% Funded</p>

        {/* Investment Options */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Investment Options</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Invested ${amount} AED successfully in ${project.name}!`);
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
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
