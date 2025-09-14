import React, { useEffect, useState } from "react";
import {
  Users,
  DollarSign,
  Layers,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
} from "recharts";

const sampleProjects = [
  { id: 1, name: "QiTaah", stage: "Seed", raised: 50000, goal: 250000 },
  { id: 2, name: "AgriNext", stage: "Seed", raised: 20000, goal: 100000 },
  { id: 3, name: "FinGo", stage: "Seed", raised: 75000, goal: 200000 },
  { id: 4, name: "EduNova", stage: "Ideation", raised: 10000, goal: 150000 },
  { id: 5, name: "FoodLink", stage: "Ideation", raised: 5000, goal: 80000 },
  { id: 6, name: "GreenBuild", stage: "Ideation", raised: 2000, goal: 120000 },
  { id: 7, name: "HealthX", stage: "IPO", raised: 75000, goal: 300000 },
  { id: 8, name: "TravelGo", stage: "IPO", raised: 120000, goal: 400000 },
  { id: 9, name: "MediPlus", stage: "IPO", raised: 200000, goal: 500000 },
];

const COLORS = ["#FACC15", "#F59E0B", "#1E293B"]; // yellow, orange, dark

function Dashboard() {
  const [stats, setStats] = useState({
    founders: 0,
    investors: 0,
    raised: 0,
    stages: 0,
  });

  // animate stats
  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const endValues = {
      founders: 3,
      investors: 10,
      raised: 457000,
      stages: 3,
    };

    const interval = setInterval(() => {
      start += 50;
      setStats({
        founders: Math.min(
          endValues.founders,
          Math.floor((start / duration) * endValues.founders)
        ),
        investors: Math.min(
          endValues.investors,
          Math.floor((start / duration) * endValues.investors)
        ),
        raised: Math.min(
          endValues.raised,
          Math.floor((start / duration) * endValues.raised)
        ),
        stages: Math.min(
          endValues.stages,
          Math.floor((start / duration) * endValues.stages)
        ),
      });
      if (start >= duration) clearInterval(interval);
    }, 50);
  }, []);

  // group projects by stage
  const stageCounts = [
    {
      name: "Ideation",
      value: sampleProjects.filter((p) => p.stage === "Ideation").length,
    },
    {
      name: "Seed",
      value: sampleProjects.filter((p) => p.stage === "Seed").length,
    },
    {
      name: "IPO",
      value: sampleProjects.filter((p) => p.stage === "IPO").length,
    },
  ];

  // bar chart data
  const barData = sampleProjects.map((p) => ({
    name: p.name,
    Raised: p.raised,
    Goal: p.goal,
  }));

  // line chart (cumulative funds raised)
  const lineData = sampleProjects.map((p, i) => ({
    name: p.name,
    Cumulative: sampleProjects
      .slice(0, i + 1)
      .reduce((sum, proj) => sum + proj.raised, 0),
  }));

  return (
    <section className="p-6 mt-16 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
        Dashboard Analytics
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Pie Chart - Stages */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Projects by Stage
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={stageCounts}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="value"
              >
                {stageCounts.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Raised vs Goal */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Raised vs Goal
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Raised" fill="#FACC15" />
              <Bar dataKey="Goal" fill="#1E293B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart - Cumulative */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Cumulative Funds Raised
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Cumulative" stroke="#F59E0B" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white shadow-xl rounded-2xl p-6 mt-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Platform Stats
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <Users className="text-yellow-600 mx-auto mb-2" />
            <p className="font-semibold">{stats.founders}</p>
            <p className="text-sm text-gray-500">Founders</p>
          </div>
          <div>
            <Users className="text-yellow-600 mx-auto mb-2" />
            <p className="font-semibold">{stats.investors}</p>
            <p className="text-sm text-gray-500">Investors</p>
          </div>
          <div>
            <DollarSign className="text-yellow-600 mx-auto mb-2" />
            <p className="font-semibold">{stats.raised.toLocaleString()} AED</p>
            <p className="text-sm text-gray-500">Raised</p>
          </div>
          <div>
            <Layers className="text-yellow-600 mx-auto mb-2" />
            <p className="font-semibold">{stats.stages}</p>
            <p className="text-sm text-gray-500">Stages</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
