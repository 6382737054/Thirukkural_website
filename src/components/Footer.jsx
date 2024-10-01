import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons

const Footer = () => {
  const { language } = useLanguage();

  const aboutText = language === 'Tamil' 
    ? 'எங்களைப் பற்றி'
    : 'About Us';

  const contactText = language === 'Tamil' 
    ? 'தொடர்பு'
    : 'Contact Us';

  const followUsText = language === 'Tamil' 
    ? 'எங்களை தொடர்ந்து செல்லுங்கள்'
    : 'Follow Us';

  const quickLinksText = language === 'Tamil' 
    ? 'திடீர் இணைப்புகள்'
    : 'Quick Links';

  const homeText = language === 'Tamil' 
    ? 'முகப்பு'
    : 'Home';

  const historyText = language === 'Tamil' 
    ? 'வரலாறு'
    : 'History';

  const chaptersText = language === 'Tamil' 
    ? 'அத்தியாயங்கள்'
    : 'Chapters';

  const featuresText = language === 'Tamil' 
    ? 'சிறப்பம்சங்கள்'
    : 'Features';

  const emailText = language === 'Tamil' 
    ? 'மின்னஞ்சல்: support@example.com'
    : 'Email: support@example.com';

  const phoneText = language === 'Tamil' 
    ? 'தொலைபேசி: (123) 456-7890'
    : 'Phone: (123) 456-7890';

  const aboutUsDescription = language === 'Tamil' 
    ? 'சிறந்த சேவையை வழங்குவதற்காக நாங்கள் ஒரு அர்ப்பணிக்கப்பட்ட குழு.<br /> \
        எங்கள் குறிக்கோள் வாடிக்கையாளர்களின் திருப்தியை உறுதிசெய்வதாகும்.<br /> \
        உங்கள் தேவைகளை பூர்த்தி செய்வதற்காக புதுமை செய்ய நாங்கள் முயற்சிக்கிறோம்.<br /> \
        எங்களுடன் இணையுங்கள்!'
    : 'We are a dedicated team committed to providing the best service <br /> \
        and quality products to our customers. Our mission is to ensure customer satisfaction at every level. <br /> \
        With years of experience in the industry, we strive to innovate and bring new solutions to meet your needs. <br /> \
        Join us on our journey to create a better experience for everyone.';

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">

          {/* About Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-extrabold mb-2">{aboutText}</h3>
            <p className="text-sm" dangerouslySetInnerHTML={{ __html: aboutUsDescription }}></p>
          </div>

          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-extrabold mb-2">{quickLinksText}</h3>
            <ul className="text-sm space-y-1">
              <li>
                <NavLink to="/" className={({ isActive }) => `hover:text-blue-300 transition-all ${isActive ? 'text-blue-300 font-semibold' : ''}`}>{homeText}</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `hover:text-blue-300 transition-all ${isActive ? 'text-blue-300 font-semibold' : ''}`}>{aboutText}</NavLink>
              </li>
              <li>
                <NavLink to="/history" className={({ isActive }) => `hover:text-blue-300 transition-all ${isActive ? 'text-blue-300 font-semibold' : ''}`}>{historyText}</NavLink>
              </li>
              <li>
                <NavLink to="/chapters" className={({ isActive }) => `hover:text-blue-300 transition-all ${isActive ? 'text-blue-300 font-semibold' : ''}`}>{chaptersText}</NavLink>
              </li>
              <li>
                <NavLink to="/features" className={({ isActive }) => `hover:text-blue-300 transition-all ${isActive ? 'text-blue-300 font-semibold' : ''}`}>{featuresText}</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `hover:text-blue-300 transition-all ${isActive ? 'text-blue-300 font-semibold' : ''}`}>{contactText}</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-extrabold mb-2">{contactText}</h3>
            <p className="text-sm">{emailText}</p>
            <p className="text-sm">{phoneText}</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-2xl font-extrabold mb-2">{followUsText}</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-all">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-all">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-all">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
