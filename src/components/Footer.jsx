import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-sm">
              We are a dedicated team committed to providing the best service and quality products to our customers.
            </p>
          </div>

          {/* Navigation Links (similar to Header) */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li>
                <NavLink to="/" className={({ isActive }) => `hover:underline ${isActive ? 'text-blue-500' : ''}`}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `hover:underline ${isActive ? 'text-blue-500' : ''}`}>About</NavLink>
              </li>
              <li>
                <NavLink to="/history" className={({ isActive }) => `hover:underline ${isActive ? 'text-blue-500' : ''}`}>History</NavLink>
              </li>
              <li>
                <NavLink to="/chapters" className={({ isActive }) => `hover:underline ${isActive ? 'text-blue-500' : ''}`}>Chapters</NavLink>
              </li>
              <li>
                <NavLink to="/features" className={({ isActive }) => `hover:underline ${isActive ? 'text-blue-500' : ''}`}>Features</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `hover:underline ${isActive ? 'text-blue-500' : ''}`}>Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm">Email: support@example.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
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
