import React, { useState } from "react";

function IdeationPage() {
  const [investment, setInvestment] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [shareholders, setShareholders] = useState("");
  const [shareholderCount, setShareholderCount] = useState("");
  const [shareholderName, setShareholderName] = useState("");
  const [shareholderPhoto, setShareholderPhoto] = useState(null);

  return (
    <section className="min-h-screen flex justify-center items-center py-12 px-6 bg-gradient-to-b from-white via-yellow-50 to-white">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-6">
          Ideation Stage
        </h2>

        {/* Investment Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">1. Total Investment</h3>
          <div className="flex gap-4">
            <button
              onClick={() => setInvestment("yes")}
              className={`px-6 py-2 rounded-xl font-semibold transition ${
                investment === "yes"
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setInvestment("no")}
              className={`px-6 py-2 rounded-xl font-semibold transition ${
                investment === "no"
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              No
            </button>
          </div>

          {investment === "yes" && (
            <input
              type="number"
              placeholder="How much?"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              className="mt-4 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          )}
        </div>

        {/* Shareholders Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">2. Total Shareholders</h3>
          <div className="flex gap-4">
            <button
              onClick={() => setShareholders("yes")}
              className={`px-6 py-2 rounded-xl font-semibold transition ${
                shareholders === "yes"
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setShareholders("no")}
              className={`px-6 py-2 rounded-xl font-semibold transition ${
                shareholders === "no"
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              No
            </button>
          </div>

          {shareholders === "yes" && (
            <div className="space-y-4 mt-4">
              <input
                type="number"
                placeholder="How many?"
                value={shareholderCount}
                onChange={(e) => setShareholderCount(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
              <input
                type="text"
                placeholder="Name of the Shareholder"
                value={shareholderName}
                onChange={(e) => setShareholderName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setShareholderPhoto(e.target.files[0])}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
              {shareholderPhoto && (
                <img
                  src={URL.createObjectURL(shareholderPhoto)}
                  alt="Shareholder"
                  className="w-32 h-32 rounded-xl object-cover shadow-md"
                />
              )}
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-8">
          <button className="bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default IdeationPage;
