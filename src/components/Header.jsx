import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-blue-600 text-white p-4">
        <nav className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">GST-EMI Calculator</h1>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link to="/" className="hover:text-gray-300 hover:overline">Calculators</Link>
            <Link to="/about" className="hover:text-gray-300 hover:overline">About</Link>
            <Link to="/privacy" className="hover:text-gray-300 hover:overline">Privacy_Policy</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
