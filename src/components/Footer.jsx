import React from 'react';

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

          {/* Services Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Services</h3>
            <ul className="text-sm space-y-1">
              <li><a href="/service1" className="hover:underline">Service 1</a></li>
              <li><a href="/service2" className="hover:underline">Service 2</a></li>
              <li><a href="/service3" className="hover:underline">Service 3</a></li>
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
            <div className="flex space-x-4">
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
