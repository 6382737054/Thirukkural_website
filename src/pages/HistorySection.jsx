import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const HistorySection = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'English';

  const [expandedSection, setExpandedSection] = useState(null);

  const toggleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section
      id="history-section"
      className="pt-32 py-20 px-6 md:px-12 bg-gradient-to-r from-blue-50 to-green-50"
    >
      <div className="container mx-auto relative z-10">
        <motion.h1
          className="text-4xl font-bold text-gray-900 text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {isEnglish ? 'Three Sections of Thirukkural' : 'திருக்குறளின் மூன்று பகுதிகள்'}
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-2/3 flex flex-col gap-12">
            {/* Section 1: Aram */}
            <motion.div
              className={`bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform ${expandedSection === 'aram' ? 'scale-105' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                  {isEnglish ? 'Aram (Virtue)' : 'அறம் (நல்லொழுக்கம்)'}
                </h2>
                <button onClick={() => toggleExpand('aram')} className="text-gray-600">
                  {expandedSection === 'aram' ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                </button>
              </div>
              {expandedSection === 'aram' && (
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {isEnglish
                      ? 'Aram, or virtue, is the first section of Thirukkural. It focuses on ethical and moral values that form the foundation of a righteous life. This section emphasizes the importance of virtues such as honesty, justice, and compassion in personal and social conduct.'
                      : 'அறம், அல்லது நல்லொழுக்கம், திருக்குறளின் முதல் பகுதியாகும். இது நெறிமுறை மற்றும் நீதி குறித்த அடிப்படைகளைப் பற்றியது, நல்ல வாழ்க்கையின் அடிப்படையாக உள்ளது. இந்தப் பகுதி, தனிப்பட்ட மற்றும் சமூக நடத்தைக்கு எவ்வளவு முக்கியம் என்பதைக் கூறுகிறது.'}
                  </p>
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
                    {isEnglish ? '“Virtue is the foundation of a righteous life.”' : '“அறம், நல்ல வாழ்வின் அடித்தளமாகும்.”'}
                  </blockquote>
                </div>
              )}
            </motion.div>

            {/* Section 2: Porul */}
            <motion.div
              className={`bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform ${expandedSection === 'porul' ? 'scale-105' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                  {isEnglish ? 'Porul (Wealth)' : 'பொருள் (செல்வம்)'}
                </h2>
                <button onClick={() => toggleExpand('porul')} className="text-gray-600">
                  {expandedSection === 'porul' ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                </button>
              </div>
              {expandedSection === 'porul' && (
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {isEnglish
                      ? 'Porul, or wealth, is the second section of Thirukkural. It addresses the importance of acquiring and managing wealth, the principles of good governance, and the role of material success in contributing to a well-ordered society.'
                      : 'பொருள், அல்லது செல்வம், திருக்குறளின் இரண்டாவது பகுதியாகும். இது செல்வத்தைப் பெறுவதற்கும் மற்றும் நிர்வகிப்பதற்கும் முக்கியத்துவத்தை, நல்ல நிர்வாகத்தின் கொள்கைகளை, மற்றும் ஒழுங்கான சமுதாயத்திற்கு செல்வம் மிக்க பங்களிப்பு வகிக்கின்றது.'}
                  </p>
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
                    {isEnglish ? '“Wealth must be managed wisely for a prosperous society.”' : '“செல்வம், செழிப்பான சமுதாயத்திற்காக அறிந்த முறையில் நிர்வகிக்கப்பட வேண்டும்.”'}
                  </blockquote>
                </div>
              )}
            </motion.div>

            {/* Section 3: Inbam */}
            <motion.div
              className={`bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform ${expandedSection === 'inbam' ? 'scale-105' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                  {isEnglish ? 'Inbam (Love)' : 'இன்பம் (காதல்)'}
                </h2>
                <button onClick={() => toggleExpand('inbam')} className="text-gray-600">
                  {expandedSection === 'inbam' ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                </button>
              </div>
              {expandedSection === 'inbam' && (
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {isEnglish
                      ? 'Inbam, or love, is the third section of Thirukkural. It explores the nature of love and relationships, highlighting the joys and challenges of romantic and familial bonds. This section reflects on the emotional and psychological aspects of love.'
                      : 'இன்பம், அல்லது காதல், திருக்குறளின் மூன்றாவது பகுதியாகும். இது காதலின் மற்றும் உறவுகளின் இயல்புகளை ஆராய்கிறது, காதல் மற்றும் குடும்ப உறவின் மகிழ்ச்சிகள் மற்றும் சவால்களை முன்னிறுத்துகிறது. இந்தப் பகுதி, காதலின் உளவியல் மற்றும் உளவியல் அம்சங்களை பிரதிபலிக்கிறது.'}
                  </p>
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
                    {isEnglish ? '“Love is the essence of human connection.”' : '“காதல், மனித உறவுகளின் அடிப்படையாகும்.”'}
                  </blockquote>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Side Enhancements */}
          <motion.div 
            className="w-full md:w-1/3 flex flex-col gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {isEnglish ? 'Key Insights' : 'முக்கிய உண்மைகள்'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isEnglish
                  ? 'Thirukkural presents a holistic view of life through the lenses of virtue, wealth, and love. Each section complements the others, creating a balanced approach to personal and societal development.'
                  : 'திருக்குறள், அறம், பொருள் மற்றும் இன்பத்தின் மூலம் வாழ்க்கையின் முழுமையான கண்ணோட்டத்தை வழங்குகிறது. ஒவ்வொரு பகுதியும் மற்றவற்றைப் பூர்த்தி செய்கிறது, தனிப்பட்ட மற்றும் சமூக வளர்ச்சிக்கான சமநிலையான அணுகுமுறை உருவாக்குகிறது.'}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isEnglish
                  ? 'The teachings of Thirukkural encourage ethical living, responsible governance, and meaningful relationships, making it a timeless guide for all.'
                  : 'திருக்குறளின் கற்றல்கள், நெறிமுறை வாழ்க்கை, பொறுப்பான நிர்வாகம் மற்றும் முக்கியமான உறவுகளை ஊக்குவிக்கிறது, இது எல்லாருக்கும் காலகட்டத்திற்கேற்ப வழிகாட்டியாக இருக்கிறது.'}
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>- Emphasis on virtues</li>
                <li>- Importance of wealth and governance</li>
                <li>- Exploration of love and relationships</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
