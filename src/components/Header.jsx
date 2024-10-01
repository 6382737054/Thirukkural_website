import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLanguageChange = () => {
    const newLang = language === 'Tamil' ? 'English' : 'Tamil';
    toggleLanguage(newLang);
  };

  const data = ['Thirukkural', 'About Thirukkural', 'History', 'Chapters', 'Features', 'Contact'];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const results = data.filter(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Search Results:', results);
  };

  const homeText = language === 'Tamil' ? 'முகப்பு' : 'Home';
  const aboutText = language === 'Tamil' ? 'பற்றி' : 'About';
  const historyText = language === 'Tamil' ? 'வரலாறு' : 'History';
  const chaptersText = language === 'Tamil' ? 'அத்தியாயங்கள்' : 'Chapters';
  const featuresText = language === 'Tamil' ? 'சாதனங்கள்' : 'Features';
  const contactText = language === 'Tamil' ? 'தொடர்பு' : 'Contact';
  const thirukkuralText = language === 'Tamil' ? 'திருக்குறள்' : 'Thirukkural'; // Text for the logo

  return (
    <header className="backdrop-blur-md bg-white bg-opacity-30 text-gray-800 shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-600">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2"> {/* Added space-x-2 for spacing */}
            <NavLink to="/" className="hover:scale-105 transition-transform duration-300">
            <img src="/Images/TamilNadu_Logo.png" alt="Logo" className="h-12 md:h-14" />

            </NavLink>
            <span className="text-xl font-extrabold">{thirukkuralText}</span> {/* Made the text even bolder */}
          </div>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
<nav className="hidden lg:flex items-center space-x-6 ml-6">
  <NavLink to="/" className={({ isActive }) => `font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-blue-500' : 'hover:text-blue-700'}`}>{homeText}</NavLink>
  <NavLink to="/about" className={({ isActive }) => `font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-blue-500' : 'hover:text-blue-700'}`}>{aboutText}</NavLink>
  <NavLink to="/history" className={({ isActive }) => `font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-blue-500' : 'hover:text-blue-700'}`}>{historyText}</NavLink>
  <NavLink to="/chapters" className={({ isActive }) => `font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-blue-500' : 'hover:text-blue-700'}`}>{chaptersText}</NavLink>
  <NavLink to="/features" className={({ isActive }) => `font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-blue-500' : 'hover:text-blue-700'}`}>{featuresText}</NavLink>
  <NavLink to="/contact" className={({ isActive }) => `font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-blue-500' : 'hover:text-blue-700'}`}>{contactText}</NavLink>
</nav>


          {/* Search and Language Toggle */}
          <div className="flex items-center space-x-4">
            {/* Global Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-48 lg:w-64 h-10 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500">
                  <FaSearch />
                </button>
              </div>
            </form>

            {/* Language Toggle */}
            <div className="hidden md:flex items-center">
              <span className="text-gray-800 mr-2">{language === 'Tamil' ? 'தமிழ்' : 'English'}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only" onChange={handleLanguageChange} checked={language === 'English'} />
                <div className="w-12 h-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-inner"></div>
                <div className={`absolute w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ${language === 'Tamil' ? 'translate-x-0' : 'translate-x-6'}`}></div>
              </label>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={handleToggle} className="text-gray-800 hover:text-blue-500 focus:outline-none">
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-white bg-opacity-30 backdrop-blur-md text-gray-800">
          <NavLink to="/" className={({ isActive }) => `block px-4 py-2 font-semibold tracking-wide ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>{homeText}</NavLink>
          <NavLink to="/about" className={({ isActive }) => `block px-4 py-2 font-semibold tracking-wide ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>{aboutText}</NavLink>
          <NavLink to="/history" className={({ isActive }) => `block px-4 py-2 font-semibold tracking-wide ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>{historyText}</NavLink>
          <NavLink to="/chapters" className={({ isActive }) => `block px-4 py-2 font-semibold tracking-wide ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>{chaptersText}</NavLink>
          <NavLink to="/features" className={({ isActive }) => `block px-4 py-2 font-semibold tracking-wide ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>{featuresText}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `block px-4 py-2 font-semibold tracking-wide ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>{contactText}</NavLink>
          
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="px-4 py-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full h-10 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500">
                <FaSearch />
              </button>
            </div>
          </form>

          {/* Mobile Language Toggle */}
          <div className="flex items-center px-4 py-2">
            <span className="text-gray-800 mr-2">{language === 'Tamil' ? 'தமிழ்' : 'English'}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only" onChange={handleLanguageChange} checked={language === 'English'} />
              <div className="w-12 h-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-inner"></div>
              <div className={`absolute w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ${language === 'Tamil' ? 'translate-x-0' : 'translate-x-6'}`}></div>
            </label>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
