import React, { useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Sections
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
import AdminLogin from "./Pages/AdminLogin";
import Signup from "./Pages/Signup";


import About from "./Pages/About";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Accessibility from "./Pages/Accessibility";

function App() {
  const refs = {
    home: useRef(null),
    fundingStages: useRef(null),
    platformStats: useRef(null),
    joinMovement: useRef(null),
    leadership: useRef(null),
    

    projects: useRef(null),
    projectDetails: useRef(null),
    invest: useRef(null),
    startProject: useRef(null),
  
    
    adminPanel: useRef(null),
    dashboard: useRef(null),
    feedback: useRef(null),
    behaviorReport: useRef(null),
    login: useRef(null),
    adminLogin: useRef(null),
    signup: useRef(null),
    about: useRef(null),
    
   
   
    terms: useRef(null),
    privacy: useRef(null),
    accessibility: useRef(null),
  };

  const scrollTo = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      <Header scrollTo={scrollTo} />

      {/* Scroll Sections */}
      <div ref={refs.home}><Home navigate={scrollTo} /></div>
      <div ref={refs.fundingStages}><FundingStages /></div>
      <div ref={refs.platformStats}><PlatformStats /></div>
      <div ref={refs.joinMovement}><JoinMovement /></div>
      <div ref={refs.leadership}><Leadership scrollTo={scrollTo} /></div>
      

      {/* Other Pages */}
      <div ref={refs.projects}><Projects /></div>
      <div ref={refs.projectDetails}><ProjectDetails /></div>
      <div ref={refs.invest}><Invest /></div>
      <div ref={refs.startProject}><StartProject /></div>
      
      
      <div ref={refs.adminPanel}><AdminPanel /></div>
      <div ref={refs.dashboard}><Dashboard /></div>
      <div ref={refs.feedback}><Feedback /></div>
      <div ref={refs.behaviorReport}><BehaviorReport /></div>
      <div ref={refs.login}><Login navigate={scrollTo} /></div>
      <div ref={refs.adminLogin}><AdminLogin navigate={scrollTo} /></div>
      <div ref={refs.signup}><Signup /></div>
      <div ref={refs.about}><About /></div>
     
     
      
      <div ref={refs.terms}><Terms /></div>
      <div ref={refs.privacy}><Privacy /></div>
      <div ref={refs.accessibility}><Accessibility /></div>

      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default App;
