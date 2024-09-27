import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext'; // Import your language context

const versesData = [
  {
    id: 1,
    tamil: "அகர முதல எழுத்தெல்லாம் ஆதி",
    english: "A is the first of all letters.",
    commentary: {
      tamil: "இந்த பாடல் தொடக்கம் பற்றிய முக்கியத்துவத்தை வலியுறுத்துகிறது.",
      english: "This verse emphasizes the importance of beginnings.",
    },
    detailedExplanation: {
      tamil: "அகரம் தமிழ் எழுத்துக்களின் முதலில் வருவது, அறிவு மற்றும் கற்றலின் தொடக்கம் என்பதைக் குறிக்கிறது.",
      english: "The letter 'A' is recognized as the first letter in the Tamil alphabet, presenting the beginning of knowledge and learning."
    }
  },
  {
    id: 2,
    tamil: "கற்றது கை மண் Level மண்.",
    english: "What is learned is like the soil.",
    commentary: {
      tamil: "இந்த பாடல் அறிவை வளர்க்க தேவையான பராமரிப்பின் தேவை குறித்துள்ளது.",
      english: "This verse signifies the need for nurturing knowledge."
    },
    detailedExplanation: {
      tamil: "அல்லது, அறிவை வளர்க்கும் மண் போல, அறிவை கடைசி நிலை அடைய பராமரிக்க வேண்டியது அவசியம்.",
      english: "Just as soil needs care and cultivation to produce healthy crops, knowledge must be cultivated through study, practice, and application."
    }
  },
  {
    id: 3,
    tamil: "முற்போக்கி விடுவோம், என்றால் வரப்போகிறதுவே.",
    english: "If you look forward, what will come will surely come.",
    commentary: {
      tamil: "இந்த பாடல் எதிர்காலத்தை நோக்கி செயல்படுவதின் முக்கியத்துவத்தை வலியுறுத்துகிறது.",
      english: "This verse stresses the importance of taking action towards the future."
    },
    detailedExplanation: {
      tamil: "எதிர்காலத்தை நோக்கி செயல்படுவதை வழிவகுக்கும், உங்களுக்கு தேவைப்படும் எல்லா நல்லவற்றும் உங்கள் வழியில் வரும்.",
      english: "By taking proactive steps towards the future, all the good things you need will come your way."
    }
  },
  {
    id: 4,
    tamil: "அறிவு என்பது உண்மையை உணர்வதற்கு வழி.",
    english: "Knowledge is the path to understanding the truth.",
    commentary: {
      tamil: "இந்த பாடல் அறிவின் முக்கியத்துவத்தை வலியுறுத்துகிறது.",
      english: "This verse emphasizes the significance of knowledge."
    },
    detailedExplanation: {
      tamil: "அறிவுக்கான பாதை உண்மைகளை புரிந்துகொள்ள உதவுகிறது, இது ஒரு மனிதனின் வளர்ச்சிக்கு அவசியம்.",
      english: "The path of knowledge helps to understand the truths, which is essential for a person's growth."
    }
  },
  {
    id: 5,
    tamil: "ஒருவரின் சிந்தனை அவரின் வரலாற்றைக் குறிப்பிடுகிறது.",
    english: "A person's thoughts reflect their history.",
    commentary: {
      tamil: "இந்த பாடல் சிந்தனையின் சக்தியை வலியுறுத்துகிறது.",
      english: "This verse highlights the power of thoughts."
    },
    detailedExplanation: {
      tamil: "ஒருவரின் சிந்தனைகள் அவரின் வாழ்க்கை மற்றும் வரலாற்றின் பிரதிபலிப்பு.",
      english: "A person's thoughts are a reflection of their life and history."
    }
  },
  {
    id: 6,
    tamil: "மாற்றம் ஏற்படவேண்டுமா? உங்கள் எண்ணங்களில் மாற்றம் கொண்டு வருங்கள்.",
    english: "Want change? Start with a change in your thoughts.",
    commentary: {
      tamil: "இந்த பாடல் மாற்றத்திற்கான சிந்தனையின் சக்தியை வலியுறுத்துகிறது.",
      english: "This verse emphasizes the power of thought in bringing about change."
    },
    detailedExplanation: {
      tamil: "நீங்கள் வாழ்க்கையில் மாற்றங்களை விரும்பினால், முதலில் உங்கள் எண்ணங்களை மாற்ற வேண்டும்.",
      english: "If you want changes in your life, you must first change your thoughts."
    }
  }
];

