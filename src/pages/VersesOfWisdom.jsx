import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext'; // Import your language context

const versesData = [
  {
    id: 1,
    tamil: "அகர முதல எழுத்தெல்லாம் ஆதி",
    translation: "‘A ’ is the first of all letters.", 
    commentary: "This verse emphasizes the importance of beginnings.",
    detailedExplanation: "The letter 'A' is recognized as the first letter in the Tamil alphabet, presenting the beginning of knowledge and learning. This verse highlights the significance of starting with the fundamentals and acknowledges that every great achievement begins with a single step."
  },
  {
    id: 2,
    tamil: "கற்றது கை மண் Level மண்.",
    translation: "Knowledge is like soil; it requires proper cultivation.",
    commentary: "This verse signifies the need for nurturing knowledge.",
    detailedExplanation: "Just as soil needs care and cultivation to produce healthy crops, knowledge must be cultivated through study, practice, and application. This verse encourages continuous learning and improvement, emphasizing that knowledge is not static but a dynamic process."
  },
  {
    id: 3,
    tamil: "அன்பின் முன் காமம் வராது.",
    translation: "Desire does not exist before love.",
    commentary: "This verse speaks of the power of love.",
    detailedExplanation: "In this context, love is presented as the foundation for all relationships. It suggests that true desire is rooted in love and that without love, desire loses its meaning. This verse encourages us to prioritize love in our lives, implying that genuine relationships are built on affection and connection."
  },
  {
    id: 4,
    tamil: "கடவுள் சிறுகோள் வடிவத்தை.",
    translation: "God shapes the forms of those who are good.",
    commentary: "This verse signifies the divine recognition of virtue.",
    detailedExplanation: "This verse illustrates the belief that divine forces guide and shape the destinies of those who lead virtuous lives. It implies that good deeds and righteousness attract divine blessings, leading to a fulfilling life. It encourages individuals to act with integrity and kindness, reinforcing the idea that morality has divine support."
  },
  {
    id: 5,
    tamil: "மக்கள் மீது ஆதார் பற்று.",
    translation: "The foundation of all is mutual support.",
    commentary: "This verse emphasizes the importance of community and mutual assistance.",
    detailedExplanation: "This verse underscores the idea that societal cohesion is built on individuals supporting one another. It highlights the interconnectedness of humanity and stresses that mutual aid fosters strength and resilience within a community. This teaching encourages us to build relationships based on trust and cooperation."
  },
  {
    id: 6,
    tamil: "வீரன் கண்டு பிறந்த பிறந்த படிகம்.",
    translation: "A true warrior does not fear defeat.",
    commentary: "This verse speaks to the valor and resilience of a warrior.",
    detailedExplanation: "This verse celebrates the spirit of bravery and the willingness to confront challenges without fear of failure. It advocates for a mindset where overcoming obstacles is more important than avoiding them. This teaching inspires individuals to embrace their fears and strive for greatness despite the possibility of setbacks."
  },
];

const themesData = [
  { 
    name: { english: 'Love', tamil: 'காதல்' }, 
    description: { english: 'Verses focusing on love and relationships. Love is depicted as the foundation of all meaningful connections, promoting harmony and understanding.', tamil: 'காதல் மற்றும் உறவுகளை மையமாகக் கொண்டு பாடல்கள். காதல், அனைத்து அர்த்தமுள்ள தொடர்புகளின் அடிப்படையாகக் காணப்படுகிறது, ஒற்றுமையும் புரிதலையும் ஊக்குவிக்கிறது.' }
  },
  { 
    name: { english: 'Ethics', tamil: 'அறம்' }, 
    description: { english: 'Verses on morality and righteousness. This theme explores the significance of ethical conduct in personal and public life, emphasizing integrity and accountability.', tamil: 'நெறி மற்றும் நீதியைப் பற்றிய பாடல்கள். இந்த தளம் தனிப்பட்ட மற்றும் பொதுத்தோற்றங்களில் நீதியின் முக்கியத்துவத்தை ஆராய்கிறது, சத்தியம் மற்றும் பொறுப்பேற்கையை வலியுறுத்துகிறது.' }
  },
  { 
    name: { english: 'Governance', tamil: 'நடவடிக்கை' }, 
    description: { english: 'Verses related to leadership and governance. Effective leadership is portrayed as essential for societal progress, encouraging leaders to act with wisdom and justice.', tamil: 'தொடர்பான பாட்டுகள். சமூக முன்னேற்றத்திற்கு முக்கியமாகக் காணப்படும் மாறுபாட்டிற்கு வழிகாட்டிகள் ஆற்றல் மற்றும் நீதியுடன் செயல்படச் சொல்லும்.' }
  },
  { 
    name: { english: 'Knowledge', tamil: 'அறிவு' }, 
    description: { english: 'Verses emphasizing the importance of learning. Knowledge is likened to a nurturing soil, requiring continuous cultivation to yield wisdom and insight.', tamil: 'கற்றலின் முக்கியத்துவத்தை வலியுறுத்தும் பாடல்கள். அறிவு, அறிவுத்திறனை வழங்குவதற்காகத் தொடர்ந்து பராமரிக்க வேண்டிய மண் போல இருக்கின்றது.' }
  },
];

