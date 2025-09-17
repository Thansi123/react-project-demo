import React from "react";
import { UserCheck, AlertTriangle, Scale } from "lucide-react"; // icons

function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <section
        id="terms"
        className="p-6 mt-16 max-w-5xl mx-auto bg-white shadow-lg rounded-2xl flex-grow"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Terms of Service
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Eligibility */}
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <UserCheck className="mx-auto text-yellow-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Eligibility
            </h3>
            <p className="text-gray-600 text-sm">
              Users must be 18+ and comply with UAE laws.
            </p>
          </div>

          {/* Risks */}
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <AlertTriangle className="mx-auto text-yellow-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Risks</h3>
            <p className="text-gray-600 text-sm">
              Investments carry risks; users are liable for losses.
            </p>
          </div>

          {/* Jurisdiction */}
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Scale className="mx-auto text-yellow-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Jurisdiction
            </h3>
            <p className="text-gray-600 text-sm">
              UAE law applies; disputes handled in Dubai courts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
