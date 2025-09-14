import React, { useState } from "react";

function BehaviorReport() {
  const [report, setReport] = useState({ investorId: "", description: "" });

  const handleChange = (e) =>
    setReport({ ...report, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Issue reported for investor ${report.investorId}: ${report.description}`);
  };

  return (
    <section className="p-6 mt-16 max-w-md mx-auto bg-white shadow rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
        Report Issue
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="number"
          name="investorId"
          placeholder="Investor ID"
          className="w-full border rounded p-2"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Describe the issue"
          className="w-full border rounded p-2"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-3 py-2 rounded"
        >
          Report
        </button>
      </form>
    </section>
  );
}

export default BehaviorReport;
