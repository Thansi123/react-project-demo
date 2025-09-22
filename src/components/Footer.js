import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 border-t border-gray-700">
      <div className="w-full px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Logo (same alignment as header) */}
        <div className="flex-shrink-0 pl-8 mb-4 md:mb-0 self-start md:self-center">
          <h2 className="text-lg font-bold text-white">EternalShares</h2>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-sm my-2 md:my-0 text-center">
          <Link
            to="/about"
            className="hover:text-yellow-500 hover:font-semibold hover:underline transition"
          >
            About
          </Link>
          <Link
            to="/privacy"
            className="hover:text-yellow-500 hover:font-semibold hover:underline transition"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-yellow-500 hover:font-semibold hover:underline transition"
          >
            Terms of Service
          </Link>
          <Link
            to="/accessibility"
            className="hover:text-yellow-500 hover:font-semibold hover:underline transition"
          >
            Accessibility
          </Link>
        </nav>

        {/* Right: Copyright */}
        <div className="flex-shrink-0 pr-8 mt-4 md:mt-0 text-center md:text-right">
          <p className="text-xs text-gray-400 whitespace-nowrap">
            © {new Date().getFullYear()} Crowdfunding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
