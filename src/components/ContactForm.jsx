import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ContactForm = () => {
  const { language } = useLanguage();

  const texts = {
    English: {
      sendMessage: 'Send a Message',
      thankYouMessage: 'Thank you for your message!',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send Message',
    },
    Tamil: {
      sendMessage: 'செய்தி அனுப்பவும்',
      thankYouMessage: 'உங்கள் செய்திக்கு நன்றி!',
      name: 'பெயர்',
      email: 'மின்னஞ்சல்',
      message: 'செய்தி',
      submit: 'செய்தி அனுப்பவும்',
    },
  };

  const t = texts[language];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        {t.sendMessage}
      </h2>

      {formSubmitted ? (
        <motion.div
          className="text-center text-lg text-green-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>{t.thankYouMessage}</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-lg mb-2">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-lg mb-2">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-lg mb-2">
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            {t.submit}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
