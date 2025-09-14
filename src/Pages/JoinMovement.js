import React from "react";

function JoinMovement() {
  return (
    <section className="p-6 text-center bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
        Join the Movement
      </h2>
      <p className="text-gray-600 mb-4">
        The platform takes 10% equity, enabling investor dividends from profits.
      </p>
      <div className="flex justify-center gap-3">
        <button className="bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-4 py-2 rounded-lg shadow">
          Invest
        </button>
        <button className="bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-4 py-2 rounded-lg shadow">
          Launch
        </button>
      </div>
    </section>
  );
}

export default JoinMovement;
