import React from "react";
import { useNavigate } from "react-router-dom";

function Leadership() {
  const navigate = useNavigate();

  return (
    <section className="p-6 text-center bg-gray-50">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
        Leadership
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Founders Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between h-full hover:scale-105 transition-transform duration-300">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              For Founders
            </h3>
            <p className="text-gray-600 mb-6">
              Share your vision and lead your startup journey with the support
              of investors. Gain access to a network of mentors, resources, and
              funding opportunities to bring your ideas to life.
            </p>
            <p className="text-gray-600">
              Take the first step towards building a successful venture with
              expert guidance and a community dedicated to innovation.
            </p>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="mt-6 bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
          >
            Start Project
          </button>
        </div>

        {/* Investors Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between h-full hover:scale-105 transition-transform duration-300">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              For Investors
            </h3>
            <p className="text-gray-600 mb-6">
              Lead the future by investing in innovative and verified projects.
              Explore a curated selection of startups with high growth potential
              and detailed insights.
            </p>
            <p className="text-gray-600">
              Diversify your portfolio with opportunities vetted by industry
              experts, ensuring sustainable returns and impactful investments.
            </p>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="mt-6 bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
          >
            Invest Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
