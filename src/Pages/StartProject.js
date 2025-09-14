import React, { useState } from "react";

function StartProject() {
  const [form, setForm] = useState({
    name: "",
    desc: "",
    goal: "",
    logo: "",
    banner: "",
    category: "Tech",
    stage: "Ideation",
    timeline: "",
    team: "",
    risks: "",
    vision: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Project "${form.name}" submitted!`);
  };

  return (
    <section className="flex justify-center items-center py-12 bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Launch Project
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Free submission from Ideation to IPO.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Project Name */}
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />

          {/* Description */}
          <textarea
            name="desc"
            placeholder="Description"
            value={form.desc}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />

          {/* Funding Goal */}
          <input
            type="number"
            name="goal"
            placeholder="Funding Goal (AED)"
            value={form.goal}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />

          {/* Logo URL */}
          <input
            type="url"
            name="logo"
            placeholder="Logo URL"
            value={form.logo}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          {/* Banner URL */}
          <input
            type="url"
            name="banner"
            placeholder="Banner URL"
            value={form.banner}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          {/* Category */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option>Tech</option>
            <option>Retail</option>
            <option>Healthcare</option>
            <option>Education</option>
            <option>Finance</option>
          </select>

          {/* Stage */}
          <select
            name="stage"
            value={form.stage}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option>Ideation</option>
            <option>Prototype</option>
            <option>Growth</option>
            <option>IPO</option>
          </select>

          {/* Timeline */}
          <input
            type="text"
            name="timeline"
            placeholder="Timeline (e.g., 12 months)"
            value={form.timeline}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          {/* Team */}
          <input
            type="text"
            name="team"
            placeholder="Team (e.g., John - CEO)"
            value={form.team}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          {/* Risks */}
          <textarea
            name="risks"
            placeholder="Risks (e.g., market competition)"
            value={form.risks}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          {/* Vision */}
          <textarea
            name="vision"
            placeholder="Your Vision (e.g., Empowering youth)"
            value={form.vision}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-800 to-yellow-600 text-white py-2 rounded shadow hover:opacity-90"
          >
            Submit Project
          </button>
        </form>
      </div>
    </section>
  );
}

export default StartProject;
