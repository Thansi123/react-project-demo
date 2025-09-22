import React, { useState } from "react";
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
  Target
} from "lucide-react";

const InvestorDashboard = () => {
  // Sample investor data
  const [investor, setInvestor] = useState({
    name: "Ahmed Al Maktoum",
    email: "ahmed.almaktoum@example.com",
    phone: "+971 50 123 4567",
    location: "Dubai, UAE",
    totalInvested: 75000, // Only QiTaah investment
    totalProjects: 1, // Only QiTaah project
    memberSince: "2024-03-15", // Date of QiTaah investment
    profileCompletion: 85,
    riskAppetite: "Medium",
    preferredSectors: ["Real Estate", "Technology"]
  });

  // Only QiTaah investment data
  const [investments, setInvestments] = useState([
    {
      id: 1,
      projectName: "QiTaah",
      amount: 75000,
      date: "2024-03-15",
      sharePercentage: 2.5,
      currentValue: 82500,
      return: 10,
      status: "Active",
      category: "Real Estate",
      stage: "Seed",
      nextUpdate: "2024-06-15",
      meetingLink: "https://meet.google.com/oqd-muyp-ttm",
      description: "AI-driven platform redefining real estate with proprietary Spider Web and Spider Mapping technologies",
      progress: 65 // Funding progress percentage
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

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    alert(`Thank you for your ${feedback.rating}-star feedback for QiTaah!`);
    setFeedback({ rating: 0, comment: "", meetingId: "" });
    setShowFeedbackModal(false);
  };

  const totalReturn = investments.reduce((sum, investment) => sum + investment.return, 0);
  const totalCurrentValue = investments.reduce((sum, investment) => sum + investment.currentValue, 0);
  const qitaahInvestment = investments[0]; // Only QiTaah project

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-500 p-2 rounded-lg">
              <Target className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">QiTaah Investor Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Bell size={20} />
            </button>
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {investor.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {investor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h2 className="text-xl font-semibold">{investor.name}</h2>
                <p className="text-gray-600 text-sm">{investor.email}</p>
                <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                  <MapPin size={14} className="mr-1" />
                  {investor.location}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Member since</span>
                  <span className="font-semibold">{new Date(investor.memberSince).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Risk appetite</span>
                  <span className="font-semibold">{investor.riskAppetite}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Profile completion</span>
                  <span className="font-semibold">{investor.profileCompletion}%</span>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left ${activeTab === "overview" ? "bg-yellow-50 text-yellow-700" : "hover:bg-gray-100"}`}
                >
                  <PieChart size={20} />
                  <span>Overview</span>
                </button>
                <button
                  onClick={() => setActiveTab("investments")}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left ${activeTab === "investments" ? "bg-yellow-50 text-yellow-700" : "hover:bg-gray-100"}`}
                >
                  <DollarSign size={20} />
                  <span>My Investment</span>
                </button>
                <button
                  onClick={() => setActiveTab("meetings")}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left ${activeTab === "meetings" ? "bg-yellow-50 text-yellow-700" : "hover:bg-gray-100"}`}
                >
                  <Video size={20} />
                  <span>Meetings</span>
                </button>
                <button
                  onClick={() => setActiveTab("documents")}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left ${activeTab === "documents" ? "bg-yellow-50 text-yellow-700" : "hover:bg-gray-100"}`}
                >
                  <Download size={20} />
                  <span>Documents</span>
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left ${activeTab === "settings" ? "bg-yellow-50 text-yellow-700" : "hover:bg-gray-100"}`}
                >
                  <Settings size={20} />
                  <span>Settings</span>
                </button>
              </nav>

              <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-left text-red-600 hover:bg-red-50 mt-6">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="text-yellow-800 font-semibold">AED {investor.totalInvested.toLocaleString()}</div>
                  <div className="text-sm text-yellow-600">Total Invested</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-blue-800 font-semibold">{investor.totalProjects} Project</div>
                  <div className="text-sm text-blue-600">Active Investment</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-green-800 font-semibold">{totalReturn}%</div>
                  <div className="text-sm text-green-600">Current Return</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Portfolio Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-800">AED {totalCurrentValue.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Portfolio Value</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">+{totalReturn}%</div>
                      <div className="text-sm text-gray-600">Total Return</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-800">{investments.length}</div>
                      <div className="text-sm text-gray-600">Active Investment</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-4">Project Progress</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Funding Progress</span>
                          <span className="text-sm font-semibold">{qitaahInvestment.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-yellow-500 h-2 rounded-full"
                            style={{ width: `${qitaahInvestment.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-2">Project Description</div>
                        <p className="text-sm text-gray-600">{qitaahInvestment.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="text-yellow-600" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold">{qitaahInvestment.projectName}</div>
                          <div className="text-sm text-gray-600">Invested AED {qitaahInvestment.amount.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">{new Date(qitaahInvestment.date).toLocaleDateString()}</div>
                        <div className={`text-sm font-semibold ${qitaahInvestment.return >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {qitaahInvestment.return >= 0 ? '+' : ''}{qitaahInvestment.return}%
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
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">My Investment</h2>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-lg mb-4">QiTaah Investment Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Investment Amount</div>
                        <div className="font-semibold">AED {qitaahInvestment.amount.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Share Percentage</div>
                        <div className="font-semibold">{qitaahInvestment.sharePercentage}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Current Value</div>
                        <div className="font-semibold">AED {qitaahInvestment.currentValue.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Return</div>
                        <div className="font-semibold text-green-600">+{qitaahInvestment.return}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Investment Date</div>
                        <div className="font-semibold">{new Date(qitaahInvestment.date).toLocaleDateString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Status</div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {qitaahInvestment.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-4">Project Information</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-600">Category</div>
                        <div className="font-semibold">{qitaahInvestment.category}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Stage</div>
                        <div className="font-semibold">{qitaahInvestment.stage}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Description</div>
                        <div className="text-sm">{qitaahInvestment.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Meetings Tab */}
            {activeTab === "meetings" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Scheduled Meetings</h2>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold">{qitaahInvestment.projectName} - Progress Update</h3>
                          <p className="text-sm text-gray-600">Scheduled for {new Date(qitaahInvestment.nextUpdate).toLocaleDateString()}</p>
                        </div>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          Upcoming
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Video size={16} />
                          <span>Google Meet</span>
                        </div>
                        <div className="flex space-x-2">
                          <a
                            href={qitaahInvestment.meetingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                          >
                            Join Meeting
                          </a>
                          <button
                            onClick={() => {
                              setSelectedMeeting(qitaahInvestment);
                              setShowFeedbackModal(true);
                            }}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
                          >
                            Give Feedback
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Meeting History</h2>
                  <div className="text-center py-8 text-gray-500">
                    <Video size={48} className="mx-auto mb-4 text-gray-300" />
                    <p>No past meetings yet</p>
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs can be implemented similarly */}
            {(activeTab === "documents" || activeTab === "settings") && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">
                  {activeTab === "documents" ? "Documents" : "Settings"}
                </h2>
                <div className="text-center py-12 text-gray-500">
                  <p>This section is under development</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Meeting Feedback</h3>
            <p className="text-gray-600 mb-4">How was your meeting with {selectedMeeting?.projectName}?</p>
            
            <form onSubmit={handleFeedbackSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFeedback({ ...feedback, rating: star })}
                      className="text-2xl focus:outline-none"
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
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Share your thoughts about the meeting..."
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowFeedbackModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
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