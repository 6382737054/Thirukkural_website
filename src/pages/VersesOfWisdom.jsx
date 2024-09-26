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
  { name: 'Love', description: 'Verses focusing on love and relationships. Love is depicted as the foundation of all meaningful connections, promoting harmony and understanding.' },
  { name: 'Ethics', description: 'Verses on morality and righteousness. This theme explores the significance of ethical conduct in personal and public life, emphasizing integrity and accountability.' },
  { name: 'Governance', description: 'Verses related to leadership and governance. Effective leadership is portrayed as essential for societal progress, encouraging leaders to act with wisdom and justice.' },
  { name: 'Knowledge', description: 'Verses emphasizing the importance of learning. Knowledge is likened to a nurturing soil, requiring continuous cultivation to yield wisdom and insight.' },
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
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          {language === 'Tamil' ? 'தேர்ந்தெடுக்கப்பட்ட பாடல்' : 'Selected Verse'}
        </h2>
        <h3 className="text-xl font-bold">{selectedVerse[language === 'Tamil' ? 'tamil' : 'translation']}</h3>
        <p className="italic text-gray-600">{selectedVerse.translation}</p>
        <p className="mt-2">{selectedVerse.commentary}</p>
        <h4 className="mt-4 text-lg font-semibold">{language === 'Tamil' ? 'விளக்கம்' : 'Detailed Explanation'}</h4>
        <p className="mt-1">{selectedVerse.detailedExplanation}</p>
      </div>

      {/* Themes Section */}
      <h2 className="text-3xl font-semibold mb-4">
        {language === 'Tamil' ? 'திறன்கள்' : 'Themes of Thirukkural'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {themesData.map((theme, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-yellow-100 to-orange-100">
            <h3 className="text-xl font-bold">{theme.name}</h3>
            <p>{theme.description}</p>
          </div>
        ))}
      </div>

      {/* Closing Thoughts */}
      <div className="text-center mt-8">
        <h2 className="text-3xl font-semibold">{language === 'Tamil' ? 'அந் னுகூறும் நிகர்நிகரானது' : 'The Timeless Wisdom'}</h2>
        <p className="mt-2">{language === 'Tamil' ? 'இந்த பாடல்கள் தலைமுறைகளை ஊக்குவிக்கின்றன.' : 'These verses continue to inspire and guide generations.'}</p>
      </div>
    </div>
  );
};

export default VersesOfWisdom;
