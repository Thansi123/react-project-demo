import React from "react";
import { Keyboard, Headphones, RefreshCcw } from "lucide-react"; // icons

function Accessibility() {
  
  return (
    <section
      id="accessibility"
      className="p-6 mt-16 max-w-5xl mx-auto bg-white shadow-lg rounded-2xl"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Accessibility Statement
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Features */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
          <Keyboard className="mx-auto text-yellow-600 mb-3" size={32} />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Features</h3>
          <p className="text-gray-600 text-sm">
            Keyboard and screen reader support per UAE guidelines.
          </p>
        </div>

        {/* Support */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
          <Headphones className="mx-auto text-yellow-600 mb-3" size={32} />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Support</h3>
          <p className="text-gray-600 text-sm">
            Issues resolved in 48 hours; report to{" "}
            <a
              href="mailto:support@crowdfunding.ae"
              className="text-yellow-600 underline"
            >
              support@crowdfunding.ae
            </a>
            .
          </p>
        </div>

        {/* Improvements */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
          <RefreshCcw className="mx-auto text-yellow-600 mb-3" size={32} />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Improvements
          </h3>
          <p className="text-gray-600 text-sm">
            Ongoing updates based on user feedback.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Accessibility;
