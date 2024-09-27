import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext'; // Ensure the import path is correct

// Sample data for verses
const versesData = [
  {
    id: 1,
    tamil: 'அறம் செய விரும்பு.',
    translation: 'Desire to do righteousness.',
    commentary: {
      tamil: 'இறந்த பிறகு வரும் சிரிப்பே, உயிரினங்கள் என்பதே இங்கு அல்ல; நன்மை செய்யும் உள்ளம் கொண்டவர்கள் நினைவில்',
      english: 'Only the ones who desire to do good will attain joy in the afterlife.',
    },
    detailedExplanation: {
      tamil: 'நன்மையை நோக்கி செல்வது மனிதனின் கடமையாகும். நல்ல காரியங்களை செய்வதற்கு விருப்பம் கொண்டு செயல்பட வேண்டும்.',
      english: 'It is the duty of humans to strive towards goodness. One must act with a desire to do good deeds.',
    },
  },
  {
    id: 2,
    tamil: 'அன்பே பரந்தவன்.',
    translation: 'Love is expansive.',
    commentary: {
      tamil: 'அன்பு மனித மனங்களை இணைக்கும் மூலமாகவும், நமது வாழ்க்கையை வளமிக்கதாக மாற்றும்.',
      english: 'Love connects human hearts and enriches our lives.',
    },
    detailedExplanation: {
      tamil: 'காதல் மற்றவர்களை நேசிப்பது மட்டுமல்ல; அது அனைவரும் ஒருங்கிணைந்து வாழ்வதற்கான ஆழமான கருதுகோளாகும்.',
      english: 'Love is not just about loving others; it is a profound philosophy that allows everyone to live in harmony.',
    },
  },
  {
    id: 3,
    tamil: 'வினையின்றி வியக்காதே.',
    translation: 'Do not wonder without action.',
    commentary: {
      tamil: 'இயலும் சிறிய செயல்களில் கூட, நிறைவேற்றாதே!',
      english: 'In every little action that can be done, do not leave it unfulfilled!',
    },
    detailedExplanation: {
      tamil: 'எண்ணங்கள் மட்டுமல்ல, செயல்களில் முடியும்; அதனால் அச்சம் இல்லாமல் முயற்சி செய்க.',
      english: 'It is not just thoughts but actions that make a difference; therefore, try without fear.',
    },
  },
];

// Sample data for themes
const themesData = [
  {
    name: {
      english: 'Wisdom',
      tamil: 'அறிவு',
    },
    description: {
      english: 'The importance of knowledge and wisdom in life.',
      tamil: 'வாழ்க்கையில் அறிவும் அறிவின் முக்கியத்துவம்.',
    },
  },
  {
    name: {
      english: 'Love',
      tamil: 'காதல்',
    },
    description: {
      english: 'The power of love and compassion in relationships.',
      tamil: 'உறவுகளில் காதலுக்கும் கருணைக்கும் வழங்கிய சக்தி.',
    },
  },
  {
    name: {
      english: 'Virtue',
      tamil: 'நல்லெண்ணம்',
    },
    description: {
      english: 'Living a life of virtue and integrity.',
      tamil: 'நல்லெண்ணம் மற்றும் நேர்மையாக வாழ்வது.',
    },
  },
  {
    name: {
      english: 'Community',
      tamil: 'சமூகம்',
    },
    description: {
      english: 'The role of community and mutual support.',
      tamil: 'சமூகத்தின் மற்றும் பரஸ்பர ஆதரவின் வேலையை.',
    },
  },
];

const VersesOfWisdom = () => {
  const { language } = useLanguage(); // Get the current language from context
  const [selectedVerse, setSelectedVerse] = useState(versesData[0]);

  const handleVerseSelect = (verse) => {
    setSelectedVerse(verse);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-blue-300 p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-6 shadow-lg">
        {language === 'Tamil' ? 'திருக்குறள் பாடல்கள்' : 'Verses of Wisdom from Thirukkural'}
      </h1>
      <p className="text-lg text-center text-white mb-8 shadow-lg">
        {language === 'Tamil' ? 'காலத்தைக் கற்றுச் சென்ற பாடல்களை ஆராயுங்கள்.' : 'Explore the timeless teachings that inspire generations.'}
      </p>

      {/* Featured Verses */}
      <h2 className="text-3xl font-semibold mb-4 text-center text-white">
        {language === 'Tamil' ? 'சிறந்த பாடல்கள்' : 'Featured Verses'}
      </h2>

      <div className="flex flex-col items-center">
        {versesData.map((verse) => (
          <div
            key={verse.id}
            className="bg-white p-4 rounded-lg shadow-lg mb-4 w-full max-w-md transition-transform duration-300 hover:shadow-xl cursor-pointer transform hover:scale-105"
            onClick={() => handleVerseSelect(verse)}
          >
            <h3 className="text-xl font-bold text-blue-600">{language === 'Tamil' ? verse.tamil : verse.translation}</h3>
            <p className="mt-2">{verse.commentary[language]}</p>
          </div>
        ))}
      </div>

      {/* Selected Verse Details */}
      <div className="bg-white p-6 rounded-lg shadow-xl mt-8 transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4 text-center text-black">
          {language === 'Tamil' ? 'தேர்ந்தெடுக்கப்பட்ட பாடல்' : 'Selected Verse'}
        </h2>
        <h3 className="text-2xl font-bold text-center mb-2">
          {selectedVerse[language === 'Tamil' ? 'tamil' : 'translation']}
        </h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="mb-4">{selectedVerse.commentary[language]}</p>
          <h4 className="text-xl font-semibold mt-4 mb-2 text-indigo-600">
            {language === 'Tamil' ? 'விளக்கம்' : 'Detailed Explanation'}
          </h4>
          <p className="text-gray-700">
            {selectedVerse.detailedExplanation[language]}
          </p>
        </div>
      </div>

      {/* Themes Section */}
      <h2 className="text-3xl font-semibold mb-4 text-center mt-8 text-white">
        {language === 'Tamil' ? 'திறன்கள்' : 'Themes of Thirukkural'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {themesData.map((theme, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">{theme.name[language]}</h3>
            <p>{theme.description[language]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VersesOfWisdom;
