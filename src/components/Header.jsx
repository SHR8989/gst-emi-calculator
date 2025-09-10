import { ChevronDown, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <header className="text-black dark:bg-gray-900 dark:text-white p-4 w-full shadow-md">
        <nav className="flex flex-col-2 sm:flex-row justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold md:ml-[3rem]">
            GST-EMI Calculator
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 mt-2 mr-[3rem] sm:mt-0">
            <Link to="/" className="hover:text-gray-300 hover:overline">
              Calculators
            </Link>
            <Link to="/about" className="hover:text-gray-300 hover:overline">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-300 hover:overline">
              Contact
            </Link>
            <Link to="/privacy" className="hover:text-gray-300 hover:overline">
              Privacy_Policy
            </Link>

            {/* Projects Dropdown (Desktop) */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-300 transition">
                Projects <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 bg-black border border-gray-700 rounded-lg shadow-lg p-2 space-y-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200">
                <a
                  href="https://portfolio-shr.vercel.app/"
                  target="_blank"
                  className="text-sm block hover:text-gray-400"
                >
                  My Portfolio
                </a>
                <a
                  href="https://invoice-get-app.vercel.app"
                  target="_blank"
                  className="text-sm block hover:text-gray-400"
                >
                  Invoice Generator
                </a>
                <a
                  href="https://character-counter-shr.vercel.app"
                  target="_blank"
                  className="text-sm block hover:text-gray-400"
                >
                  Typing Counter
                </a>
              </div>
            </div>
            <DarkModeToggle />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden mt-1 mr-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Mobile Links */}
        <nav className="mt-12 space-y-4">
          <Link
            to="/"
            className="block hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Calculators
          </Link>
          <Link
            to="/about"
            className="block hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/privacy"
            className="block hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Privacy_Policy
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-gray-400"
            >
              Projects <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <a
                  href="https://portfolio-shr.vercel.app/"
                  target="_blank"
                  className="block text-sm hover:text-gray-400"
                >
                  My Portfolio
                </a>
                <a
                  href="https://invoice-get-app.vercel.app"
                  target="_blank"
                  className="block text-sm hover:text-gray-400"
                >
                  Invoice Generator
                </a>
                <a
                  href="https://character-counter-shr.vercel.app"
                  target="_blank"
                  className="block text-sm hover:text-gray-400"
                >
                  Typing Counter
                </a>
              </div>
            )}
          </div>
          <DarkModeToggle />
        </nav>
      </div>
    </>
  );
};

export default Header;
