import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';
import { useLanguage } from '../context/LanguageContext';

const ContactPage = () => {
  const { language } = useLanguage();

  const texts = {
    English: {
      contactPageTitle: 'Contact Me',
      getInTouch: 'Get in Touch',
    },
    Tamil: {
      contactPageTitle: 'எனது தொடர்பு',
      getInTouch: 'தொடர்பு கொள்ளவும்',
    },
  };

  const t = texts[language];

  return (
    <section id="contact-page" className="py-20 px-6 md:px-12 bg-gray-100">
      <div className="container mx-auto">
        <motion.h1
          className="text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.contactPageTitle}
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-12">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
