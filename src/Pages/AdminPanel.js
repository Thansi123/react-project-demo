import React, { useState } from "react";

function AdminPanel() {
  const [status, setStatus] = useState("Pending");

  return (
    <section className="p-6 mt-16">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        Admin Panel
      </h2>

      {/* Centering the card */}
      <div className="flex justify-center items-center">
        <div className="bg-white shadow rounded-lg p-6 w-80 text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2">New Startup</h3>
          <p className="text-gray-600 mb-1">Stage: Pre-Seed</p>
          <p className="text-gray-600 mb-4">Status: {status}</p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setStatus("Approved")}
              className="bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-4 py-2 rounded shadow"
            >
              Approve
            </button>
            <button
              onClick={() => setStatus("Rejected")}
              className="bg-gradient-to-r from-yellow-600 to-gray-800 text-white px-4 py-2 rounded shadow"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminPanel;

