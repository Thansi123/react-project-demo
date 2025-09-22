import React from "react";
import { Keyboard, Headphones, RefreshCcw } from "lucide-react"; // icons

function Accessibility() {
  return (
    <div className="min-h-screen flex flex-col">
      <section
        id="accessibility"
        className="p-6 mt-16 max-w-5xl mx-auto bg-white shadow-lg rounded-2xl flex-grow"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Accessibility Statement
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          We are committed to making our platform inclusive and accessible for
          everyone, including individuals with disabilities. Our goal is to
          ensure equal access to investment opportunities by following
          international accessibility standards and UAE digital inclusion
          guidelines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Features */}
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Keyboard className="mx-auto text-yellow-600 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Accessible Features
            </h3>
            <p className="text-gray-600 text-sm">
              Full keyboard navigation, ARIA labels, and screen reader support
              are implemented to improve usability for all.
            </p>
          </div>

          {/* Support */}
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Headphones className="mx-auto text-yellow-600 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Accessibility Support
            </h3>
            <p className="text-gray-600 text-sm">
              If you face accessibility issues, contact us at{" "}
              <a
                href="mailto:support@crowdfunding.ae"
                className="text-yellow-600 underline"
              >
                support@crowdfunding.ae
              </a>
              . We aim to respond within 48 hours.
            </p>
          </div>

          {/* Improvements */}
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <RefreshCcw className="mx-auto text-yellow-600 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Continuous Improvements
            </h3>
            <p className="text-gray-600 text-sm">
              We regularly test our platform and update accessibility features
              based on user feedback and new standards.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Our Commitment
          </h3>
          <p className="text-gray-600 text-sm max-w-3xl mx-auto">
            Accessibility is an ongoing effort. We are dedicated to ensuring
            that every user, regardless of ability, has a seamless experience on
            our platform.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Accessibility;
