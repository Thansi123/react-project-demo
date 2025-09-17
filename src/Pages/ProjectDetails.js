import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Bookmark,
  BookmarkCheck,
  Share2,
  Copy,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const sampleProjects = [
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
  },
  {
    id: 2,
    name: "QiTaah",
    stage: "Seed",
    category: "Tech",
    raised: 50000,
    goal: 250000,
    start: 100,
    banner:
      "https://dashboard.thefinanser.com/wp-content/uploads/2024/02/Technology.jpg",
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },

];

function ProjectDetails() {
  const { id } = useParams();
  const project = sampleProjects.find((p) => p.id === parseInt(id));

  const [amount, setAmount] = useState(0);
  const [saved, setSaved] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  if (!project) {
    return <p className="text-center mt-20 text-gray-800">Project not found.</p>;
  }

  const percent = Math.min((project.raised / project.goal) * 100, 100);
  const investPercent = ((amount / project.goal) * 100).toFixed(2);
  const profitShare = ((amount / project.goal) * 90).toFixed(2);

  const handleSave = () => {
    setSaved(!saved);
    alert(saved ? "Project removed from saved." : "Project saved successfully!");
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } else if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
    } else if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
    } else if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${url}`, "_blank");
    }
    setShowShareOptions(false);
  };

  return (
    <section className="relative min-h-screen flex justify-center items-start overflow-hidden py-12 px-4">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-yellow-500 to-yellow-500 animate-gradient-diagonal z-0"></div>

      {/* Content */}
      <div className="relative max-w-7xl w-full flex flex-col md:flex-row gap-10 bg-gray-900 text-white shadow-2xl rounded-2xl p-8 z-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative animate-slideInLeft">
          <img
            src={project.banner}
            alt={project.name}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between animate-slideInRight">
          <div>
            <h1 className="text-4xl font-bold text-yellow-400 mb-6">{project.name}</h1>
            <p className="text-lg text-gray-300 mb-4">
              {project.category} • {project.stage}
            </p>
            <p className="text-base text-gray-400 mb-4">Stage: {project.stage}</p>
            <p className="text-lg text-gray-200 font-medium mb-4">
              Raised: {project.raised.toLocaleString()} AED / Goal:{" "}
              {project.goal.toLocaleString()} AED
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
              <div
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
            <p className="text-base text-gray-300 mb-6">{percent.toFixed(1)}% Funded</p>

            {/* Investment Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Invested ${amount} AED successfully in ${project.name}!`);
              }}
              className="space-y-6"
            >
              <input
                type="number"
                min={project.start}
                placeholder={`Investment Amount (min ${project.start} AED)`}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full border border-gray-600 rounded-lg p-4 text-base bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <p className="text-base text-gray-300">Your Contribution: {investPercent}%</p>
              <p className="text-base text-gray-300">
                Profit Share: {profitShare}% (after 10% equity)
              </p>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all text-base font-medium"
              >
                Confirm Investment
              </button>
            </form>

            {/* Save & Share */}
            <div className="flex justify-between gap-4 mt-6 relative z-20">
              {/* Save */}
              <button
                onClick={handleSave}
                className="flex items-center justify-center gap-2 w-1/2 border border-gray-600 rounded-lg py-3 hover:bg-gray-800 transition-all duration-300"
              >
                {saved ? (
                  <>
                    <BookmarkCheck size={18} /> Saved
                  </>
                ) : (
                  <>
                    <Bookmark size={18} /> Save
                  </>
                )}
              </button>

              {/* Share */}
              <div className="relative w-1/2">
                <button
                  onClick={() => setShowShareOptions(!showShareOptions)}
                  className="flex items-center justify-center gap-2 w-full border border-gray-600 rounded-lg py-3 hover:bg-gray-800 transition-all duration-300"
                >
                  <Share2 size={18} /> Share
                </button>

                {showShareOptions && (
                  <div className="absolute top-14 right-0 bg-gray-800 border border-gray-600 rounded-lg shadow-2xl p-4 flex flex-col gap-3 w-52 z-50">
                    <button
                      onClick={() => handleShare("copy")}
                      className="flex items-center gap-2 text-sm text-white hover:text-yellow-400"
                    >
                      <Copy size={16} /> Copy Link
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex items-center gap-2 text-sm text-white hover:text-yellow-400"
                    >
                      <Twitter size={16} /> Twitter
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="flex items-center gap-2 text-sm text-white hover:text-yellow-400"
                    >
                      <Linkedin size={16} /> LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="flex items-center gap-2 text-sm text-white hover:text-yellow-400"
                    >
                      <MessageCircle size={16} /> WhatsApp
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes gradientDiagonal {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
          .animate-gradient-diagonal {
            background-size: 300% 300%;
            animation: gradientDiagonal 15s ease infinite;
          }

          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-80px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slideInLeft {
            animation: slideInLeft 1s ease-out forwards;
          }

          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(80px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slideInRight {
            animation: slideInRight 1s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}

export default ProjectDetails;
