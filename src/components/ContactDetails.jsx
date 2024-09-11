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
    <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        {t.getInTouch}
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex items-center text-gray-700 mb-4">
          <FaPhoneAlt size={20} className="mr-4 text-blue-500" />
          <span className="text-lg">{t.phone}</span>
        </div>
        <div className="flex items-center text-gray-700 mb-4">
          <FaEnvelope size={20} className="mr-4 text-blue-500" />
          <span className="text-lg">{t.emailAddress}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <FaMapMarkerAlt size={20} className="mr-4 text-blue-500" />
          <span className="text-lg">{t.address}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
