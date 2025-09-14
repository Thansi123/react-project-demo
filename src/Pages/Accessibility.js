import React from "react";

function Accessibility() {
  return (
    <section id="accessibility" className="flex justify-center items-center py-12 bg-gray-50">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Accessibility Statement
        </h2>

        <div className="space-y-6 text-center">
          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Features
            </h3>
            <p className="text-gray-600 text-sm">
              Keyboard and screen reader support per UAE guidelines.
            </p>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Support
            </h3>
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
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Improvements
            </h3>
            <p className="text-gray-600 text-sm">
              Ongoing updates based on feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accessibility;
