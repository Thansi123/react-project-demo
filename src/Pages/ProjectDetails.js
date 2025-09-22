import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Bookmark,
  BookmarkCheck,
  Share2,
  Copy,
  Twitter,
  Linkedin,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Calendar,
  Users,
  Target,
  TrendingUp,
  AlertTriangle,
  HelpCircle,
  Shield,
  Globe,
  Code,
  Clock,
  DollarSign,
  MapPin,
  Zap,
  Brain,
  Database,
  Lock
} from "lucide-react";
import rajilaImg from "../assets/rajila.jpg";
import bannerback from "../assets/banner-back.jpg";
import qitaahLogo from "../assets/logo.jpg";

const sampleProjects = [
  {
    id: 2,
    name: "QiTaah",
    stage: "Seed",
    category: "Technology",
    raised: 8300,
    goal: 300000,
    start: 100,
    banner: bannerback,
    extended: {
      subtitle: "Revolutionizing Real Estate with AI-Driven Innovation",
      description: "QiTaah is an AI-driven platform poised to redefine real estate, starting in the UAE and expanding globally. It harnesses proprietary Spider Web and Spider Mapping technologies—unmatched worldwide—to deliver precise property searches and advanced mapping. The platform introduces tenant and buyer options worldwide, integrated with an escrow system and cryptocurrency for secure, innovative transactions. With extensive automation, QiTaah envisions a future where AI optimizes real estate processes, minimizing costs and enabling seamless global scalability. Future phases will extend to the GCC and 35 additional countries, creating a unified ecosystem for sellers, agents, and developers. This disruption, akin to ChatGPT's transformation of search, positions QiTaah as a pioneer, leveraging technology to foster efficient, secure, and decentralized property markets. Its forward-thinking approach promises to reshape real estate globally, offering scalable solutions and new opportunities through automated, cryptocurrency-supported transactions.",
      advantages: [
        "Proprietary Spider Web and Spider Mapping technologies provide unique radius-based filtration and advanced mapping, unmatched globally and pending patent.",
        "Thousands of customizable filters for highly personalized property searches.",
        "Integrated escrow system for secure, seamless transaction processing."
      ],
      disadvantages: [
        "Pending licenses and API integrations (DLD/DMT) delaying immediate launch despite app readiness.",
        "Confidential technologies cannot be verified pre-investment, potentially raising investor skepticism.",
        "Low budget and minimal manpower may limit initial scalability without rapid adoption."
      ],
      qna: [
        {
          q: "How can QiTaah succeed with just 250,000 AED?",
          a: "The project is designed to run with a low operating cost, requiring minimal manpower due to extensive automation."
        },
        {
          q: "Are there competitors like Bayut or Dubizzle?",
          a: "No, they are mere alternatives, not competitors; QiTaah revolutionizes the market like ChatGPT disrupted Google."
        },
        {
          q: "What are the key technologies?",
          a: "Spider Web (radius filtration) and Spider Mapping, unique globally, pending patent, developed with proprietary language over 3761 lines of code."
        }
      ],
      market: {
        alternatives: "Yes (Bayut, Dubizzle)",
        competitors: "No"
      },
      impacts: [
        "Disrupts outdated real estate platforms with AI innovation, creating rapid market adoption.",
        "Generates new job opportunities in the delegate section for agents.",
        "Ensures secure transactions via integrated escrow, boosting user trust.",
        "Covers 6,000+ tenants through landlord networks for immediate traction."
      ],
      risks: [
        "Potential job displacement fears among real estate agents.",
        "Dependence on founder's network for initial success."
      ],
      challenges: [
        "Unimaginable hurdles overcome through sacrifice and hard work in pre-seed and seed stages.",
        "High licensing and API integration costs in Dubai.",
        "Developed proprietary tech with 27 staff over 7 months.",
        "Funding constraints pausing related projects."
      ],
      updates: {
        daily: "Yes: Time: 8:30 PM UAE Time",
        weekly: "No"
      },
      shareholders: [
        {
          name: "Rajila Beevi Kaseen Kunju",
          share: "98%",
          amount: "387,000 AED",
          dob: "20.05.1972",
          email: "rajila@eternalshares.com",
          phone: "+971581677917",
          account: "Rajila Beevi Kaseenkunju",
          photo: rajilaImg,
        },
        {
          name: "Dr. Sabeel Basheer",
          share: "2%",
          amount: "70,000 AED",
          photo: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=200&t=st=1712658111~exp=1712658711~hmac=6c6b4e5c7c8e8c6d8e8c6d8e8c6d8e8c6d8e8c6d8e8c6d8e8c6d8e8c6d8e8c6d8",
        },
      ],
      fundraising: {
        target: "300,000 AED",
        willingShare: "10%",
        return: "Monthly profit",
        investmentReturn: "90 days",
        totalInvestment: "457,000 AED",
        totalShareholders: "2",
        launched: "No",
        readyToLaunch: "Yes"
      },
      projection: {
        oneYear: "10 Million AED",
        fiveYear: "35 Million AED",
        shareValue: "3.5 Million AED"
      },
      website: "https://qitaah.com/",
      meetLink: "#"
    },
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const project = sampleProjects.find((p) => p.id === parseInt(id));

  const [amount, setAmount] = useState("");
  const [saved, setSaved] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    advantages: true,
    disadvantages: false,
    qna: false,
    impacts: false,
    risks: false,
    challenges: false
  });

  if (!project) {
    return <p className="text-center mt-20 text-gray-800">Project not found.</p>;
  }

  const percent = Math.min((project.raised / project.goal) * 100, 100);
  const numericAmount = amount ? parseFloat(amount) : 0;
  const investPercent = numericAmount > 0 ? ((numericAmount / project.goal) * 100).toFixed(2) : 0;
  // Fixed: Profit share should be the same as contribution percentage
  const profitShare = investPercent;

  const handleSave = () => {
    setSaved(!saved);
    alert(saved ? "Project removed from saved." : "Project saved successfully!");
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } else if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
    } else if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        "_blank"
      );
    } else if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${url}`, "_blank");
    }
    setShowShareOptions(false);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and empty string
    if (value === '' || /^\d+$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-yellow-900 text-gray-100">
      {/* Enhanced Banner Section with Logo - Increased top spacing */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src={project.banner}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-yellow-800/80 flex items-center pt-24">
          <div className="container mx-auto px-6 mt-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              
              {/* Text Content */}
              <div className="max-w-2xl mt-8">
                <div className="mb-6">
                  <span className="px-4 py-1 bg-yellow-500 text-gray-900 text-sm font-bold rounded-full">
                    AI & BLOCKCHAIN POWERED
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  QiTaah: Revolution
                  <span className="block text-yellow-400 mt-4">Real Estate with AI and Blockchain</span>
                </h1>
                <p className="text-xl text-yellow-100 mb-10">
                  Transforming property search and transactions through cutting-edge technology
                </p>
                
                {/* Feature Points - Proper Alignment */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white mt-8">
                  <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-yellow-500/30">
                    <MapPin size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">Starting in UAE, Expanding Globally</span>
                  </div>
                  <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-yellow-500/30">
                    <Zap size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">AI-Powered Platform</span>
                  </div>
                  <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-yellow-500/30">
                    <Lock size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">Blockchain Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl -mt-16 relative z-10">
        {/* Progress Bar */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 shadow-lg border border-yellow-600/30">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold text-white">Funding Progress</span>
            <span className="text-yellow-400 font-bold">{percent.toFixed(1)}% Funded</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-4 rounded-full"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-300">
            <span>Raised: {project.raised.toLocaleString()} AED</span>
            <span>Goal: {project.goal.toLocaleString()} AED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-yellow-600/30">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                <Target className="text-yellow-500" />
                Project Overview
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-700 p-3 rounded-lg border border-yellow-600/30">
                  <p className="text-yellow-400 text-sm font-medium">Category</p>
                  <p className="font-semibold text-white">{project.category}</p>
                </div>
                <div className="bg-gray-700 p-3 rounded-lg border border-yellow-600/30">
                  <p className="text-yellow-400 text-sm font-medium">Stage</p>
                  <p className="font-semibold text-white">{project.stage}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.extended.description}</p>
              
              {/* Advantages */}
              <div className="mb-6">
                <div 
                  className="flex justify-between items-center cursor-pointer p-3 bg-gray-700 rounded-lg border border-yellow-600/30"
                  onClick={() => toggleSection('advantages')}
                >
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-yellow-400">
                    <TrendingUp className="text-yellow-500" />
                    Advantages
                  </h3>
                  {expandedSections.advantages ? <ChevronUp className="text-yellow-500" /> : <ChevronDown className="text-yellow-500" />}
                </div>
                {expandedSections.advantages && (
                  <ul className="mt-4 space-y-3 pl-6">
                    {project.extended.advantages.map((advantage, index) => (
                      <li key={index} className="text-gray-300 list-disc">{advantage}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Disadvantages */}
              <div className="mb-6">
                <div 
                  className="flex justify-between items-center cursor-pointer p-3 bg-gray-700 rounded-lg border border-yellow-600/30"
                  onClick={() => toggleSection('disadvantages')}
                >
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-yellow-400">
                    <AlertTriangle className="text-yellow-500" />
                    Disadvantages
                  </h3>
                  {expandedSections.disadvantages ? <ChevronUp className="text-yellow-500" /> : <ChevronDown className="text-yellow-500" />}
                </div>
                {expandedSections.disadvantages && (
                  <ul className="mt-4 space-y-3 pl-6">
                    {project.extended.disadvantages.map((disadvantage, index) => (
                      <li key={index} className="text-gray-300 list-disc">{disadvantage}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Q&A */}
              <div className="mb-6">
                <div 
                  className="flex justify-between items-center cursor-pointer p-3 bg-gray-700 rounded-lg border border-yellow-600/30"
                  onClick={() => toggleSection('qna')}
                >
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-yellow-400">
                    <HelpCircle className="text-yellow-500" />
                    Questions & Answers
                  </h3>
                  {expandedSections.qna ? <ChevronUp className="text-yellow-500" /> : <ChevronDown className="text-yellow-500" />}
                </div>
                {expandedSections.qna && (
                  <div className="mt-4 space-y-4">
                    {project.extended.qna.map((item, index) => (
                      <div key={index} className="bg-gray-700 p-4 rounded-lg border border-yellow-600/30">
                        <p className="font-medium text-yellow-400">Q: {item.q}</p>
                        <p className="mt-2 text-gray-300">A: {item.a}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Market Analysis */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-yellow-400">
                  <Globe className="text-yellow-500" />
                  Market Analysis
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700 p-3 rounded-lg border border-yellow-600/30">
                    <p className="text-yellow-400 text-sm font-medium">Alternative Companies</p>
                    <p className="font-semibold text-white">{project.extended.market.alternatives}</p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg border border-yellow-600/30">
                    <p className="text-yellow-400 text-sm font-medium">Competitor Companies</p>
                    <p className="font-semibold text-white">{project.extended.market.competitors}</p>
                  </div>
                </div>
              </div>

              {/* Impacts */}
              <div className="mb-6">
                <div 
                  className="flex justify-between items-center cursor-pointer p-3 bg-gray-700 rounded-lg border border-yellow-600/30"
                  onClick={() => toggleSection('impacts')}
                >
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-yellow-400">
                    <TrendingUp className="text-yellow-500" />
                    Impacts
                  </h3>
                  {expandedSections.impacts ? <ChevronUp className="text-yellow-500" /> : <ChevronDown className="text-yellow-500" />}
                </div>
                {expandedSections.impacts && (
                  <ul className="mt-4 space-y-3 pl-6">
                    {project.extended.impacts.map((impact, index) => (
                      <li key={index} className="text-gray-300 list-disc">{impact}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Risks */}
              <div className="mb-6">
                <div 
                  className="flex justify-between items-center cursor-pointer p-3 bg-gray-700 rounded-lg border border-yellow-600/30"
                  onClick={() => toggleSection('risks')}
                >
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-yellow-400">
                    <AlertTriangle className="text-yellow-500" />
                    Risks
                  </h3>
                  {expandedSections.risks ? <ChevronUp className="text-yellow-500" /> : <ChevronDown className="text-yellow-500" />}
                </div>
                {expandedSections.risks && (
                  <ul className="mt-4 space-y-3 pl-6">
                    {project.extended.risks.map((risk, index) => (
                      <li key={index} className="text-gray-300 list-disc">{risk}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Challenges */}
              <div className="mb-6">
                <div 
                  className="flex justify-between items-center cursor-pointer p-3 bg-gray-700 rounded-lg border border-yellow-600/30"
                  onClick={() => toggleSection('challenges')}
                >
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-yellow-400">
                    <Code className="text-yellow-500" />
                    Challenges
                  </h3>
                  {expandedSections.challenges ? <ChevronUp className="text-yellow-500" /> : <ChevronDown className="text-yellow-500" />}
                </div>
                {expandedSections.challenges && (
                  <ul className="mt-4 space-y-3 pl-6">
                    {project.extended.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-300 list-disc">{challenge}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Updates */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-yellow-400">
                    <Calendar className="text-yellow-500" />
                    Update Schedule
                  </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700 p-3 rounded-lg border border-yellow-600/30">
                    <p className="text-yellow-400 text-sm font-medium">Daily Updates</p>
                    <p className="font-semibold text-white">{project.extended.updates.daily}</p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg border border-yellow-600/30">
                    <p className="text-yellow-400 text-sm font-medium">Weekly Updates</p>
                    <p className="font-semibold text-white">{project.extended.updates.weekly}</p>
                  </div>
                </div>
                <a href={project.extended.meetLink} className="inline-block mt-4 text-yellow-400 hover:underline flex items-center gap-1">
                  Join Google Meet <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="lg:col-span-1 space-y-6">
            {/* Investment Card */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-yellow-600/30 sticky top-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                <DollarSign className="text-yellow-500" />
                Invest in {project.name}
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!amount || numericAmount < project.start) {
                    alert(`Please enter an amount greater than or equal to ${project.start} AED`);
                    return;
                  }
                  alert(`Invested ${numericAmount.toLocaleString()} AED successfully in ${project.name}!`);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Investment Amount (AED)</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    min={project.start}
                    placeholder={`Min ${project.start} AED`}
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full border border-gray-600 rounded-lg p-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  {amount && numericAmount < project.start && (
                    <p className="text-red-400 text-sm mt-1">
                      Minimum investment is {project.start} AED
                    </p>
                  )}
                </div>
                
                <div className="bg-gray-700 p-4 rounded-lg border border-yellow-600/30">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Your Contribution:</span>
                    <span className="font-semibold text-yellow-400">{investPercent}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Profit Share:</span>
                    <span className="font-semibold text-yellow-400">{profitShare}%</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">(after 100% equity)</div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-800 to-yellow-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!amount || numericAmount < project.start}
                >
                  {amount && numericAmount < project.start ? 
                    `Minimum ${project.start} AED` : 
                    "Confirm Investment"
                  }
                </button>
              </form>
            </div>

            {/* Financial Overview */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-yellow-600/30">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                <TrendingUp className="text-yellow-500" />
                Financial Overview
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Fundraising</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Target:</span>
                      <span className="font-medium text-white">{project.extended.fundraising.target}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Willing Share:</span>
                      <span className="font-medium text-white">{project.extended.fundraising.willingShare}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Return:</span>
                      <span className="font-medium text-white">{project.extended.fundraising.return}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Investment Return:</span>
                      <span className="font-medium text-white">{project.extended.fundraising.investmentReturn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total Investment:</span>
                      <span className="font-medium text-white">{project.extended.fundraising.totalInvestment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Launched:</span>
                      <span className="font-medium text-white">{project.extended.fundraising.launched}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Ready to Launch:</span>
                      <span className="font-medium text-white">{project.extended.fundraising.readyToLaunch}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Projections</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Share Value:</span>
                      <span className="font-medium text-white">{project.extended.projection.shareValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">1 Year:</span>
                      <span className="font-semibold text-yellow-400">{project.extended.projection.oneYear}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">5 Year:</span>
                      <span className="font-semibold text-yellow-400">{project.extended.projection.fiveYear}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <a
                href={project.extended.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center w-full bg-gray-700 text-yellow-400 py-2 rounded-lg hover:bg-gray-600 transition-all font-medium"
              >
                Visit Website <ExternalLink size={16} className="ml-2" />
              </a>
            </div>

            {/* Shareholders */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-yellow-600/30">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                <Users className="text-yellow-500" />
                Shareholders
              </h2>
              <div className="space-y-4">
                {project.extended.shareholders.map((sh, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg border border-yellow-600/30">
                    <div className="flex items-center gap-4 mb-3">
                      <img
                        src={sh.photo}
                        alt={sh.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-yellow-500/50 shadow-sm"
                      />
                      <div>
                        <p className="font-semibold text-white">{sh.name}</p>
                        <p className="text-sm text-gray-300">Share: {sh.share}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-300">
                      <p>Amount: {sh.amount}</p>
                      {sh.email && <p className="truncate">Email: {sh.email}</p>}
                      {sh.phone && <p>Phone: {sh.phone}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 bg-gray-700 rounded-lg py-3 hover:bg-gray-600 transition-all text-gray-300 font-medium"
              >
                {saved ? (
                  <>
                    <BookmarkCheck size={18} /> Saved
                  </>
                ) : (
                  <>
                    <Bookmark size={18} /> Save
                  </>
                )}
              </button>
              
              <div className="relative flex-1">
                <button
                  onClick={() => setShowShareOptions(!showShareOptions)}
                  className="flex items-center justify-center gap-2 w-full bg-gray-700 rounded-lg py-3 hover:bg-gray-600 transition-all text-gray-300 font-medium"
                >
                  <Share2 size={18} /> Share
                </button>
                
                {showShareOptions && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-gray-800 border border-yellow-600/30 rounded-lg shadow-lg p-3 grid grid-cols-2 gap-2 z-50">
                    <button
                      onClick={() => handleShare("copy")}
                      className="flex items-center justify-center gap-2 p-2 text-sm hover:bg-gray-700 rounded text-gray-300"
                    >
                      <Copy size={16} /> Copy
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex items-center justify-center gap-2 p-2 text-sm hover:bg-gray-700 rounded text-gray-300"
                    >
                      <Twitter size={16} /> Twitter
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="flex items-center justify-center gap-2 p-2 text-sm hover:bg-gray-700 rounded text-gray-300"
                    >
                      <Linkedin size={16} /> LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="flex items-center justify-center gap-2 p-2 text-sm hover:bg-gray-700 rounded text-gray-300"
                    >
                      <MessageCircle size={16} /> WhatsApp
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;