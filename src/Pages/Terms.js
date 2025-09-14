import React from "react";

function Terms() {
  return (
    <section id="terms" className="flex justify-center items-center py-12 bg-gray-50">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Terms of Service
        </h2>

        <div className="space-y-6 text-center">
          {/* Eligibility */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Eligibility
            </h3>
            <p className="text-gray-600 text-sm">
              Users must be 18+ and comply with UAE laws.
            </p>
          </div>

          {/* Risks */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Risks</h3>
            <p className="text-gray-600 text-sm">
              Investments carry risks; users are liable for losses.
            </p>
          </div>

          {/* Jurisdiction */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Jurisdiction
            </h3>
            <p className="text-gray-600 text-sm">
              UAE law applies, disputes in Dubai courts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terms;
