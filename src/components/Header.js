import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Crowdfunding
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-yellow-600 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-yellow-600 transition">
            Projects
          </Link>
          <Link to="/start-project" className="hover:text-yellow-600 transition">
            Start Project
          </Link>
          <Link to="/dashboard" className="hover:text-yellow-600 transition">
            Dashboard
          </Link>
          <Link to="/login" className="hover:text-yellow-600 transition">
            Login
          </Link>
          <Link to="/signup" className="hover:text-yellow-600 transition">
            Sign Up
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
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
          <Link to="/start-project" onClick={() => setIsOpen(false)} className="hover:text-yellow-600">
            Start Project
          </Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)} className="hover:text-yellow-600">
            Dashboard
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-yellow-600">
            Login
          </Link>
          <Link to="/signup" onClick={() => setIsOpen(false)} className="hover:text-yellow-600">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
