import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  
  const handleLanguageChange = () => {
    const newLang = language === 'Tamil' ? 'English' : 'Tamil';
    toggleLanguage(newLang);
  };

  const title = language === 'Tamil' ? 'திருக்குறள்' : 'Thirukkural';
  const homeText = language === 'Tamil' ? 'முகப்பு' : 'Home';
  const aboutText = language === 'Tamil' ? 'பற்றி' : 'About';
  const historyText = language === 'Tamil' ? 'வரலாறு' : 'History';
  const chaptersText = language === 'Tamil' ? 'அத்தியாயங்கள்' : 'Chapters';
  const featuresText = language === 'Tamil' ? 'சாதனங்கள்' : 'Features';
  const contactText = language === 'Tamil' ? 'தொடர்பு' : 'Contact';

  return (
    <header className="bg-white text-black shadow-md fixed top-0 left-0 right-0 z-50">
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

          {/* Language Toggle Switch */}
          <div className="flex items-center ml-4">
            <span className="mr-2">{language === 'Tamil' ? 'தமிழ்' : 'English'}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only" onChange={handleLanguageChange} checked={language === 'English'} />
              <div className="w-12 h-6 bg-gray-200 rounded-full shadow-inner"></div>
              <div className={`absolute w-6 h-6 bg-blue-500 rounded-full shadow transform transition-transform ${language === 'Tamil' ? 'translate-x-0' : 'translate-x-6'}`}></div>
            </label>
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

          {/* Language Toggle Switch for Mobile */}
          <div className="flex items-center ml-4">
            <span className="mr-2">{language === 'Tamil' ? 'தமிழ்' : 'English'}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only" onChange={handleLanguageChange} checked={language === 'English'} />
              <div className="w-12 h-6 bg-gray-200 rounded-full shadow-inner"></div>
              <div className={`absolute w-6 h-6 bg-blue-500 rounded-full shadow transform transition-transform ${language === 'Tamil' ? 'translate-x-0' : 'translate-x-6'}`}></div>
            </label>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
