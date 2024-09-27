import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import '@fontsource/playfair-display'; // Ensure this package is installed

const HeroSection = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'English';

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-cover bg-center bg-fixed overflow-hidden pt-20" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
      {/* Updated Background Overlay with White Gradient on Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f9f2e7] via-[#f4e9d9] to-white opacity-90"></div>
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-opacity-20 bg-gradient-to-r from-[#ffffff] via-[#f4e9d9] to-[#f0e6d6]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="absolute top-0 left-0 w-32 h-32 text-[#f4e9d9]" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="100" stroke="currentColor" strokeWidth="30" opacity="0.2" />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-12 lg:p-20">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left mb-8 md:mb-0">
          {/* Hero Heading */}
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-black-300 mb-4 md:mb-6 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {isEnglish
              ? 'Explore the Timeless Wisdom of Thirukkural'
              : 'திருக்குறளின் காலத்திற்கெதிரான ஞானத்தை ஆராயுங்கள்'}
            <span className="absolute inset-0 border-b-2 border-yellow-700"></span>
          </motion.h1>

          {/* Hero Description */}
          <motion.p
            className="text-base md:text-lg lg:text-xl xl:text-2xl text-black-200 mb-6 md:mb-8 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {isEnglish
              ? 'Thirukkural, a treasure of Tamil literature, offers profound insights into morality, ethics, and the human condition. Delve into its verses to discover wisdom that transcends time and culture.'
              : 'தமிழ் இலக்கியத்தின் நகைச்சுவையைச் சொல்கிற திருக்குறள், நேர்மை, நெறிகள் மற்றும் மனித இயல்பு பற்றிய ஆழமான புரிந்துகொள்ளல்களை வழங்குகிறது. காலத்தைத் தாண்டி மற்றும் கலாச்சாரத்தைத் தாண்டி ஞானத்தைப் பரிசுத்தூயும் பாடல்களை ஆராயுங்கள்.'}
          </motion.p>

          {/* Tagline or Quote */}
          <div className="mt-4 md:mt-6 lg:mt-8">
            <p className="text-sm md:text-base lg:text-lg xl:text-xl italic text-gray-600">
              "{isEnglish ? 'Wisdom of the ages, captured in verses.' : 'ஆண்டுகளின் ஞானம், பாடல்களில் பதிவு.'}"
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col space-y-4 mt-6 md:mt-8 lg:mt-10 w-full md:flex-row md:space-y-0 md:space-x-4">
            <a
              href="#about"
              className="relative px-4 py-2 md:px-6 md:py-3 bg-green-700 hover:bg-green-800 text-white font-serif rounded-lg shadow-lg transition-transform duration-300 group text-center"
            >
              <span className="absolute inset-0 bg-green-800 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              {isEnglish ? 'Learn More' : 'மேலும் அறியவும்'}
            </a>
            <a
              href="#get-started"
              className="relative px-4 py-2 md:px-6 md:py-3 bg-yellow-700 hover:bg-yellow-800 text-white font-serif rounded-lg shadow-lg transition-transform duration-300 group text-center"
            >
              <span className="absolute inset-0 bg-yellow-800 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              {isEnglish ? 'Get Started' : 'தொடங்குங்கள்'}
            </a>
          </div>
        </div>

        {/* Right Side - Image and Name */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center p-4">
          {/* Image with Animation - Border Removed */}
          <motion.img
            src="/Images/thiruvalluvar.jpg"
            alt={isEnglish ? 'Illustration of Thirukkural wisdom' : 'திருக்குறள் ஞானத்தின் படம்ஒரு விளக்கம்'}
            className="w-full max-w-md md:max-w-lg h-auto shadow-md object-cover mb-4 -mt-6 md:mt-[-40px] lg:mt-[-60px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          {/* Name of the Person */}
          <p className="text-lg md:text-xl font-serif font-semibold text-black-200">
            {isEnglish ? 'Thiruvalluvar' : 'திருவள்ளுவர்'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
