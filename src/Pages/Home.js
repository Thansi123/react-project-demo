import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // for animations

function Home() {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-100/40 via-white to-yellow-50 blur-2xl" />

      {/* Hero Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80"
        alt="Crowdfunding Hero"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 relative z-10"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Crowdfunding <span className="text-yellow-600">Prosperity</span>
      </motion.h1>

      <motion.p
        className="text-base md:text-lg text-gray-700 max-w-2xl mb-10 relative z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Empower founders with a vision, supporting startups from Ideation to IPO
        with verified projects —{" "}
        <span className="font-semibold">100% non-profit.</span>
      </motion.p>

      {/* Founder / Investor Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* For Founders Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between transform hover:scale-105 hover:shadow-2xl transition duration-300">
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/brainstorming-icon-beautiful-meticulously-designed-389132601.jpg"
              alt="Founders"
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              For Founders
            </h2>
            <p className="text-gray-600 mb-6">
              Launch verified projects and share{" "}
              <span className="font-semibold">10% equity</span> with the platform —
              no personal funding loss.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-auto">
            <a
              href="https://chat.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-3 rounded-xl font-medium shadow hover:opacity-90 transition"
            >
              Join Group
            </a>
            <button
              onClick={() => navigate("/start-project")}
              className="flex-1 bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-5 py-3 rounded-xl font-medium shadow hover:opacity-90 transition"
            >
              Start Project
            </button>
          </div>
        </div>

        {/* For Investors Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between transform hover:scale-105 hover:shadow-2xl transition duration-300">
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/156/334/non_2x/real-estate-and-property-investment-logo-design-symbol-template-free-free-vector.jpg"
              alt="Investors"
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              For Investors
            </h2>
            <p className="text-gray-600 mb-6">
              Invest from <span className="font-semibold">100 AED</span> in verified
              projects and earn dividends with up to{" "}
              <span className="font-semibold">90% profit share</span> annually.
            </p>
          </div>
          <button
            onClick={() => navigate("/projects")}
            className="mt-auto bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-5 py-3 rounded-xl font-medium shadow hover:opacity-90 transition"
          >
            Invest Now
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
