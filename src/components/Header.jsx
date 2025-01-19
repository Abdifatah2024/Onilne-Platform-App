import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-100 text-gray-800">
      <div className="container mx-auto flex items-center justify-between py-6 px-8">
        {/* Logo Section */}
        <div className="logo">
          <h1 className="text-3xl font-bold text-blue-600">
            <Link to="/">Tusmo</Link>
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="menus flex items-center gap-8">
          <Link to="/" className="text-lg font-medium hover:text-blue-500 transition duration-300">
            Home
          </Link>
          <Link to="/login" className="text-lg font-medium hover:text-blue-500 transition duration-300">
            Login
          </Link>
          <Link to="/contact" className="text-lg font-medium hover:text-blue-500 transition duration-300">
            Contact Us
          </Link>
          <Link to="/courses" className="text-lg font-medium hover:text-blue-500 transition duration-300">
            Courses
          </Link>
          <Link to="/register">
            <button className="px-6 py-3 rounded-md bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Register Now
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
