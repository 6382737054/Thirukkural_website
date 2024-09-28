import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactPage = () => {
  const { language } = useLanguage();

  const texts = {
    English: {
      contactUs: 'CONTACT US',
      callUs: 'CALL US',
      location: 'LOCATION',
      businessHours: 'BUSINESS HOURS',
      enterName: 'Enter your Name',
      enterEmail: 'Enter a valid email address',
      enterMessage: 'Enter your message',
      submit: 'SUBMIT',
    },
    Tamil: {
      contactUs: 'எங்களை தொடர்பு கொள்ளவும்',
      callUs: 'எங்களை அழைக்கவும்',
      location: 'இடம்',
      businessHours: 'வணிக நேரங்கள்',
      enterName: 'உங்கள் பெயரை உள்ளிடவும்',
      enterEmail: 'சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்',
      enterMessage: 'உங்கள் செய்தியை உள்ளிடவும்',
      submit: 'சமர்ப்பிக்கவும்',
    },
  };

  const t = texts[language];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Top orange wave */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-orange-500">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"></path>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4 mt-16">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
          <div className="flex flex-col md:flex-row">
            {/* Contact Details */}
            <div className="md:w-1/2 p-6 text-sm">
              <div className="mb-4">
                <h3 className="font-bold mb-1">{t.callUs}</h3>
                <p>1 (234) 567-891, 1 (234) 987-654</p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-1">{t.location}</h3>
                <p>121 Rock Street, 21 Avenue,<br />New York, NY 92103-9000</p>
              </div>
              <div>
                <h3 className="font-bold mb-1">{t.businessHours}</h3>
                <p>Mon - Fri ... 10 am - 8 pm<br />Sat, Sun .... Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 bg-gray-100 p-6">
              <h2 className="text-xl font-bold mb-4">{t.contactUs}</h2>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder={t.enterName}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring focus:ring-indigo-500"
                />
                <input
                  type="email"
                  placeholder={t.enterEmail}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring focus:ring-indigo-500"
                />
                <textarea
                  placeholder={t.enterMessage}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring focus:ring-indigo-500"
                  rows="3"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-indigo-900 text-white py-2 rounded text-sm font-bold hover:bg-indigo-800 transition duration-300"
                >
                  {t.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom orange wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#F97316" d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ContactPage;
