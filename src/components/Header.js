import React, { useState } from "react";

function Header({ scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { key: "home", label: "Home" },
    { key: "projects", label: "Projects" },
   
    { key: "startProject", label: "Start Project" },
    { key: "dashboard", label: "Dashboard" },
    
    { key: "login", label: "Login" },
    { key: "signup", label: "Sign Up" },
  
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 to-yellow-600 shadow-md flex items-center justify-between px-4 z-50 h-14 md:h-16">
      <div className="font-extrabold text-lg md:text-xl bg-gradient-to-r from-yellow-500 to-gray-800 bg-clip-text text-transparent">
        Crowdfunding
      </div>
      <button
        className="text-white text-2xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-14 left-0 w-full md:w-auto bg-gradient-to-r from-gray-800 to-yellow-600 md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}
      >
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => {
              scrollTo(item.key);
              setMenuOpen(false);
            }}
            className="text-white font-semibold hover:text-yellow-400 transition"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