const VersesOfWisdom = () => {
  const { language } = useLanguage(); // Get the current language from context
  const [selectedVerse, setSelectedVerse] = useState(versesData[0]);

  const handleVerseSelect = (verse) => {
    setSelectedVerse(verse);
  };

  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-6">
        {language === 'Tamil' ? 'திருக்குறள் பாடல்கள்' : 'Verses of Wisdom from Thirukkural'}
      </h1>
      <p className="text-lg text-center mb-8">
        {language === 'Tamil' ? 'காலத்தைக் கற்றுச் சென்ற பாடல்களை ஆராயுங்கள்.' : 'Explore the timeless teachings that inspire generations.'}
      </p>

      {/* Featured Verses */}
      <h2 className="text-3xl font-semibold mb-4">
        {language === 'Tamil' ? 'சிறந்த பாடல்கள்' : 'Featured Verses'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {versesData.map((verse) => (
          <div key={verse.id} className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold">{language === 'Tamil' ? verse.tamil : verse.translation}</h3>
            <p className="italic text-gray-600">{language === 'Tamil' ? verse.translation : verse.tamil}</p>
            <p className="mt-2">{verse.commentary}</p>
            <button
              onClick={() => handleVerseSelect(verse)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
            >
              {language === 'Tamil' ? 'விவரம் காட்டு' : 'View Details'}
            </button>
          </div>
        ))}
      </div>
{/* Selected Verse Details */}
<div className="bg-gradient-to-r from-blue-200 to-green-100 p-6 rounded-lg shadow-xl mb-8 transition-transform transform hover:scale-105">
  <h2 className="text-3xl font-semibold mb-4 text-center text-black-700">
    {language === 'Tamil' ? 'தேர்ந்தெடுக்கப்பட்ட பாடல்' : 'Selected Verse'}
  </h2>
  <h3 className="text-2xl font-bold text-center mb-2">
    {selectedVerse[language === 'Tamil' ? 'tamil' : 'translation']}
  </h3>
  <p className="italic text-center text-gray-600 mb-4">{language === 'Tamil' ? selectedVerse.translation : selectedVerse.tamil}</p>
  <div className="bg-white p-4 rounded-lg shadow-md">
    <p className="mb-4">{selectedVerse.commentary}</p>
    <h4 className="text-xl font-semibold mt-4 mb-2 text-indigo-600">
      {language === 'Tamil' ? 'விளக்கம்' : 'Detailed Explanation'}
    </h4>
    <p className="text-gray-700">{selectedVerse.detailedExplanation}</p>
  </div>
</div>

      {/* Themes Section */}
      <h2 className="text-3xl font-semibold mb-4">
        {language === 'Tamil' ? 'திறன்கள்' : 'Themes of Thirukkural'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {themesData.map((theme, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-yellow-100 to-orange-100">
            <h3 className="text-xl font-bold">{language === 'Tamil' ? theme.name.tamil : theme.name.english}</h3>
            <p className="mt-2 text-gray-700">{language === 'Tamil' ? theme.description.tamil : theme.description.english}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VersesOfWisdom;
