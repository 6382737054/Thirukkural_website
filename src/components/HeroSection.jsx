import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // Ensure the path is correct
import { motion } from 'framer-motion'; // Import motion from framer-motion


const HeroSection = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'English'; // Adjust according to your language codes

  return (

        <section className="relative w-full h-screen flex flex-col md:flex-row bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
      {/* Background Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center bg-white p-8 md:p-12 lg:p-20">
          {/* Hero Heading */}
          <motion.h1
            className={`${
              isEnglish
                ? 'text-4xl md:text-5xl lg:text-6xl'
                : 'text-3xl md:text-4xl lg:text-5xl'
            } font-bold text-gray-800 mb-6 text-center md:text-left`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {isEnglish
              ? 'Explore the Timeless Wisdom of Thirukkural'
              : 'திருக்குறளின் காலத்திற்கெதிரான ஞானத்தை ஆராயுங்கள்'}
          </motion.h1>
          
          {/* Hero Description */}
          <motion.p
            className={`${
              isEnglish
                ? 'text-lg md:text-xl lg:text-2xl'
                : 'text-base md:text-lg lg:text-xl'
            } text-gray-600 mb-8 text-center md:text-left`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {isEnglish
              ? 'Thirukkural, a treasure of Tamil literature, offers profound insights into morality, ethics, and the human condition. Delve into its verses to discover wisdom that transcends time and culture.'
              : 'தமிழ் இலக்கியத்தின் நகைச்சுவையைச் சொல்கிற திருக்குறள், நேர்மை, நெறிகள் மற்றும் மனித இயல்பு பற்றிய ஆழமான புரிந்துகொள்ளல்களை வழங்குகிறது. காலத்தைத் தாண்டி மற்றும் கலாச்சாரத்தைத் தாண்டி ஞானத்தைப் பரிசுத்தூயும் பாடல்களை ஆராயுங்கள்.'}
          </motion.p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#about" // Scroll to About section
              className="relative px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 group"
            >
              <span className="absolute inset-0 bg-blue-700 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              {isEnglish ? 'Learn More' : 'மேலும் அறியவும்'}
            </a>
            <a
              href="#get-started"
              className="relative px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 group"
            >
              <span className="absolute inset-0 bg-green-700 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              {isEnglish ? 'Get Started' : 'தொடங்குங்கள்'}
            </a>
          </div>
        </div>

        {/* Right Side - Image and Name */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12 lg:p-20">
          {/* Image with Animation */}
          <motion.img
            src="/Images/thiruvalluvar.jpg"
            alt={
              isEnglish
                ? 'Illustration of Thirukkural wisdom'
                : 'திருக்குறள் ஞானத்தின் படம்ஒரு விளக்கம்'
            }
            className="w-full md:w-3/4 lg:w-2/3 h-auto rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          {/* Name of the Person */}
          <p className="mt-4 text-lg md:text-xl font-semibold text-gray-800 text-center">
            {isEnglish ? 'Thiruvalluvar' : 'திருவள்ளுவர்'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
