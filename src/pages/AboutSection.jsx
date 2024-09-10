import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Import Link for smooth scrolling

const AboutSection = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'English';

  return (
    <section id="about-section" className="py-8 px-4 md:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {isEnglish ? 'About Thirukkural' : 'திருக்குறள் பற்றியவை'}
        </motion.h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-2/3">
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {isEnglish
                ? 'Thirukkural, authored by the ancient Tamil poet and philosopher Thiruvalluvar, is a classical Tamil text consisting of 1,330 couplets or Kurals. It is divided into three sections: Aram (virtue), Porul (wealth), and Inbam (love). This text is highly revered in Tamil literature and is considered a moral guide that provides timeless wisdom on leading a righteous and fulfilling life.'
                : 'திருக்குறள், பண்டைய தமிழ் கவிஞர் மற்றும் தத்துவவாதி திருவள்ளுவர் அவர்களால் எழுத்து செய்யப்பட்ட ஒரு தமிழ் உரை ஆகும், இது 1,330 குறள்களை கொண்டது. இது மூன்று பிரிவுகளில் வகுக்கப்படுகிறது: அறம் (நெறி), பொருள் (செல்வம்), மற்றும் இன்பம் (அன்பு). இந்த உரை தமிழின் இலக்கியத்தில் மிகவும் மதிக்கப் படுகிறது மற்றும் நேர்மையான மற்றும் மகிழ்ச்சியான வாழ்க்கையை வழிகாட்டும் எளிய மற்றும் நிலையான ஞானத்தை வழங்குகிறது.'}
            </motion.p>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {isEnglish
                ? 'The Thirukkural addresses a wide range of topics, from personal ethics and virtue to governance and justice, making it a comprehensive guide for various aspects of life. Its teachings emphasize the importance of integrity, humility, and compassion, and offer practical advice on achieving harmony and balance in personal and social interactions.'
                : 'திருக்குறள், தனிப்பட்ட நெறிமுறைகள் மற்றும் நற்குணங்களிலிருந்து நிர்வாகம் மற்றும் நீதி வரை, வாழ்க்கையின் பல அம்சங்களை பற்றிய முறுகுகளை அணுகிக்கொள்கிறது. இதன் போதனைகள் நேர்மையானது, தயவுகூரியமை மற்றும் பண்பாட்டின் முக்கியத்துவத்தை உளர்த்துகிறது மற்றும் தனிப்பட்ட மற்றும் சமூக தொடர்புகளில் சமத்துவம் மற்றும் சமநிலையை அடைவதற்கான நடைமுறை ஆலோசனைகளை வழங்குகிறது.'}
            </motion.p>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {isEnglish
                ? 'One of the key benefits of Thirukkural is its ability to provide guidance that is both universal and timeless. Its principles are applicable to various cultures and eras, making it a valuable resource for personal development and ethical living. By studying Thirukkural, individuals can gain insights into leading a balanced life, understanding their duties towards themselves and others, and contributing positively to society.'
                : 'திருக்குறளின் முக்கியமான நன்மைகளில் ஒன்று அதன் சிந்தனைகளை உலகளாவிய மற்றும் காலமற்றவை என்பதை வழங்கும் திறன். அதன் கொள்கைகள் பல்வேறு கலாச்சாரங்கள் மற்றும் காலங்களில் பயன்படுத்தக்கூடியவை, இதனால் இது தனிப்பட்ட வளர்ச்சி மற்றும் நெறிமுறை வாழ்வதற்கான முக்கியமான ஆதாரமாக மாறுகிறது.'}
            </motion.p>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {isEnglish
                ? 'Thirukkural has inspired generations of thinkers, leaders, and ordinary individuals with its profound insights into human nature and ethics. By reflecting on its teachings, readers can develop a deeper understanding of their values, enhance their relationships, and cultivate a more meaningful life.'
                : 'திருக்குறள், மனித தன்மை மற்றும் நெறிகள் குறித்த அதன் ஆழமான உள்ளடக்கங்களுடன் தலைமுறைகளைத் தாக்கியுள்ளது. அதன் போதனைகளை பிரதிபலிப்பதன் மூலம், வாசகர்கள் தங்கள் மதிப்புகள் பற்றி ஆழமான புரிதலைக் காணலாம்.'}
            </motion.p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <motion.img
              src="/Images/about.jpg"
              alt={isEnglish ? 'A visual representation of our mission and vision' : 'எங்கள் பணி மற்றும் குறிக்கோளின் படம்விளக்கம்'}
              className="w-full max-w-xs h-auto rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        {/* Button to Scroll to History Section */}
        <div className="text-center mt-8">
          <Link to="history-section" smooth={true} duration={500} className="px-6 py-2 font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
            {isEnglish ? 'Learn More About History' : 'வரலாற்றைப் பற்றி மேலும் அறிய'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
