import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function StagePage() {
  const { stageId } = useParams();

  // Stage-specific form structure
  const stageForms = {
    "ideation": {
      title: "Ideation Stage",
      fields: [
        { label: "Total Investment (Amount)", type: "number", name: "investment" },
        { label: "Do you have shareholders?", type: "select", name: "hasShareholders", options: ["Yes", "No"] },
      ],
    },
    "pre-seed": {
      title: "Pre-Seed Stage",
      fields: [
        { label: "Total Investment (Amount)", type: "number", name: "investment" },
        { label: "Number of Shareholders", type: "number", name: "shareholders" },
      ],
    },
    "seed": {
      title: "Seed Stage",
      fields: [
        { label: "Total Investment (Amount)", type: "number", name: "investment" },
        { label: "Number of Shareholders", type: "number", name: "shareholders" },
        { label: "Launched / Launching", type: "select", name: "launch", options: ["Launched", "Launching"] },
        { label: "Launch Date / Expected Date", type: "date", name: "launchDate" },
      ],
    },
    "series-a": {
      title: "Series A Stage",
      fields: [
        { label: "Total Investment (Amount)", type: "number", name: "investment" },
        { label: "Number of Shareholders", type: "number", name: "shareholders" },
        { label: "Total Revenue (Year-wise)", type: "number", name: "revenue" },
        { label: "Profit (Year-wise)", type: "number", name: "profit" },
        { label: "Next 5 Year Projection (in AED)", type: "number", name: "projection" },
      ],
    },
    "series-b": {
      title: "Series B Stage",
      fields: [
        { label: "Total Investment (Amount)", type: "number", name: "investment" },
        { label: "Number of Shareholders", type: "number", name: "shareholders" },
        { label: "Total Revenue (Year-wise)", type: "number", name: "revenue" },
        { label: "Profit (Year-wise)", type: "number", name: "profit" },
        { label: "Next 5 Year Projection (in AED)", type: "number", name: "projection" },
      ],
    },
    "series-c": {
      title: "Series C Stage",
      fields: [
        { label: "Total Investment (Amount)", type: "number", name: "investment" },
        { label: "Number of Shareholders", type: "number", name: "shareholders" },
        { label: "Total Revenue (Year-wise)", type: "number", name: "revenue" },
        { label: "Profit (Year-wise)", type: "number", name: "profit" },
        { label: "Next 5 Year Projection (in AED)", type: "number", name: "projection" },
      ],
    },
    "ipo": {
      title: "IPO Stage",
      fields: [
        { label: "Total No. of Public Shares (%)", type: "number", name: "publicShares" },
        { label: "Total Investment (Amount)", type: "number", name: "investment" },
        { label: "Number of Shareholders", type: "number", name: "shareholders" },
        { label: "Total Revenue (Year-wise)", type: "number", name: "revenue" },
        { label: "Profit (Year-wise)", type: "number", name: "profit" },
        { label: "Next 5 Year Projection (in AED)", type: "number", name: "projection" },
      ],
    },
  };

  const content = stageForms[stageId] || { title: "Stage Not Found", fields: [] };

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted! " + JSON.stringify(formData, null, 2));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-yellow-50 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          {content.title}
        </h1>

        {content.fields.length > 0 ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {content.fields.map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <label className="mb-2 font-medium text-gray-700">
                  {field.label}
                </label>

                {field.type === "select" ? (
                  <select
                    name={field.name}
                    onChange={handleChange}
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select</option>
                    {field.options.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    onChange={handleChange}
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-gray-800 to-yellow-600 text-white py-3 rounded-xl shadow-lg"
            >
              Submit
            </motion.button>
          </form>
        ) : (
          <p className="text-center text-gray-600">No form available for this stage.</p>
        )}
      </motion.div>
    </section>
  );
}

export default StagePage;
