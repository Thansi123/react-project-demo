import React from "react";

function Footer() {
  // helper: smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-gray-100 border-t py-3 text-center mt-auto">
      <p className="text-sm">&copy; 2025 Crowdfunding. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2 text-sm">
        <button
          onClick={() => scrollToSection("about")}
          className="text-yellow-600 hover:text-gray-700"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("terms")}
          className="text-yellow-600 hover:text-gray-700"
        >
          Terms
        </button>
        <button
          onClick={() => scrollToSection("privacy")}
          className="text-yellow-600 hover:text-gray-700"
        >
          Privacy
        </button>
        <button
          onClick={() => scrollToSection("accessibility")}
          className="text-yellow-600 hover:text-gray-700"
        >
          Accessibility
        </button>
      </div>
    </footer>
  );
}

export default Footer;
