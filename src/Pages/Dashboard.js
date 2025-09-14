import React from "react";
import { Users, DollarSign, Layers } from "lucide-react"; // icons

function Dashboard() {
  return (
    <section className="p-6 mt-16">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        Dashboard
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* Projects / Investments */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Projects / Investments
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-gray-700 font-medium">QiTaah</p>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
              Live
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Stats</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Users className="text-yellow-600" />
              <p className="text-gray-700">
                Founders: <span className="font-semibold">1</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-yellow-600" />
              <p className="text-gray-700">
                Investors: <span className="font-semibold">0</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="text-yellow-600" />
              <p className="text-gray-700">
                Raised: <span className="font-semibold">457,000 AED</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Layers className="text-yellow-600" />
              <p className="text-gray-700">
                Stages: <span className="font-semibold">Seed: 1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
