import React from "react";
import { Target, Eye, Mail, ShieldCheck, Users, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <section
        id="about"
        className="p-6 mt-16 max-w-6xl mx-auto bg-white shadow-lg rounded-2xl flex-grow"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          EternalShares was founded in 2025 with a vision to redefine
          crowdfunding in the UAE. We empower startups and investors by
          providing a transparent, secure, and growth-oriented platform.
          From ideation to IPO, we aim to build trust and create long-term
          value for all stakeholders.
        </p>

        {/* Mission - Vision - Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Target className="mx-auto text-yellow-600 mb-3" size={40} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission</h3>
            <p className="text-gray-600 text-sm">
              Empower startups from ideation to IPO with verified projects,
              transparency, and global investor access.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Eye className="mx-auto text-yellow-600 mb-3" size={40} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision</h3>
            <p className="text-gray-600 text-sm">
              Build a thriving UAE economy by enabling profitable investments
              for investors and exponential growth for startups.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <Mail className="mx-auto text-yellow-600 mb-3" size={40} />
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

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Why Choose EternalShares?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-yellow-600 mb-3" size={36} />
              <h4 className="font-semibold text-gray-800 mb-2">Transparency</h4>
              <p className="text-gray-600 text-sm">
                Every project undergoes a strict verification process to ensure
                trust and authenticity.
              </p>
            </div>
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition">
              <Users className="mx-auto text-yellow-600 mb-3" size={36} />
              <h4 className="font-semibold text-gray-800 mb-2">Community</h4>
              <p className="text-gray-600 text-sm">
                We foster collaboration between startups, investors, and
                mentors to create sustainable success.
              </p>
            </div>
            <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition">
              <TrendingUp className="mx-auto text-yellow-600 mb-3" size={36} />
              <h4 className="font-semibold text-gray-800 mb-2">Growth</h4>
              <p className="text-gray-600 text-sm">
                Our platform ensures startups receive the right exposure and
                investors achieve meaningful returns.
              </p>
            </div>
          </div>
        </div>

        {/* Journey / Future */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Our Journey Ahead
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We are committed to becoming the UAE’s most trusted crowdfunding
            ecosystem. Our focus is on empowering entrepreneurs with the tools
            they need, while giving investors the confidence of secure and
            transparent funding opportunities. Together, we aim to create a
            future where innovation thrives, businesses grow, and communities
            prosper.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
