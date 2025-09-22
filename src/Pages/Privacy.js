import React from "react";
import { Lock, Database, Shield } from "lucide-react";

function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <section
        id="privacy"
        className="p-6 mt-16 max-w-6xl mx-auto bg-white shadow-lg rounded-2xl flex-grow"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Privacy Policy
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          At EternalShares, your privacy is our priority. This Privacy Policy
          outlines how we collect, use, and protect your personal information
          in compliance with UAE data protection laws. By using our platform,
          you agree to these practices.
        </p>

        {/* Icons Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Database className="mx-auto text-yellow-600 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Data</h3>
            <p className="text-gray-600 text-sm">
              We collect essential data such as username, password, role, and
              investment history to ensure compliance and secure services.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Lock className="mx-auto text-yellow-600 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Usage</h3>
            <p className="text-gray-600 text-sm">
              Your data is used only to provide services, fulfill legal
              obligations, and improve platform functionality.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Shield className="mx-auto text-yellow-600 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rights</h3>
            <p className="text-gray-600 text-sm">
              You may request access, correction, or deletion of your data by
              contacting us at{" "}
              <a
                href="mailto:support@eternalshares.com"
                className="text-yellow-600 underline"
              >
                support@eternalshares.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Detailed Section */}
        <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
          <h3 className="text-lg font-semibold text-gray-800">Our Commitments</h3>
          <ul className="list-disc list-inside">
            <li>We never sell your data to third parties.</li>
            <li>All sensitive information is encrypted and securely stored.</li>
            <li>We comply fully with UAE’s Data Protection & Privacy regulations.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