const themesData = [
  {
    name: { english: 'Love', tamil: 'காதல்' },
    description: {
      english: 'Verses focusing on love and relationships. Love is depicted as the foundation of all meaningful connections.',
      tamil: 'காதல் மற்றும் உறவுகளை மையமாகக் கொண்டு பாடல்கள். காதல், அனைத்து அர்த்தமுள்ள தொடர்புகளின் அடிப்படையாகக் காணப்படுகிறது.',
    }
  },
  {
    name: { english: 'Wisdom', tamil: 'அறிவு' },
    description: {
      english: 'Verses that highlight the importance of wisdom in making decisions and leading a fulfilling life.',
      tamil: 'அறிவின் முக்கியத்துவத்தை வலியுறுத்தும் பாடல்கள், முடிவுகளை எடுக்கவும் முழுமையான வாழ்க்கை நடத்தவும்.',
    }
  },
  {
    name: { english: 'Truth', tamil: 'உண்மை' },
    description: {
      english: 'Verses emphasizing the value of truth and integrity in personal and social contexts.',
      tamil: 'தனிப்பட்ட மற்றும் சமூக சூழல்களில் உண்மை மற்றும் நேர்மையின் மதிப்பை வலியுறுத்தும் பாடல்கள்.',
    }
  },
  {
    name: { english: 'Dharma', tamil: 'தர்மம்' },
    description: {
      english: 'Verses discussing moral values and duties, guiding individuals towards righteous living.',
      tamil: 'நல்லொழுக்கம் மற்றும் கடமைகள் பற்றிய பாடல்கள், மனிதர்களை நேர்மையான வாழ்க்கைக்கு வழிகாட்டும்.',
    }
  },
  {
    name: { english: 'Courage', tamil: 'உதயம்' },
    description: {
      english: 'Verses that inspire courage and resilience in the face of challenges and adversity.',
      tamil: 'சவால்களை எதிர்கொள்வதற்கான துணிவு மற்றும் உறுதியை ஊக்கம் தரும் பாடல்கள்.',
    }
  },
  {
    name: { english: 'Friendship', tamil: 'மைகம்' },
    description: {
      english: 'Verses that celebrate the value of friendship and the bonds between people.',
      tamil: 'மைகம் மற்றும் மனிதர்களுக்கு இடையிலான உறவுகளை கொண்டாடும் பாடல்கள்.',
    }
  }
];

const VersesSection = () => {
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
            <h3 className="text-xl font-bold">{language === 'Tamil' ? verse.tamil : verse.english}</h3>
            <p className="mt-2">{language === 'Tamil' ? verse.commentary.tamil : verse.commentary.english}</p>
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
          {language === 'Tamil' ? selectedVerse.tamil : selectedVerse.english}
        </h3>
        <p className="text-center mb-4">{language === 'Tamil' ? selectedVerse.detailedExplanation.tamil : selectedVerse.detailedExplanation.english}</p>
      </div>

      {/* Themes Section */}
      <h2 className="text-3xl font-semibold mb-4">
        {language === 'Tamil' ? 'பொருத்தமான தலைப்புகள்' : 'Related Themes'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {themesData.map((theme, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold">{language === 'Tamil' ? theme.name.tamil : theme.name.english}</h3>
            <p className="mt-2">{language === 'Tamil' ? theme.description.tamil : theme.description.english}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VersesSection;
