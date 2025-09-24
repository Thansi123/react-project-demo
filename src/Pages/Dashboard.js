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
    totalProjects: 0,
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

  // Show error state if no user found
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
      {/* Header - Mobile Optimized */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-500 p-2 rounded-lg">
              <Target className="text-white" size={20} />
            </div>
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Bell size={18} />
            </button>
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-xs">
                {investor.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <button 
              className="p-2 rounded-lg bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="p-4 space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {investor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-sm truncate">{investor.name}</div>
                <div className="text-xs text-gray-600 truncate">{investor.email}</div>
              </div>
            </div>
            
            {/* Mobile Navigation Tabs */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <button
                onClick={() => { setActiveTab("overview"); setMobileMenuOpen(false); }}
                className={`flex flex-col items-center p-3 rounded-lg text-center ${
                  activeTab === "overview" ? "bg-yellow-50 text-yellow-700" : "hover:bg-gray-100"
                }`}
              >
                <PieChart size={18} />
                <span className="text-xs mt-1">Overview</span>
              </button>
              <button
                onClick={() => { setActiveTab("investments"); setMobileMenuOpen(false); }}
                className={`flex flex-col items-center p-3 rounded-lg text-center ${
                  activeTab === "investments" ? "bg-yellow-50 text-yellow-700" : "hover:bg-gray-100"
                }`}
              >
                <DollarSign size={18} />
                <span className="text-xs mt-1">Investment</span>
              </button>
              <button
                onClick={() => { setActiveTab("meetings"); setMobileMenuOpen(false); }}
                className={`flex flex-col items-center p-3 rounded-lg text-center ${
                  activeTab === "meetings" ? "bg-yellow-50 text-yellow-700" : "hover:bg-gray-100"
                }`}
              >
                <Video size={18} />
                <span className="text-xs mt-1">Meetings</span>
              </button>
            </div>

            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg text-red-600 hover:bg-red-50 border border-red-200"
            >
              <LogOut size={16} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-3 py-4">
        {/* Mobile Quick Stats - Always visible */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white p-3 rounded-lg shadow-sm text-center">
            <div className="text-base font-bold text-gray-800">AED {investor.totalInvested.toLocaleString()}</div>
            <div className="text-xs text-gray-600 mt-1">Invested</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm text-center">
            <div className="text-base font-bold text-blue-800">{investor.totalProjects}</div>
            <div className="text-xs text-gray-600 mt-1">Projects</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm text-center">
            <div className="text-base font-bold text-green-800">{totalReturn}%</div>
            <div className="text-xs text-gray-600 mt-1">Return</div>
          </div>
        </div>

        {/* Mobile Tab Navigation */}
        <div className="md:hidden bg-white rounded-lg shadow-sm mb-6 p-1">
          <div className="grid grid-cols-3 gap-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-2 px-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === "overview" 
                  ? "bg-yellow-500 text-white" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("investments")}
              className={`py-2 px-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === "investments" 
                  ? "bg-yellow-500 text-white" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Investment
            </button>
            <button
              onClick={() => setActiveTab("meetings")}
              className={`py-2 px-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === "meetings" 
                  ? "bg-yellow-500 text-white" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Meetings
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {investor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h2 className="text-lg font-semibold">{investor.name}</h2>
                <p className="text-gray-600 text-sm">{investor.email}</p>
                <div className="flex items-center justify-center mt-1 text-xs text-gray-500">
                  <MapPin size={12} className="mr-1" />
                  {investor.location}
                </div>
              </div>

              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Risk appetite</span>
                  <span className="font-semibold">{investor.riskAppetite}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Profile completion</span>
                  <span className="font-semibold">{investor.profileCompletion}%</span>
                </div>
              </div>

              <nav className="space-y-1">
                {[
                  { id: "overview", icon: PieChart, label: "Overview" },
                  { id: "investments", icon: DollarSign, label: "My Investment" },
                  { id: "meetings", icon: Video, label: "Meetings" }
                ].map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`w-full flex items-center space-x-2 p-2 rounded-lg text-left text-sm ${
                      activeTab === id ? "bg-yellow-50 text-yellow-700" : "hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{label}</span>
                  </button>
                ))}
              </nav>

              <button 
                onClick={handleLogout}
                className="w-full flex items-center space-x-2 p-2 rounded-lg text-left text-sm text-red-600 hover:bg-red-50 mt-4"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <h2 className="text-lg font-semibold mb-4">Portfolio Overview</h2>
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xl font-bold text-gray-800">AED {totalCurrentValue.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Portfolio Value</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xl font-bold text-green-600">{totalReturn}%</div>
                      <div className="text-xs text-gray-600">Total Return</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-medium">Funding Progress</span>
                          <span className="text-xs font-semibold">{qitaahInvestment.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-yellow-500 h-1.5 rounded-full"
                            style={{ width: `${qitaahInvestment.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-medium mb-1">Project Description</div>
                        <p className="text-xs text-gray-600 leading-relaxed">{qitaahInvestment.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-4">
                  <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="text-yellow-600" size={16} />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{qitaahInvestment.projectName}</div>
                          <div className="text-xs text-gray-600">AED {qitaahInvestment.amount.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-semibold ${qitaahInvestment.return >= 0 ? 'text-green-600' : 'text-red-600'}`}>
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
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">My Investment</h2>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-base mb-3">QiTaah Investment</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs text-gray-600">Amount</div>
                        <div className="font-semibold text-sm">AED {qitaahInvestment.amount.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Share %</div>
                        <div className="font-semibold text-sm">{qitaahInvestment.sharePercentage}%</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Current Value</div>
                        <div className="font-semibold text-sm">AED {qitaahInvestment.currentValue.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Return</div>
                        <div className="font-semibold text-green-600 text-sm">{qitaahInvestment.return}%</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-base mb-3">Project Info</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <div className="text-xs text-gray-600">Category</div>
                        <div className="font-semibold">{qitaahInvestment.category}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Stage</div>
                        <div className="font-semibold">{qitaahInvestment.stage}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Description</div>
                        <div className="text-xs">{qitaahInvestment.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Meetings Tab */}
            {activeTab === "meetings" && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <h2 className="text-lg font-semibold mb-4">Scheduled Meetings</h2>
                  <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm truncate">{qitaahInvestment.projectName} - Update</h3>
                          <p className="text-xs text-gray-500 mt-1">Attendee: {investor.name}</p>
                        </div>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full whitespace-nowrap ml-2">
                          Upcoming
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center space-x-1 text-xs text-gray-600">
                          <Video size={12} />
                          <span>Google Meet</span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <a
                            href={qitaahInvestment.meetingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 bg-blue-600 text-white rounded text-xs text-center hover:bg-blue-700"
                          >
                            Join Meeting
                          </a>
                          <button
                            onClick={() => {
                              setSelectedMeeting(qitaahInvestment);
                              setShowFeedbackModal(true);
                            }}
                            className="px-3 py-2 border border-gray-300 rounded text-xs hover:bg-gray-50"
                          >
                            Give Feedback
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-4">
                  <h2 className="text-lg font-semibold mb-4">Meeting History</h2>
                  <div className="text-center py-6 text-gray-500">
                    <Video size={32} className="mx-auto mb-2 text-gray-300" />
                    <p className="text-sm">No past meetings yet</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feedback Modal - Mobile Optimized */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-xl p-4 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-3">Meeting Feedback</h3>
            <p className="text-gray-600 text-sm mb-3">How was your meeting with {selectedMeeting?.projectName}?</p>
            <p className="text-xs text-gray-500 mb-4">From: {investor.name}</p>
            
            <form onSubmit={handleFeedbackSubmit}>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFeedback({ ...feedback, rating: star })}
                      className="text-xl focus:outline-none"
                    >
                      {star <= feedback.rating ? '★' : '☆'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Comments</label>
                <textarea
                  value={feedback.comment}
                  onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  placeholder="Share your thoughts..."
                />
              </div>

              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setShowFeedbackModal(false)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-3 py-2 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700"
                >
                  Submit
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