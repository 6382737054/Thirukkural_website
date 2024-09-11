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
    <section id="history-section" className="py-20 px-6 md:px-12 bg-white">
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
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {isEnglish
                      ? 'The teachings of Aram guide individuals to lead a life filled with virtues, promoting harmony and righteousness in society.'
                      : 'அறத்தின் கற்றல்களுக்கு, ஒரு நற்குணமான வாழ்க்கையை வாழ்வதற்கான வழிகாட்டுதல்களை வழங்குகிறது, சமுதாயத்தில் அமைதி மற்றும் நேர்மையை மேம்படுத்துகிறது.'}
                  </p>
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
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {isEnglish
                      ? 'Porul emphasizes the significance of wealth in achieving societal stability and prosperity, guiding leaders and citizens alike in managing resources effectively.'
                      : 'பொருள், சமூக நிலைத்தன்மை மற்றும் நன்மையை அடைய செல்வத்தின் முக்கியத்துவத்தை வலியுறுத்துகிறது, தலைவர்களும் குடிமக்களும் வளங்களை திறம்பட நிர்வகிக்க வழிகாட்டுகிறது.'}
                  </p>
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
                      : 'இன்பம், அல்லது காதல், திருக்குறளின் மூன்றாவது பகுதியாகும். இது காதலின் மற்றும் உறவுகளின் இயல்புகளை ஆராய்கிறது, காதல் மற்றும் குடும்ப உறவுகளின் மகிழ்ச்சிகள் மற்றும் சவால்களை முன்னிறுத்துகிறது. இந்தப் பகுதி, காதலின் உளவியல் மற்றும் உளவியல் அம்சங்களை பிரதிபலிக்கிறது.'}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {isEnglish
                      ? 'The exploration of love in Inbam teaches about the dynamics of human relationships and provides insights into the emotional depth and complexities of affection.'
                      : 'இன்பத்தில் காதலின் ஆராய்ச்சி, மனித உறவுகளின் மாற்றங்களைப் பற்றிய கற்றலையும், அன்பின் உளவியல் ஆழத்தையும் மற்றும் சிக்கல்களைப் பற்றிய கருத்துக்களை வழங்குகிறது.'}
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Side Enhancements */}
          <div className="w-full md:w-1/3 flex flex-col gap-8">
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {isEnglish ? 'Key Insights' : 'முக்கிய பார்வைகள்'}
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                {isEnglish
                  ? 'Explore key insights and notable quotes from each section of Thirukkural to deepen your understanding of these timeless teachings.'
                  : 'திருக்குறளின் ஒவ்வொரு பகுதியில் உள்ள முக்கியமான நுண்ணறிவுகளை மற்றும் குறிப்பிடத்தக்க மேற்கோள்களைப் பரிசீலிக்கவும், இந்த முறைமையான கற்றல்களை மேலும் விளக்கமாக புரிந்துகொள்ளுங்கள்.'}
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>{isEnglish ? 'Aram: "Virtue is the foundation of a good life."' : 'அறம்: "நல்ல வாழ்க்கையின் அடிப்படை நல்லொழுக்கம்."'}</li>
                <li>{isEnglish ? 'Porul: "Wealth must be used wisely for the betterment of society."' : 'பொருள்: "செல்வத்தை சமூக மேம்பாட்டிற்காக புத்திசாலியாகப் பயன்படுத்தவேண்டும்."'}</li>
                <li>{isEnglish ? 'Inbam: "Love enriches our lives and relationships."' : 'இன்பம்: "காதல் நமது வாழ்க்கையையும் உறவுகளையும் வளப்படுத்துகிறது."'}</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {isEnglish ? 'Related Resources' : 'சம்பந்தப்பட்ட வளங்கள்'}
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                {isEnglish
                  ? 'Discover additional resources to deepen your knowledge of Thirukkural. Explore books, articles, and videos related to these teachings.'
                  : 'திருக்குறளைப் பற்றிய உங்கள் அறிவை மேம்படுத்த கூடுதல் வளங்களைப் கண்டறியவும். இந்தக் கற்றல்களைப் பற்றிய புத்தகங்கள், கட்டுரைகள், மற்றும் வீடியோக்களைப் ஆராயவும்.'}
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li><a href="https://www.example.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Book: Understanding Thirukkural</a></li>
                <li><a href="https://www.example.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Article: The Wisdom of Thirukkural</a></li>
                <li><a href="https://www.example.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Video: Thirukkural Explained</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
