import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);
  
  const handleLanguageChange = (lang) => {
    toggleLanguage(lang);
    setIsDropdownOpen(false);
    setIsOpen(false);
  };

  const title = language === 'Tamil' ? 'திருக்குறள்' : 'Thirukkural';
  const homeText = language === 'Tamil' ? 'முகப்பு' : 'Home';
  const aboutText = language === 'Tamil' ? 'பற்றி' : 'About';
  const historyText = language === 'Tamil' ? 'வரலாறு' : 'History';
  const chaptersText = language === 'Tamil' ? 'அத்தியாயங்கள்' : 'Chapters';
  const featuresText = language === 'Tamil' ? 'சாதனங்கள்' : 'Features';
  const contactText = language === 'Tamil' ? 'தொடர்பு' : 'Contact';

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="text-black hover:text-gray-700">{title}</NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({ isActive }) => `font-bold ${isActive ? 'text-blue-500' : 'hover:text-gray-700'}`}>{homeText}</NavLink>
          <NavLink to="/about" className={({ isActive }) => `font-bold ${isActive ? 'text-blue-500' : 'hover:text-gray-700'}`}>{aboutText}</NavLink>
          <NavLink to="/history" className={({ isActive }) => `font-bold ${isActive ? 'text-blue-500' : 'hover:text-gray-700'}`}>{historyText}</NavLink>
          <NavLink to="/chapters" className={({ isActive }) => `font-bold ${isActive ? 'text-blue-500' : 'hover:text-gray-700'}`}>{chaptersText}</NavLink>
          <NavLink to="/features" className={({ isActive }) => `font-bold ${isActive ? 'text-blue-500' : 'hover:text-gray-700'}`}>{featuresText}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `font-bold ${isActive ? 'text-blue-500' : 'hover:text-gray-700'}`}>{contactText}</NavLink>

          {/* Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="bg-white text-black px-4 py-2 rounded-lg border border-black flex items-center"
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
        <nav className="md:hidden bg-white text-black">
          <NavLink to="/" className={({ isActive }) => `block px-4 py-2 font-bold ${isActive ? 'bg-gray-300' : 'hover:bg-gray-200'}`}>{homeText}</NavLink>
          <NavLink to="/about" className={({ isActive }) => `block px-4 py-2 font-bold ${isActive ? 'bg-gray-300' : 'hover:bg-gray-200'}`}>{aboutText}</NavLink>
          <NavLink to="/history" className={({ isActive }) => `block px-4 py-2 font-bold ${isActive ? 'bg-gray-300' : 'hover:bg-gray-200'}`}>{historyText}</NavLink>
          <NavLink to="/chapters" className={({ isActive }) => `block px-4 py-2 font-bold ${isActive ? 'bg-gray-300' : 'hover:bg-gray-200'}`}>{chaptersText}</NavLink>
          <NavLink to="/features" className={({ isActive }) => `block px-4 py-2 font-bold ${isActive ? 'bg-gray-300' : 'hover:bg-gray-200'}`}>{featuresText}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `block px-4 py-2 font-bold ${isActive ? 'bg-gray-300' : 'hover:bg-gray-200'}`}>{contactText}</NavLink>

          {/* Language Dropdown for Mobile */}
          <div className="relative mt-2" ref={dropdownRef}>
            <button
              className="bg-white text-black px-4 py-2 rounded-lg border border-black flex items-center w-full justify-between"
              onClick={handleDropdownToggle}
            >
              {language === 'Tamil' ? 'தமிழ்' : 'English'}
              <FaChevronDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-full z-50">
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
      )}
    </header>
  );
};

export default Header;
