import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 border-t border-gray-700">
      <div className="w-full px-6">
        {/* ================= Desktop Footer ================= */}
        <div className="hidden md:flex flex-row items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-shrink-0 pl-8">
            <h2 className="text-lg font-bold text-white">EternalShares</h2>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-row justify-center gap-8 text-sm">
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
          <div className="flex-shrink-0 pr-8 text-right">
            <p className="text-xs text-gray-400 whitespace-nowrap">
              © {new Date().getFullYear()} Crowdfunding. All rights reserved.
            </p>
          </div>
        </div>

        {/* ================= Mobile Footer ================= */}
        <div className="block md:hidden mt-6">
          {/* Top: Logo + tagline */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white">EternalShares</h2>
            <p className="mt-2 text-sm text-gray-400">
              Secure your financial future – where every share
              tells a story of trust and innovation.
            </p>
          </div>

          {/* Middle: 2x2 Grid Links */}
          <div className="grid grid-cols-2 gap-6 text-sm mb-8">
            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-3">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-yellow-500 hover:font-semibold hover:underline transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-yellow-500 hover:font-semibold hover:underline transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-yellow-500 hover:font-semibold hover:underline transition"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accessibility"
                    className="hover:text-yellow-500 hover:font-semibold hover:underline transition"
                  >
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>




            {/* Information */}
            <div>
              <h3 className="text-white font-semibold mb-3">INFORMATION</h3>
              <ul className="space-y-2">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Compliance</a></li>
                <li><a href="#">Copyright</a></li>
                <li><a href="#">Scam Alert</a></li>
                <li><a href="#">Risk Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom: Copyright */}
          <div className="text-center border-t border-gray-700 pt-4 text-xs text-gray-400">
            © {new Date().getFullYear()} EternalShares. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
