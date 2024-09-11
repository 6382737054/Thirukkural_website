import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const HistorySection = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'English';

  return (
    <section
      id="history-section"
      className="py-12 px-4 md:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(to right, #f9f2e7, #f4e9d9, #f0e6d6)' }}
    >
      {/* Background Graphics */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full h-full -z-10"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="20" cy="20" r="15" fill="#e2e2e2" />
          <circle cx="80" cy="80" r="15" fill="#d4a4a4" />
          <circle cx="50" cy="40" r="15" fill="#b7d4a4" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Title Section */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {isEnglish ? 'Three Sections of Thirukkural' : 'திருக்குறளின் மூன்று பகுதிகள்'}
        </motion.h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - History Cards */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            {/* Card 1 - Aram */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
              whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h2
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {isEnglish ? 'Aram (Virtue)' : 'அறம் (நல்லொழுக்கம்)'}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {isEnglish
                  ? 'Aram, or virtue, is the first section of Thirukkural. It focuses on ethical and moral values that form the foundation of a righteous life. This section emphasizes the importance of virtues such as honesty, justice, and compassion in personal and social conduct.'
                  : 'அறம், அல்லது நல்லொழுக்கம், திருக்குறளின் முதல் பகுதியாகும். இது நெறிமுறை மற்றும் நீதி குறித்த அடிப்படைகளைப் பற்றியது, நல்ல வாழ்க்கையின் அடிப்படையாக உள்ளது. இந்தப் பகுதி, தனிப்பட்ட மற்றும் சமூக நடத்தைக்கு எவ்வளவு முக்கியம் என்பதைக் கூறுகிறது.'}
              </motion.p>
            </motion.div>

            {/* Card 2 - Porul */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
              whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h2
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {isEnglish ? 'Porul (Wealth)' : 'பொருள் (செல்வம்)'}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {isEnglish
                  ? 'Porul, or wealth, is the second section of Thirukkural. It addresses the importance of acquiring and managing wealth, the principles of good governance, and the role of material success in contributing to a well-ordered society.'
                  : 'பொருள், அல்லது செல்வம், திருக்குறளின் இரண்டாவது பகுதியாகும். இது செல்வத்தைப் பெறுவதற்கும் மற்றும் நிர்வகிப்பதற்கும் முக்கியத்துவத்தை, நல்ல நிர்வாகத்தின் கொள்கைகளை, மற்றும் ஒழுங்கான சமுதாயத்திற்கு செல்வம் மிக்க பங்களிப்பு வகிக்கின்றது.'}
              </motion.p>
            </motion.div>

            {/* Card 3 - Inbam */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
              whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h2
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {isEnglish ? 'Inbam (Love)' : 'இன்பம் (காதல்)'}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {isEnglish
                  ? 'Inbam, or love, is the third section of Thirukkural. It explores the nature of love and relationships, highlighting the joys and challenges of romantic and familial bonds. This section reflects on the emotional and psychological aspects of love.'
                  : 'இன்பம், அல்லது காதல், திருக்குறளின் மூன்றாவது பகுதியாகும். இது காதலின் மற்றும் உறவுகளின் இயல்புகளை ஆராய்கிறது, காதல் மற்றும் குடும்ப உறவுகளின் மகிழ்ச்சிகள் மற்றும் சவால்களை முன்னிறுத்துகிறது. இந்தப் பகுதி, காதலின் உளவியல் மற்றும் உளவியல் அம்சங்களை பிரதிபலிக்கிறது.'}
              </motion.p>
            </motion.div>
          </div>

          {/* Right Side - Doodles */}
          <div className="w-full md:w-1/3 flex flex-col gap-6 items-center justify-center">
            {/* Doodle for Virtue */}
            <motion.div
              className="flex flex-col items-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-2">{isEnglish ? 'Virtue' : 'அறம்'}</h3>
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-lightbulb animate-pulse" viewBox="0 0 16 16">
                <path d="M8 0a4 4 0 0 0-4 4c0 1.173.506 2.21 1.305 2.945C5.04 7.5 5.518 8 6 8h4a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-4zM4 4a3.98 3.98 0 0 1 .545-1.612C5.702 1.768 6.838 1 8 1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a2 2 0 0 0-2 2v.02c.657-.059 1.315-.02 1.975.065C7.447 5.806 7 5.947 7 6v1h2V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1H2v1.5a1.5 1.5 0 0 0 1.5 1.5h.723a5.86 5.86 0 0 0 .354 1H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-.614a5.838 5.838 0 0 0 .289-1.5H12a1.5 1.5 0 0 0 1.5-1.5V6h-.5a1 1 0 0 0-1-1H8V4H4zm1.613 8h3.774a1.5 1.5 0 0 0 1.463-1.25H6.15a1.5 1.5 0 0 0 1.463 1.25z"/>
              </svg>
            </motion.div>

            {/* Doodle for Wealth */}
            <motion.div
              className="flex flex-col items-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-2">{isEnglish ? 'Wealth' : 'பொருள்'}</h3>
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cash-coin animate-pulse" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM8 15a7 7 0 1 1 7-7 7 7 0 0 1-7 7zm-.5-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v.5h-5v-.5zM5 8a3 3 0 0 1 3 3v1H7v-1a1 1 0 0 0-1-1H4v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8zm1.5 1a.5.5 0 0 1 .5.5v.5H4v-.5a.5.5 0 0 1 .5-.5h4zm1.5-2.5v1a.5.5 0 0 1-1 0v-1h1z"/>
              </svg>
            </motion.div>

            {/* Doodle for Love */}
            <motion.div
              className="flex flex-col items-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-2">{isEnglish ? 'Love' : 'இன்பம்'}</h3>
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart animate-pulse" viewBox="0 0 16 16">
                <path d="M4.5 0C2.014 0 0 2.014 0 4.5S2.014 9 4.5 9c.935 0 1.9-.292 2.684-.8a5.53 5.53 0 0 1 2.312-.8c.935 0 1.9.292 2.684.8a5.526 5.526 0 0 1 2.684.8C14.9 8.708 15.865 9 16.8 9 16.8 5.5 13.357 2 9.5 2c-.935 0-1.9.292-2.684.8a5.53 5.53 0 0 0-2.312.8A5.526 5.526 0 0 0 4.5 0zM4.5 1c1.03 0 2.075.33 2.927.929L8 2.665l.573-.736A4.528 4.528 0 0 1 11.5 1C13.957 1 16 3.044 16 4.5c0 1.34-.722 2.482-1.774 3.088-.627.358-1.271.548-1.73.542.42-.629.74-1.282.74-1.873C13.236 4.678 11.902 3 10.5 3c-.634 0-1.229.32-1.72.823L8 4.65l-.78-.927A3.98 3.98 0 0 0 5.5 3c-1.34 0-2.482.722-3.088 1.774-.358.627-.548 1.271-.542 1.73.629-.42 1.282-.74 1.873-.74-.242 0-.484.03-.723.09C2.878 6.213 2 7.88 2 9.5c0 2.63 3.144 4.75 7.215 4.75 2.5 0 4.8-.68 6.533-1.719-.767.162-1.572.269-2.348.269-3.87 0-7-3.134-7-7 0-.72.21-1.425.573-2.012.393-.658.889-1.21 1.488-1.643L4.5 1z"/>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
