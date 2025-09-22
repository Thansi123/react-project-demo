import React from "react";
import { UserCheck, AlertTriangle, Scale } from "lucide-react";

function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <section
        id="terms"
        className="p-6 mt-16 max-w-6xl mx-auto bg-white shadow-lg rounded-2xl flex-grow"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Terms of Service
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          By using EternalShares, you agree to abide by our terms. These Terms
          of Service ensure fair use, protect users, and maintain compliance
          with UAE law.
        </p>

        {/* Icons Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <UserCheck className="mx-auto text-yellow-600 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Eligibility
            </h3>
            <p className="text-gray-600 text-sm">
              Users must be 18+ years old and comply with UAE laws to register
              and invest.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <AlertTriangle className="mx-auto text-yellow-600 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Risks</h3>
            <p className="text-gray-600 text-sm">
              All investments involve risk. EternalShares is not liable for any
              losses incurred.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Scale className="mx-auto text-yellow-600 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Jurisdiction
            </h3>
            <p className="text-gray-600 text-sm">
              UAE law applies. Disputes will be handled exclusively in Dubai
              courts.
            </p>
          </div>
        </div>

        {/* Detailed Section */}
        <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
          <h3 className="text-lg font-semibold text-gray-800">Key Rules</h3>
          <ul className="list-disc list-inside">
            <li>Users are responsible for keeping their account secure.</li>
            <li>Fraudulent activity will result in termination of access.</li>
            <li>We reserve the right to update these terms when necessary.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Terms;
