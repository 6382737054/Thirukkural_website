import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const HistorySection = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'English';

  return (
    <section id="history-section" className="py-12 px-4 md:px-8 bg-gray-200">
      <div className="container mx-auto">
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
              className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-semibold mb-2">{isEnglish ? 'Aram (Virtue)' : 'அறம் (நல்லொழுக்கம்)'}</h2>
              <p>
                {isEnglish
                  ? 'Aram, or virtue, is the first section of Thirukkural. It focuses on ethical and moral values that form the foundation of a righteous life. This section emphasizes the importance of virtues such as honesty, justice, and compassion in personal and social conduct.'
                  : 'அறம், அல்லது நல்லொழுக்கம், திருக்குறளின் முதல் பகுதியாகும். இது நெறிமுறை மற்றும் நீதி குறித்த அடிப்படைகளைப் பற்றியது, நல்ல வாழ்க்கையின் அடிப்படையாக உள்ளது. இந்தப் பகுதி, தனிப்பட்ட மற்றும் சமூக நடத்தைக்கு எவ்வளவு முக்கியம் என்பதைக் கூறுகிறது.'}
              </p>
            </motion.div>

            {/* Card 2 - Porul */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-2">{isEnglish ? 'Porul (Wealth)' : 'பொருள் (செல்வம்)'}</h2>
              <p>
                {isEnglish
                  ? 'Porul, or wealth, is the second section of Thirukkural. It addresses the importance of acquiring and managing wealth, the principles of good governance, and the role of material success in contributing to a well-ordered society.'
                  : 'பொருள், அல்லது செல்வம், திருக்குறளின் இரண்டாவது பகுதியாகும். இது செல்வத்தைப் பெறுவதற்கும் மற்றும் நிர்வகிப்பதற்கும் முக்கியத்துவத்தை, நல்ல நிர்வாகத்தின் கொள்கைகளை, மற்றும் ஒழுங்கான சமுதாயத்திற்கு செல்வம் மிக்க பங்களிப்பு வகிக்கின்றது.'}
              </p>
            </motion.div>

            {/* Card 3 - Inbam */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-2">{isEnglish ? 'Inbam (Love)' : 'இன்பம் (காதல்)'}</h2>
              <p>
                {isEnglish
                  ? 'Inbam, or love, is the third section of Thirukkural. It explores the nature of love and relationships, highlighting the joys and challenges of romantic and familial bonds. This section reflects on the emotional and psychological aspects of love.'
                  : 'இன்பம், அல்லது காதல், திருக்குறளின் மூன்றாவது பகுதியாகும். இது காதலின் மற்றும் உறவுகளின் இயல்புகளை ஆராய்கிறது, காதல் மற்றும் குடும்ப உறவுகளின் மகிழ்ச்சிகள் மற்றும் சவால்களை முன்னிறுத்துகிறது. இந்தப் பகுதி, காதலின் உளவியல் மற்றும் உளவியல் அம்சங்களை பிரதிபலிக்கிறது.'}
              </p>
            </motion.div>
          </div>

          {/* Right Side - Doodles */}
          <div className="w-full md:w-1/3 flex flex-col gap-6 items-center justify-center">
            {/* Doodle for Virtue */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">{isEnglish ? 'Virtue' : 'அறம்'}</h3>
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
                <path d="M8 0a4 4 0 0 0-4 4c0 1.173.441 2.273 1.165 3.095A4.982 4.982 0 0 0 4 8a4 4 0 0 0 8 0c0-1.173-.441-2.273-1.165-3.095A4.982 4.982 0 0 0 12 4a4 4 0 0 0-4-4zm0 1a3 3 0 0 1 3 3c0 .708-.262 1.371-.693 1.894-.479.572-1.107.96-1.851 1.173A3.001 3.001 0 0 1 8 5a3 3 0 0 1-3-3 3 3 0 0 1 3-3zm-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 1a2 2 0 0 0-1 1.732V12a1 1 0 0 0 2 0v-1.268A2 2 0 0 0 7 13v1a1 1 0 0 0 2 0v-1a2 2 0 0 0-1-1.732V12a1 1 0 0 0 2 0v-1a2 2 0 0 0-1-1.732zM8 5a2.99 2.99 0 0 1-2 0 2.99 2.99 0 0 1-1.038-.595A4.982 4.982 0 0 1 4 4a4.98 4.98 0 0 1 .951.355c.363.191.74.304 1.129.326A2.99 2.99 0 0 1 8 5zm0 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
              </svg>
            </div>

            {/* Doodle for Wealth */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">{isEnglish ? 'Wealth' : 'பொருள்'}</h3>
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                <path d="M0 8a.5.5 0 0 1 .5-.5h2.643a.5.5 0 0 1 .447.276L5.597 10.639l2.762-3.103a.5.5 0 0 1 .748-.057L9.934 8.485 13.206 5.67l2.487 2.486a.5.5 0 0 1-.702.702l-2.339-2.338-3.083 2.536-1.697-1.897-2.723 3.058a.5.5 0 0 1-.788-.626L.5 8.1a.5.5 0 0 1-.5-.1z"/>
              </svg>
            </div>

            {/* Doodle for Love */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">{isEnglish ? 'Love' : 'இன்பம்'}</h3>
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="M8 2.748-.014 8.742c-1.05 1.188-1.563 2.786-1.563 4.426C-1.577 16.114 3.478 15.09 8 15.09c4.52 0 9.577 1.024 9.577-2.922 0-1.64-.513-3.238-1.563-4.426L8 2.748z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
