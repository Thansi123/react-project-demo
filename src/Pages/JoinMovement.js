import React from "react";
import { useNavigate } from "react-router-dom";

function JoinMovement() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 text-center bg-gradient-to-b from-white via-yellow-50 to-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Join the Movement
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
        The platform takes <span className="font-semibold text-yellow-600"> upto 10% equity</span>, 
        enabling investor dividends from profits.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-6">
  <button
    onClick={() => navigate("/login")}
    className="bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:opacity-95 transform transition"
  >
    Invest
  </button>
  <button
    onClick={() => navigate("/login")}
    className="bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:opacity-95 transform transition"
  >
    Launch
  </button>
</div>

    </section>
  );
}

export default JoinMovement;
