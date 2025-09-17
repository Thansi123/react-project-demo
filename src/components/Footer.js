import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo / Brand */}
        <h2 className="text-lg font-bold text-white">EternalShares</h2>

        {/* Links */}
        <div className="flex flex-wrap gap-6 text-sm">
          <Link to="/about" className="hover:text-yellow-500 transition">
            About
          </Link>
          <Link to="/privacy" className="hover:text-yellow-500 transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-yellow-500 transition">
            Terms of Service
          </Link>
          <Link to="/accessibility" className="hover:text-yellow-500 transition">
            Accessibility
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Crowdfunding. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
