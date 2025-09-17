import React from "react";
import { Target, Eye, Mail } from "lucide-react"; // icons
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <section
        id="about"
        className="p-6 mt-16 max-w-5xl mx-auto bg-white shadow-lg rounded-2xl flex-grow"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Mission */}
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Target className="mx-auto text-yellow-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission</h3>
            <p className="text-gray-600 text-sm">
              Founded in 2025, we empower startups from Ideation to IPO with
              transparent and verified projects.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Eye className="mx-auto text-yellow-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision</h3>
            <p className="text-gray-600 text-sm">
              To foster a thriving UAE economy by ensuring profitable investments
              for investors and growth for startups.
            </p>
          </div>

          {/* Contact */}
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Mail className="mx-auto text-yellow-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact</h3>
            <p className="text-gray-600 text-sm">
              Reach us at{" "}
              <a
                href="mailto:support@crowdfunding.ae"
                className="text-yellow-600 underline"
              >
                support@crowdfunding.ae
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
