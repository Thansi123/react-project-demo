import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Adjust the path based on your file structure

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand with Image */}
        <Link to="/" className="pl-8 flex items-center space-x-3">
          {/* Logo Image */}
          <img 
            src={logo} // Use the imported logo
            alt="EternalShares Logo" 
            className="h-10 w-10 object-contain" // Adjust size as needed
          />
          <span className="text-2xl font-bold text-gray-900">
            EternalShares
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium text-gray-700 pr-8">
          <Link to="/" className="hover:text-yellow-600 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-yellow-600 transition">
            Projects
          </Link>
          <Link to="/login" className="hover:text-yellow-600 transition">
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 pr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-600">
            Home
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-yellow-600">
            Projects
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-yellow-600">
            Login
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;