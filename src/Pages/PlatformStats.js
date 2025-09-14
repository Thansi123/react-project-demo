import React from "react";

function PlatformStats() {
  const stats = [
    { label: "Founders", value: "1" },
    { label: "Investors", value: "0" },
    { label: "Raised", value: "0 AED" },
    { label: "Live", value: "1" },
    { label: "Funds", value: "0 AED" },
    { label: "Running", value: "1" },
  ];

  return (
    <section className="p-6 text-center bg-gray-50">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
        Platform Statistics
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border rounded-lg shadow p-4">
            <p className="text-xl md:text-2xl font-bold text-yellow-700">
              {stat.value}
            </p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlatformStats;
