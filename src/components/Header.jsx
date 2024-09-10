// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);
  const handleLanguageChange = (lang) => {
    toggleLanguage();
    setIsDropdownOpen(false);
  };

  const title = language === 'Tamil' ? 'திருக்குறள்' : 'Thirukkural';

  return (
    <header className="bg-[#cce7ff] text-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/" className="text-black hover:text-gray-700">{title}</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-bold hover:text-gray-700">Home</Link>
          <Link to="/about" className="font-bold hover:text-gray-700">About</Link>
          <Link to="/history" className="font-bold hover:text-gray-700">History</Link>
          <Link to="/chapters" className="font-bold hover:text-gray-700">Chapters</Link> {/* Link to RepositoriesSection */}
          <Link to="/features" className="font-bold hover:text-gray-700">Features</Link> {/* Link to SignificanceSection */}
          <Link to="/contact" className="font-bold hover:text-gray-700">Contact</Link>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="bg-[#cce7ff] text-black px-4 py-2 rounded-lg border border-black flex items-center"
              onClick={handleDropdownToggle}
            >
              {language === 'Tamil' ? 'தமிழ்' : 'English'}
              <FaChevronDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48 z-50">
                <button
                  onClick={() => handleLanguageChange('English')}
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange('Tamil')}
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                >
                  Tamil
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={handleToggle}>
            {isOpen ? <FaTimes className="text-black text-2xl" /> : <FaBars className="text-black text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[#cce7ff] text-black">
          <Link to="/" className="block px-4 py-2 font-bold hover:bg-[#b3d9ff]">Home</Link>
          <Link to="/about" className="block px-4 py-2 font-bold hover:bg-[#b3d9ff]">About</Link>
          <Link to="/history" className="block px-4 py-2 font-bold hover:bg-[#b3d9ff]">History</Link>
          <Link to="/chapters" className="block px-4 py-2 font-bold hover:bg-[#b3d9ff]">Chapters</Link> {/* Link to RepositoriesSection */}
          <Link to="/features" className="block px-4 py-2 font-bold hover:bg-[#b3d9ff]">Features</Link> {/* Link to SignificanceSection */}
          <Link to="/contact" className="block px-4 py-2 font-bold hover:bg-[#b3d9ff]">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
