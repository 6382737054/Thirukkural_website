import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext'; // Ensure the path is correct
import Slider from 'react-slick'; // Import react-slick for carousel
import { PrevArrow, NextArrow } from './CustomArrows'; // Import custom arrows
import '@fontsource/playfair-display'; // Ensure this package is installed
import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme styles

const AboutSection = () => {
  const { language } = useLanguage(); // Use the context to get the current language

  // Define content for both languages
  const content = {
    English: {
      title: "About Thirukkural",
      text1: "Thirukkural, composed by the sage Thiruvalluvar, is a celebrated text in Tamil literature, offering timeless wisdom on ethics, morality, and human conduct. It consists of 1,330 couplets, divided into three books: Virtue, Wealth, and Love, each addressing different aspects of life and guiding us towards a balanced and harmonious existence.",
      text2: "Our mission is to preserve and modernize this classic work, making its teachings accessible to contemporary readers. Through detailed resources, interactive interpretations, and educational tools, we aim to connect people with Thirukkural's enduring insights and celebrate Tamil heritage.",
      keyAchievements: [
        { title: "Cultural Preservation", description: "Acknowledged for our efforts in preserving Tamil literary heritage through innovative and educational approaches." },
        { title: "Educational Impact", description: "Recognized for our impactful educational resources and tools that enhance understanding of Thirukkural's teachings." },
        { title: "Community Engagement", description: "Celebrated for engaging with communities and fostering cultural enrichment through interactive projects and events." },
      ],
    },
    Tamil: {
      title: "திருக்குறள் பற்றி",
      text1: "திருக்குறள், திருவள்ளுவர் நாயகரால் இயற்றப்பட்ட தமிழ்ச் சாஸ்திரமாகும், இது நெறிகள், நீதிகள் மற்றும் மனித நடத்தைகளின் ஆழமான அறிவுகளை வழங்குகிறது. இது 1,330 குறள்கள் கொண்டது, நெறி, செல்வம் மற்றும் காதல் என்ற மூன்று பகுதிகளாகப் பிரிக்கப்பட்டுள்ளது, ஒவ்வொன்றும் வாழ்க்கையின் வெவ்வேறு அம்சங்களை எவ்வாறு சமநிலையுடன் நிறைவேற்றுவது என்பதைப் சுட்டிக்காட்டுகிறது.",
      text2: "இந்தத் தொன்மைமான படைப்பைப் பாதுகாக்கும் மற்றும் நவீனமாக்கும் முனைவராக, இதன் கற்றல்களை தற்போதைய வாசகர்களுக்கு எளிதாகக் கிடைக்கச் செய்யத் திட்டமிட்டுள்ளோம். விரிவான வளங்கள், இணைப்பான விளக்கங்கள் மற்றும் கல்வி உபகரணங்கள் மூலம், திருக்குறளின் நிலையான அறிவை மக்களோடு தொடர்பு கொள்ள உறுதி செய்கிறோம் மற்றும் தமிழ் பாரம்பரியத்தை கொண்டாடுகிறோம்.",
      keyAchievements: [
        { title: "பாரம்பரியத்தைப் பாதுகாப்பு", description: "தமிழ் இலக்கிய பாரம்பரியத்தை பாதுகாக்கவும், கல்வி முனைவுகளைப் பயன்படுத்து" },
        { title: "கல்வி தாக்கம்", description: "திருக்குறளின் கற்றல்களை மேம்படுத்துவதற்கான பாத்திரமான கல்வி வளங்கள் மற்றும் கருவிகள்" },
        { title: "சமூக ஈடுபாடு", description: "சமூகத்துடன் தொடர்பு கொள்ளும் மற்றும் கலாச்சார மேம்பாட்டை ஊக்குவிக்கும் இணைப்பான திட்டங்கள் மற்றும் நிகழ்வுகள்" },
      ],
    },
  };

  // Fallback for undefined language content
  const sectionContent = content[language] || content.English;

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="relative w-full py-20 bg-grey overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-2/3 h-2/3 text-gray-200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="100" stroke="currentColor" strokeWidth="30" opacity="0.1"/>
        </svg>
        <svg className="absolute bottom-0 right-0 w-2/3 h-2/3 text-gray-300" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="100" stroke="currentColor" strokeWidth="30" opacity="0.1"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {sectionContent.title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Text */}
          <div className="relative bg-gray-50 p-8 md:p-12 rounded-xl shadow-xl">
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {sectionContent.text1}
            </motion.p>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {sectionContent.text2}
            </motion.p>
          </div>

          {/* Carousel Section */}
          <div className="relative">
            <Slider {...carouselSettings} className="carousel-container">
              {/* Carousel Slides */}
              <div className="carousel-slide">
                <motion.img
                  src="/Images/about.jpg" // Update with your actual image path
                  alt="Carousel Image 1"
                  className="w-full h-[700px] object-cover rounded-xl shadow-2xl" // Set height to match the card
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="carousel-slide">
                <motion.img
                  src="/Images/about2.jpg" // Update with your actual image path
                  alt="Carousel Image 2"
                  className="w-full h-[700px] object-cover rounded-xl shadow-2xl" // Set height to match the card
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="carousel-slide">
                <motion.img
                  src="/Images/about3.jpg" // Update with your actual image path
                  alt="Carousel Image 3"
                  className="w-full h-[700px] object-cover rounded-xl shadow-2xl" // Set height to match the card
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
          
         
             
              
            </Slider>
          </div>
        </div>

        {/* Achievements or Key Features */}
        <div className="mt-16">
          <motion.h3
            className="text-2xl md:text-3xl lg:text-4xl font-serif text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Key Achievements
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sectionContent.keyAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-teal-600 opacity-0 group-hover:opacity-40 transform group-hover:translate-x-0 transition-opacity transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-14 h-14 text-teal-600" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3v13.29l3.72-3.72 1.41 1.41L12 20.71l-5.13-5.13 1.41-1.41L12 16.71V3z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
