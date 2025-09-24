import React, { useEffect, useState, useRef } from "react";
import { Users, DollarSign, Layers } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Import the same projects (or move to a shared file later)
const sampleProjects = [
  { id: 1, name: "InnoStart", stage: "Pre-Seed", raised: 0, goal: 50000 },
  { id: 2, name: "QiTaah", stage: "Seed", raised: 0, goal: 250000 },
  { id: 3, name: "AgriNext", stage: "Pre-Seed", raised: 0, goal: 100000 },
  { id: 4, name: "FinGo", stage: "Pre-Seed", raised: 0, goal: 400000 },
  { id: 5, name: "EduNova", stage: "Pre-Seed", raised: 0, goal: 600000 },
  { id: 6, name: "FoodLink", stage: "Pre-Seed", raised: 0, goal: 1000000 },
  { id: 7, name: "GreenBuild", stage: "Ideation", raised: 0, goal: 120000 },
  { id: 8, name: "HealthX", stage: "Ideation", raised: 0, goal: 300000 },
  { id: 9, name: "TravelGo", stage: "Ideation", raised: 0, goal: 400000 },
];

const COLORS = [
  "#FACC15", // bright yellow (golden)
  "#EAB308", // deep golden yellow
  "#CA8A04", // dark mustard
  "#FDE047", // light yellow
  "#1E293B", // slate/blackish
  "#000000", // pure black
  "#A16207", // bronze/golden brown
];

// ✅ helper function to format numbers like 1K, 2.5M, 1B
const formatNumber = (num) => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};

function PlatformStats() {
  const [stats, setStats] = useState({
    founders: 0,
    investors: 0,
    raised: 0,
    stages: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // compute values dynamically
  const endValues = {
    founders: sampleProjects.length, // 1 founder per project
    investors: sampleProjects.length * 3, // demo assumption: 3 investors per project
    raised: sampleProjects.reduce((sum, p) => sum + p.raised, 0),
    stages: 7,
  };

  // group projects by stage
  const stageCounts = Array.from(
    new Set(sampleProjects.map((p) => p.stage))
  ).map((stage) => ({
    name: stage,
    value: sampleProjects.filter((p) => p.stage === stage).length,
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateStats();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const animateStats = () => {
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

  return (
    <section ref={sectionRef} className="p-6 mt-0 bg-gray-50">
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
                {formatNumber(stats.raised)} AED
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
                dataKey="value"
                isAnimationActive={true}
                animationBegin={0}
                animationDuration={1500}
                animationEasing="ease-out"
              >
                {stageCounts.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
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
