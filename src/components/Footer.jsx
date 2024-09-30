import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const aboutText = language === 'Tamil' ? 'எங்களைப் பற்றி' : 'About Us';
  const aboutDesc = language === 'Tamil'
    ? 'எங்கள் வாடிக்கையாளர்களுக்கு சிறந்த சேவையும் தரமான தயாரிப்புகளையும் வழங்க உறுதியாக இணைந்து செயல்படும் குழுவாக நாம் உள்ளோம்.'
    : 'We are a dedicated team committed to providing the best service and quality products to our customers.';

  const quickLinksText = language === 'Tamil' ? 'துரித இணைப்புகள்' : 'Quick Links';
  const contactText = language === 'Tamil' ? 'தொடர்பு' : 'Contact Us';
  const followText = language === 'Tamil' ? 'எங்களை பின்தொடருங்கள்' : 'Follow Us';
  const homeText = language === 'Tamil' ? 'முகப்பு' : 'Home';
  const aboutLinkText = language === 'Tamil' ? 'பற்றி' : 'About';
  const historyLinkText = language === 'Tamil' ? 'வரலாறு' : 'History';
  const chaptersLinkText = language === 'Tamil' ? 'அத்தியாயங்கள்' : 'Chapters';
  const featuresLinkText = language === 'Tamil' ? 'சாதனங்கள்' : 'Features';
  const contactLinkText = language === 'Tamil' ? 'தொடர்பு' : 'Contact';
  const emailLabel = language === 'Tamil' ? 'மின்னஞ்சல்' : 'Email';
  const phoneLabel = language === 'Tamil' ? 'தொலைபேசி' : 'Phone';

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{aboutText}</h3>
            <p className="text-sm">{aboutDesc}</p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{quickLinksText}</h3>
            <ul className="text-sm space-y-1">
              <li>
                <NavLink to="/" className={({ isActive }) => `hover:underline ${isActive ? 'text-blue-500' : ''}`}>
                  {homeText}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `hover:underline ${isActive ? 'text-blue-500' : ''}`}>
                  {aboutLinkText}
                </NavLink>
              </li>
              <li>
                <NavLink to="/history" className={({ isActive }) => `hover:underline ${isActive ? 'text-blue-500' : ''}`}>
                  {historyLinkText}
                </NavLink>
              </li>
              <li>
                <NavLink to="/chapters" className={({ isActive }) => `hover:underline ${isActive ? 'text-blue-500' : ''}`}>
                  {chaptersLinkText}
                </NavLink>
              </li>
              <li>
                <NavLink to="/features" className={({ isActive }) => `hover:underline ${isActive ? 'text-blue-500' : ''}`}>
                  {featuresLinkText}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `hover:underline ${isActive ? 'text-blue-500' : ''}`}>
                  {contactLinkText}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{contactText}</h3>
            <p className="text-sm">{emailLabel}: support@example.com</p>
            <p className="text-sm">{phoneLabel}: (123) 456-7890</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-2">{followText}</h3>
            <div className="flex flex-col space-y-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram
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
