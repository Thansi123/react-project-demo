import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Sections (Landing Page)
import Home from "./Pages/Home";
import FundingStages from "./Pages/FundingStages";
import PlatformStats from "./Pages/PlatformStats";
import JoinMovement from "./Pages/JoinMovement";
import Leadership from "./Pages/Leadership";

// Other Pages
import Projects from "./Pages/Projects";
import ProjectDetails from "./Pages/ProjectDetails";
import Invest from "./Pages/Invest";
import StartProject from "./Pages/StartProject";
import AdminPanel from "./Pages/AdminPanel";
import Dashboard from "./Pages/Dashboard";
import Feedback from "./Pages/Feedback";
import BehaviorReport from "./Pages/BehaviourReport";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import AdminLogin from "./Pages/AdminLogin";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Accessibility from "./Pages/Accessibility";

// Stage Page (dynamic)
import StagePage from "./Pages/StagePage";
// ✅ Firebase Import (default export from firebase.js)
import app from "./firebase";

function App() {
  // 🔹 Test Firebase Connection
  useEffect(() => {
    if (app) {
      console.log("✅ Firebase is connected:", app.name); // should log "[DEFAULT]"
    } else {
      console.error("❌ Firebase not initialized!");
    }
  }, []);


  return (
    <Router>
      <div className="font-sans bg-white text-gray-800">
        <Header />

        <Routes>
          {/* Landing Page (all sections together) */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <FundingStages />
                <PlatformStats />
                <JoinMovement />
                <Leadership />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/start-project" element={<StartProject />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/behavior-report" element={<BehaviorReport />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          

          {/* Stage Routes (dynamic) */}
          <Route path="/stage/:stageId" element={<StagePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
