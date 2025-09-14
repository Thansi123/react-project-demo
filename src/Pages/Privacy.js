import React from "react";
import { Lock, Database, Shield } from "lucide-react"; // icons

function Privacy() {
  return (
    <section
      id="privacy"
      className="p-6 mt-16 max-w-5xl mx-auto bg-white shadow-lg rounded-2xl"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Privacy Policy
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Data */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
          <Database className="mx-auto text-yellow-600 mb-3" size={32} />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Data</h3>
          <p className="text-gray-600 text-sm">
            Collects username, password, role, and investments under UAE laws.
          </p>
        </div>

        {/* Usage */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
          <Lock className="mx-auto text-yellow-600 mb-3" size={32} />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Usage</h3>
          <p className="text-gray-600 text-sm">
            Used for services and compliance, stored securely.
          </p>
        </div>

        {/* Rights */}
        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
          <Shield className="mx-auto text-yellow-600 mb-3" size={32} />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Rights</h3>
          <p className="text-gray-600 text-sm">
            Request data changes at{" "}
            <a
              href="mailto:support@crowdfunding.ae"
              className="text-yellow-600 underline"
            >
              support@crowdfunding.ae
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Privacy;
