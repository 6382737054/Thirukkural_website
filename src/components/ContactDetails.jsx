import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const ContactDetails = () => {
  const { language } = useLanguage();

  const texts = {
    English: {
      getInTouch: 'Get in Touch',
      phone: 'Phone: +123 456 7890',
      emailAddress: 'Email: example@example.com',
      address: 'Address: 123 Street Name, City, Country',
    },
    Tamil: {
      getInTouch: 'தொடர்பு கொள்ளவும்',
      phone: 'தொலைபேசி: +123 456 7890',
      emailAddress: 'மின்னஞ்சல்: example@example.com',
      address: 'முகவரி: 123 தெரு பெயர், நகரம், நாடு',
    },
  };

  const t = texts[language];

  return (
    <div className="flex flex-col items-center w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2 text-center">
        {t.getInTouch}
      </h2>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center text-gray-700 transition-transform duration-200 ease-in-out transform hover:translate-x-1">
          <FaPhoneAlt size={24} className="mr-3 text-blue-600" />
          <span className="text-lg font-medium">{t.phone}</span>
        </div>
        <div className="flex items-center text-gray-700 transition-transform duration-200 ease-in-out transform hover:translate-x-1">
          <FaEnvelope size={24} className="mr-3 text-blue-600" />
          <span className="text-lg font-medium">{t.emailAddress}</span>
        </div>
        <div className="flex items-center text-gray-700 transition-transform duration-200 ease-in-out transform hover:translate-x-1">
          <FaMapMarkerAlt size={24} className="mr-3 text-blue-600" />
          <span className="text-lg font-medium">{t.address}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
