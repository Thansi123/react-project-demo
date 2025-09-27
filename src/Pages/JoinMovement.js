import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function JoinMovement() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const flowchartSteps = [
    {
      title: "Platform Registration",
      description: "100% transparent platform setup",
      icon: "🏛️",
      color: "from-gray-900 to-gray-800",
      details: "Founder signs up with basic details and project information"
    },
    {
      title: "Project Submission",
      description: "Detailed project review and validation",
      icon: "📄",
      color: "from-yellow-600 to-yellow-500",
      details: "AI-driven assessment of feasibility and risks"
    },
    {
      title: "Equity Agreement",
      description: "10-50% shares with EternalShares",
      icon: "🤝",
      color: "from-gray-900 to-yellow-600",
      details: "Contract signing and equity transfer agreement"
    },
    {
      title: "Project Listing",
      description: "Live on platform for investors",
      icon: "🚀",
      color: "from-yellow-600 to-gray-900",
      details: "Project goes live with full transparency"
    },
    {
      title: "Investor Engagement",
      description: "Direct meetings and discussions",
      icon: "👥",
      color: "from-gray-800 to-yellow-500",
      details: "Google Meet sessions with founders"
    },
    {
      title: "Investment Process",
      description: "Minimum AED 100 investment",
      icon: "💰",
      color: "from-yellow-500 to-gray-900",
      details: "Secure escrow protection for all funds"
    },
    {
      title: "Funds Release",
      description: "Escrow to founder transfer",
      icon: "🔓",
      color: "from-gray-900 to-yellow-600",
      details: "Funds released upon meeting goals"
    },
    {
      title: "Monitoring & Updates",
      description: "Daily activity monitoring",
      icon: "📊",
      color: "from-yellow-600 to-gray-800",
      details: "CPA auditing and regular progress updates"
    },
    {
      title: "Profit Distribution",
      description: "10% platform, 90% investors",
      icon: "📈",
      color: "from-gray-900 to-yellow-500",
      details: "Monthly/Yearly profit sharing"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % flowchartSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, flowchartSteps.length]);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % flowchartSteps.length);
    setIsAutoPlaying(false);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + flowchartSteps.length) % flowchartSteps.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent">
            Join the Movement
          </h2>
          <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            EternalShares takes <span className="font-semibold text-yellow-600">10-50% equity</span> from founders, 
            ensuring investor dividends from profits with <span className="font-semibold text-gray-900">100% transparency</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-gray-900 to-yellow-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-lg sm:shadow-2xl hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              💼 Start Investing
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-yellow-600 to-gray-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-lg sm:shadow-2xl hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              🚀 Launch Project
            </motion.button>
          </div>
        </motion.div>

        {/* Flowchart Section */}
        <motion.div 
          className="bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl sm:shadow-2xl border border-gray-200 mx-2 sm:mx-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Transparent Process
            </h3>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto px-2">
              Step-by-step journey from project submission to profit distribution
            </p>
          </div>

          {/* Desktop Flowchart */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 via-yellow-600 to-gray-900 transform -translate-y-1/2 z-0" />
              
              {/* Steps Container */}
              <div className="relative z-10 flex justify-between items-center">
                {flowchartSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Step Circle */}
                    <motion.div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-xl sm:text-2xl text-white shadow-2xl border-4 border-white cursor-pointer transform transition-all duration-300 ${
                        activeStep === index ? 'scale-110 shadow-3xl ring-4 ring-yellow-400' : 'scale-100'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => {
                        setActiveStep(index);
                        setIsAutoPlaying(false);
                      }}
                    >
                      {step.icon}
                    </motion.div>
                    
                    {/* Step Info */}
                    <motion.div 
                      className="mt-3 sm:mt-4 text-center max-w-[120px] sm:max-w-[140px]"
                      animate={{ opacity: activeStep === index ? 1 : 0.7 }}
                    >
                      <div className={`font-semibold text-xs sm:text-sm mb-1 ${
                        activeStep === index ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Flowchart - Improved */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Connection Line - Hidden on very small screens */}
              <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-900 via-yellow-600 to-gray-900 z-0" />
              
              {/* Steps Container */}
              <div className="relative z-10 space-y-4 sm:space-y-6">
                {flowchartSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 sm:gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Step Circle */}
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-lg sm:text-xl text-white shadow-lg border-3 border-white cursor-pointer transform transition-all duration-300 flex-shrink-0 ${
                        activeStep === index ? 'scale-110 shadow-xl ring-3 ring-yellow-400' : 'scale-100'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => {
                        setActiveStep(index);
                        setIsAutoPlaying(false);
                      }}
                    >
                      {step.icon}
                    </motion.div>
                    
                    {/* Step Info */}
                    <motion.div 
                      className="flex-1 min-w-0 pt-1"
                      animate={{ opacity: activeStep === index ? 1 : 0.8 }}
                    >
                      <div className={`font-semibold text-sm sm:text-base mb-1 ${
                        activeStep === index ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 leading-tight">
                        {step.description}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Step Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-6 sm:mt-8 lg:mt-12 bg-gradient-to-r from-gray-50 to-yellow-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-yellow-200"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{flowchartSteps[activeStep].icon}</div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {flowchartSteps[activeStep].title}
                </h4>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                  {flowchartSteps[activeStep].details}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls - Mobile Optimized */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevStep}
              className="p-3 sm:p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 shadow-md text-lg sm:text-xl"
            >
              ←
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextStep}
              className="p-3 sm:p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 shadow-md text-lg sm:text-xl"
            >
              →
            </motion.button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
              {flowchartSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveStep(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-yellow-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Features - Mobile Optimized */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              icon: "🛡️",
              title: "Founder Protection",
              description: "Zero tolerance for investor misconduct, ensuring respectful treatment",
              color: "from-gray-900 to-gray-800"
            },
            {
              icon: "📊",
              title: "Real-time Transparency",
              description: "Live dashboards and Google Meet updates for complete visibility",
              color: "from-yellow-600 to-yellow-500"
            },
            {
              icon: "💰",
              title: "Secure Escrow",
              description: "Funds protected until project milestones are achieved",
              color: "from-gray-900 to-yellow-600"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-xl sm:text-2xl text-white mx-auto mb-3 sm:mb-4 shadow-md`}>
                {feature.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default JoinMovement;