import React from "react";
import { useNavigate } from "react-router-dom";

function Leadership() {
  const navigate = useNavigate();

  return (
    <section className="p-6 text-center bg-gray-50">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
        Leadership
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Founders Card */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              For Founders
            </h3>
            <p className="text-gray-600 mb-4">
              Share your vision and lead your startup journey with the support
              of investors.
            </p>
          </div>
          <button
            onClick={() => navigate("/start-project")}
            className="mt-auto bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90"
          >
            Start Project
          </button>
        </div>

        {/* Investors Card */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              For Investors
            </h3>
            <p className="text-gray-600 mb-4">
              Lead the future by investing in innovative and verified projects.
            </p>
          </div>
          <button
            onClick={() => navigate("/projects")}
            className="mt-auto bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90"
          >
            Invest Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
