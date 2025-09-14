import React, { useEffect, useState, useRef } from "react";
import { Users, DollarSign, Layers } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

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

const COLORS = ["#FACC15", "#F59E0B", "#1E293B"];

function PlatformStats() {
  const [stats, setStats] = useState({
    founders: 0,
    investors: 0,
    raised: 0,
    stages: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateStats();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 } // trigger when 50% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const animateStats = () => {
    const endValues = {
      founders: 3,
      investors: 10,
      raised: 457000,
      stages: 3,
    };

    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setStats({
        founders: Math.floor(progress * endValues.founders),
        investors: Math.floor(progress * endValues.investors),
        raised: Math.floor(progress * endValues.raised),
        stages: Math.floor(progress * endValues.stages),
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

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

  return (
    <section ref={sectionRef} className="p-6 mt-16 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
        Platform Statistics
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Stats cards */}
        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Key Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Users className="text-yellow-600 mx-auto mb-2" />
              <p className="font-semibold text-xl">{stats.founders}</p>
              <p className="text-sm text-gray-500">Founders</p>
            </div>
            <div>
              <Users className="text-yellow-600 mx-auto mb-2" />
              <p className="font-semibold text-xl">{stats.investors}</p>
              <p className="text-sm text-gray-500">Investors</p>
            </div>
            <div>
              <DollarSign className="text-yellow-600 mx-auto mb-2" />
              <p className="font-semibold text-xl">
                {stats.raised.toLocaleString()} AED
              </p>
              <p className="text-sm text-gray-500">Raised</p>
            </div>
            <div>
              <Layers className="text-yellow-600 mx-auto mb-2" />
              <p className="font-semibold text-xl">{stats.stages}</p>
              <p className="text-sm text-gray-500">Stages</p>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Projects by Stage
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={stageCounts}
                cx="50%"
                cy="50%"
                outerRadius={90}
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
      </div>
    </section>
  );
}

export default PlatformStats;
