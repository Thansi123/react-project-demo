import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase"; // Adjust path as needed
import {
  User,
  DollarSign,
  PieChart,
  Calendar,
  MessageCircle,
  Video,
  TrendingUp,
  Download,
  Settings,
  LogOut,
  Bell,
  Search,
  Filter,
  Eye,
  Star,
  Clock,
  MapPin,
  Target,
  Menu,
  X
} from "lucide-react";

const InvestorDashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Investor data - now dynamically populated from Firebase
  const [investor, setInvestor] = useState({
    name: "Loading...",
    email: "Loading...",
    phone: "+971 50 123 4567",
    location: "Dubai, UAE",
    totalInvested: 0,
    totalProjects: 0, // Changed from 1 to 0
    profileCompletion: 0,
    riskAppetite: "Medium",
    preferredSectors: ["Real Estate", "Technology"]
  });

  // Only QiTaah investment data
  const [investments, setInvestments] = useState([
    {
      id: 1,
      projectName: "QiTaah",
      amount: 0,
      date: "2024-03-15",
      sharePercentage: 0,
      currentValue: 0,
      return: 0,
      status: "Active",
      category: "Technology",
      stage: "Seed",
      meetingLink: "https://meet.google.com/oqd-muyp-ttm",
      description: "AI-driven platform redefining real estate with proprietary Spider Web and Spider Mapping technologies.",
      progress: 0
    }
  ]);

  // Feedback state
  const [feedback, setFeedback] = useState({
    rating: 0,
    comment: "",
    meetingId: ""
  });

  const [activeTab, setActiveTab] = useState("overview");
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetch user data on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        // Update investor data with actual user info from Firebase
        setInvestor(prev => ({
          ...prev,
          name: user.displayName || "Investor",
          email: user.email || "user@example.com"
        }));
        setLoading(false);
      } else {
        // Redirect to login if not authenticated
        window.location.href = '/login';
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      window.location.href = '/login';
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed: " + error.message);
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your ${feedback.rating}-star feedback for QiTaah!`);
    setFeedback({ rating: 0, comment: "", meetingId: "" });
    setShowFeedbackModal(false);
  };

  const totalReturn = investments.reduce((sum, investment) => sum + investment.return, 0);
  const totalCurrentValue = investments.reduce((sum, investment) => sum + investment.currentValue, 0);
  const qitaahInvestment = investments[0];

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Show error state if no user found (shouldn't happen due to redirect, but just in case)
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Unable to load user data</p>
          <button 
            onClick={() => window.location.href = '/login'}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header - Always visible */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-500 p-2 rounded-lg">
              <Target className="text-white" size={20} />
            </div>
            <h1 className="text-lg font-semibold">Investor Dashboard</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hidden md:flex">
              <Bell size={18} />
            </button>
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hidden md:flex">
              <span className="text-white font-semibold text-xs">
                {investor.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-b border-gray-200 animate-in slide-in-from-top duration-300">
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {investor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold truncate">{investor.name}</div>
                <div className="text-sm text-gray-600 truncate">{investor.email}</div>
              </div>
            </div>
            
            <nav className="space-y-1">
              <button
                onClick={() => { setActiveTab("overview"); setMobileMenuOpen(false); }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${activeTab === "overview" ? "bg-yellow-50 text-yellow-700 border border-yellow-200" : "hover:bg-gray-100"}`}
              >
                <PieChart size={18} />
                <span className="font-medium">Overview</span>
              </button>
              <button
                onClick={() => { setActiveTab("investments"); setMobileMenuOpen(false); }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${activeTab === "investments" ? "bg-yellow-50 text-yellow-700 border border-yellow-200" : "hover:bg-gray-100"}`}
              >
                <DollarSign size={18} />
                <span className="font-medium">My Investment</span>
              </button>
              <button
                onClick={() => { setActiveTab("meetings"); setMobileMenuOpen(false); }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${activeTab === "meetings" ? "bg-yellow-50 text-yellow-700 border border-yellow-200" : "hover:bg-gray-100"}`}
              >
                <Video size={18} />
                <span className="font-medium">Meetings</span>
              </button>
            </nav>

            {/* Mobile Logout Button */}
            <button 
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 p-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors border border-transparent hover:border-red-200"
            >
              <LogOut size={18} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {investor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h2 className="text-lg font-semibold truncate">{investor.name}</h2>
                <p className="text-gray-600 text-sm truncate">{investor.email}</p>
                <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                  <MapPin size={14} className="mr-1" />
                  {investor.location}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Risk appetite</span>
                  <span className="font-semibold text-sm bg-gray-100 px-2 py-1 rounded">{investor.riskAppetite}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Profile completion</span>
                  <span className="font-semibold text-sm">{investor.profileCompletion}%</span>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${activeTab === "overview" ? "bg-yellow-50 text-yellow-700 border border-yellow-200" : "hover:bg-gray-50"}`}
                >
                  <PieChart size={18} />
                  <span className="font-medium">Overview</span>
                </button>
                <button
                  onClick={() => setActiveTab("investments")}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${activeTab === "investments" ? "bg-yellow-50 text-yellow-700 border border-yellow-200" : "hover:bg-gray-50"}`}
                >
                  <DollarSign size={18} />
                  <span className="font-medium">My Investment</span>
                </button>
                <button
                  onClick={() => setActiveTab("meetings")}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${activeTab === "meetings" ? "bg-yellow-50 text-yellow-700 border border-yellow-200" : "hover:bg-gray-50"}`}
                >
                  <Video size={18} />
                  <span className="font-medium">Meetings</span>
                </button>
              </nav>

              <button 
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 p-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors mt-6 border border-transparent hover:border-red-200"
              >
                <LogOut size={18} />
                <span className="font-medium">Logout</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold mb-4 text-gray-800">Quick Stats</h3>
              <div className="space-y-3">
                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                  <div className="text-yellow-800 font-semibold text-lg">AED {investor.totalInvested.toLocaleString()}</div>
                  <div className="text-sm text-yellow-600">Total Invested</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <div className="text-blue-800 font-semibold text-lg">{investor.totalProjects} Project</div>
                  <div className="text-sm text-blue-600">Active Investment</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                  <div className="text-green-800 font-semibold text-lg">{totalReturn}%</div>
                  <div className="text-sm text-green-600">Current Return</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Mobile Quick Stats */}
            <div className="lg:hidden grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-base font-bold text-gray-800">AED {investor.totalInvested.toLocaleString()}</div>
                <div className="text-xs text-gray-600 mt-1">Total Invested</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-base font-bold text-blue-800">{investor.totalProjects}</div>
                <div className="text-xs text-gray-600 mt-1">Projects</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-base font-bold text-green-800">{totalReturn}%</div>
                <div className="text-xs text-gray-600 mt-1">Return</div>
              </div>
            </div>

            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800">Portfolio Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="text-xl font-bold text-gray-800">AED {totalCurrentValue.toLocaleString()}</div>
                      <div className="text-sm text-gray-600 mt-1">Portfolio Value</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="text-xl font-bold text-green-600">{totalReturn}%</div>
                      <div className="text-sm text-gray-600 mt-1">Total Return</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="text-xl font-bold text-gray-800">0</div>
                      <div className="text-sm text-gray-600 mt-1">Active Investment</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Funding Progress</span>
                          <span className="text-sm font-semibold text-gray-800">{qitaahInvestment.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${qitaahInvestment.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-2 text-gray-700">Project Description</div>
                        <p className="text-sm text-gray-600 leading-relaxed">{qitaahInvestment.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800">Recent Activity</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center space-x-3 min-w-0 flex-1">
                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <DollarSign className="text-yellow-600" size={16} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-sm truncate">{qitaahInvestment.projectName}</div>
                          <div className="text-xs text-gray-600 truncate">Invested AED {qitaahInvestment.amount.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-3">
                        <div className={`text-sm font-semibold ${qitaahInvestment.return >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {qitaahInvestment.return}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Investments Tab */}
            {activeTab === "investments" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">My Investment</h2>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4 mb-4 border border-yellow-100">
                    <h3 className="font-semibold text-base mb-3 text-yellow-800">QiTaah Investment Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs text-yellow-700 font-medium">Investment Amount</div>
                        <div className="font-semibold text-sm text-gray-800">AED {qitaahInvestment.amount.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-yellow-700 font-medium">Share Percentage</div>
                        <div className="font-semibold text-sm text-gray-800">{qitaahInvestment.sharePercentage}%</div>
                      </div>
                      <div>
                        <div className="text-xs text-yellow-700 font-medium">Current Value</div>
                        <div className="font-semibold text-sm text-gray-800">AED {qitaahInvestment.currentValue.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-yellow-700 font-medium">Return</div>
                        <div className="font-semibold text-sm text-green-600">{qitaahInvestment.return}%</div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="text-xs text-yellow-700 font-medium">Investor</div>
                        <div className="font-semibold text-sm text-gray-800">{investor.name}</div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="text-xs text-yellow-700 font-medium">Status</div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                          {qitaahInvestment.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-base mb-3 text-gray-800">Project Information</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-600 font-medium">Category</div>
                        <div className="font-semibold text-sm text-gray-800">{qitaahInvestment.category}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 font-medium">Stage</div>
                        <div className="font-semibold text-sm text-gray-800">{qitaahInvestment.stage}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 font-medium">Description</div>
                        <div className="text-xs text-gray-700 leading-relaxed">{qitaahInvestment.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Meetings Tab */}
            {activeTab === "meetings" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800">Scheduled Meetings</h2>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4 bg-white">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base text-gray-800 truncate">{qitaahInvestment.projectName} - Progress Update</h3>
                          <p className="text-xs text-gray-500 mt-1">Attendee: {investor.name}</p>
                        </div>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium whitespace-nowrap self-start">
                          Upcoming
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center space-x-2 text-xs text-gray-600">
                          <Video size={14} />
                          <span>Google Meet</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <a
                            href={qitaahInvestment.meetingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 text-center transition-colors font-medium"
                          >
                            Join Meeting
                          </a>
                          <button
                            onClick={() => {
                              setSelectedMeeting(qitaahInvestment);
                              setShowFeedbackModal(true);
                            }}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors font-medium"
                          >
                            Give Feedback
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800">Meeting History</h2>
                  <div className="text-center py-8 text-gray-500">
                    <Video size={40} className="mx-auto mb-3 text-gray-300" />
                    <p className="text-sm">No past meetings yet</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-xl p-5 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Meeting Feedback</h3>
            <p className="text-gray-600 text-sm mb-3">How was your meeting with {selectedMeeting?.projectName}?</p>
            <p className="text-xs text-gray-500 mb-4">From: {investor.name}</p>
            
            <form onSubmit={handleFeedbackSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-700">Rating</label>
                <div className="flex space-x-1 justify-center sm:justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFeedback({ ...feedback, rating: star })}
                      className="text-2xl focus:outline-none transition-transform hover:scale-110"
                    >
                      {star <= feedback.rating ? '★' : '☆'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-700">Comments</label>
                <textarea
                  value={feedback.comment}
                  onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm resize-none"
                  placeholder="Share your thoughts about the meeting..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => setShowFeedbackModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorDashboard;