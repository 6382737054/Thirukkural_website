import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Repositories data
const repositoryData = {
  Tamil: [
    {
      name: 'தமிழ் டிஜிட்டல் நூலகம்',
      url: 'https://www.tamildigitallibrary.in/',
      description:
        'தமிழ்நாட்டில் அமைந்த முழுமையான டிஜிட்டல் நூலகம், திருக்குறள் உட்பட பல தமிழ் இலக்கியங்களை கொண்டுள்ளது.',
      image: '/Images/tamil-digital-library.jpg',
    },
    {
      name: 'தமிழ் இணைய பல்கலைக்கழக நூலகம்',
      url: 'https://www.tamilvu.org/',
      description:
        'தமிழ்நாட்டில் உள்ள ஒரு டிஜிட்டல் நூலகம், தமிழ் இலக்கிய வேலைகளுக்கு மற்றும் ஆராய்ச்சி படைப்புகளுக்கு அணுகலை வழங்குகிறது.',
      image: '/Images/tamil-virtual-university.jpg',
    },
    {
      name: 'திருக்குறள் டிஜிட்டல் அருவை',
      url: 'https://www.tamilvu.org/ta/library-suvadi-s210-html-s2100001-212219',
      description:
        'திருக்குறள் கையெழுத்துக்களை பாதுகாப்பது மற்றும் டிஜிட்டல் மாற்றுவதற்காக அருவை, பல பதிப்புகள் மற்றும் மொழிபெயர்ப்புகளை கொண்டுள்ளது.',
      image: '/Images/thirukkural-digital-archive.jpg',
    },
    {
      name: 'தமிழ்நாடு மாநில நூலகம்',
      url: 'https://www.tndigitallibrary.ac.in/',
      description:
        'தமிழ்நாட்டின் மாநில நூலகம், இலக்கிய வேலைகள் மற்றும் வரலாற்றுப் ஆவணங்களை டிஜிட்டல் மாற்றியிருப்பது.',
      image: '/Images/tamil-nadu-state-library.jpg',
    },
  ],
  English: [
    {
      name: 'Tamil Digital Library',
      url: 'https://www.tamildigitallibrary.in/',
      description:
        'A comprehensive digital library based in Tamil Nadu with a vast collection of Tamil literature, including the Thirukkural.',
      image: '/Images/tamil-digital-library.jpg',
    },
    {
      name: 'Tamil Virtual University Library',
      url: 'https://www.tamilvu.org/',
      description:
        'A digital library from Tamil Nadu providing access to various Tamil literary works and research materials.',
      image: '/Images/tamil-virtual-university.jpg',
    },
    {
      name: 'Thirukkural Digital Archive',
      url: 'https://www.tamilvu.org/ta/library-suvadi-s210-html-s2100001-212219',
      description:
        'An archive dedicated to preserving and digitizing manuscripts of the Thirukkural, with various editions and translations.',
      image: '/Images/thirukkural-digital-archive.jpg',
    },
    {
      name: 'Tamil Nadu State Library',
      url: 'https://www.tndigitallibrary.ac.in/',
      description:
        'The state library of Tamil Nadu with digitized resources, including literary works and historical documents related to the Thirukkural.',
      image: '/Images/tamil-nadu-state-library.jpg',
    },
  ],
};

// Facilities content with five facilities
const facilityContent = {
  Tamil: {
    heading: 'காப்புப் பராமரிப்பு வசதிகள்',
    description:
      'நுண் தாள்களைக் காப்பாற்றுவதற்கான சிறப்பான வசதிகளை திருக்குறள் பதிவகங்கள் வழங்குகின்றன. தண்ணீர்ப்புகா வெப்பநிலைகள், ஒளி வெளிப்பாடு, மற்றும் ஈரப்பதம் ஆகியவை கட்டுப்படுத்தப்படுகின்றன.',
    facilities: [
      {
        title: 'சூழல் கட்டுப்பாடுகள்',
        description:
          'சூழ்நிலை மாற்றங்களை கண்காணித்து, வெப்பநிலையை சுமார் 20°C ஆகக் கட்டுப்படுத்தவும், ஈரப்பதத்தை 50-55% ஆகக் கட்டுப்படுத்தவும் முறைகள் நிறுவப்பட்டுள்ளன.',
      },
      {
        title: 'வெளிச்ச பராமரிப்பு',
        description:
          'UV வெளிச்சம் குறைந்த தங்கங்களைக் கொண்டு வெளிச்சமளிப்பது. நீண்டகால வெளிப்பாட்டால் பதிவுகளின் தரம் குறைவதைத் தவிர்க்க இவை பயன்படுத்தப்படுகின்றன.',
      },
      {
        title: 'பராமரிப்பு கருவிகள்',
        description:
          'பதிவுகளை பராமரிக்கவும் பாதுகாப்பதற்கும் திறமையான கருவிகள் மற்றும் உபகரணங்கள் பயன்படுத்தப்படுகின்றன.',
      },
      {
        title: 'அணுகல் கட்டுப்பாடுகள்',
        description:
          'பதிவுகளுக்கு அணுகலை கட்டுப்படுத்தி, பாதுகாப்பான முறையில் பராமரிக்கப்படுவதற்கு தேவையான பாதுகாப்பு முறைகள் உள்ளன.',
      },
      {
        title: 'சுயவிவர கண்காணிப்பு',
        description:
          'தரவுகளைச் சுத்தமாக பராமரிக்கவும், எந்தவொரு பிரச்சனையும் முந்தைய நிலைமைகளை கண்டறிந்து தீர்க்கும் திறமையான கண்காணிப்பு அமைப்புகள்.',
      },
    ],
  },
  English: {
    heading: 'Repository Preservation Facilities',
    description:
      'The repositories housing Thirukkural manuscripts offer state-of-the-art preservation facilities. Climate-controlled conditions, regulated light exposure, and humidity controls ensure the delicate palm leaf manuscripts are preserved without interference from external factors.',
    facilities: [
      {
        title: 'Environmental Controls',
        description:
          'Systems are implemented to monitor and maintain optimal conditions, such as keeping the temperature around 20°C and relative humidity between 50-55%, ensuring the longevity of the manuscripts.',
      },
      {
        title: 'Lighting Maintenance',
        description:
          'Low UV-emitting lights are utilized to minimize exposure and prevent degradation over time, ensuring the manuscripts remain in excellent condition.',
      },
      {
        title: 'Maintenance Tools',
        description:
          'Advanced tools and equipment are employed to maintain and protect the manuscripts effectively.',
      },
      {
        title: 'Access Controls',
        description:
          'Security measures are in place to regulate access to the repositories, ensuring manuscripts are handled and preserved safely.',
      },
      {
        title: 'Automated Monitoring',
        description:
          'Sophisticated monitoring systems track environmental parameters and detect any anomalies, allowing for prompt corrective actions.',
      },
    ],
  },
};

const RepositoriesSection = () => {
  const { language } = useLanguage(); // Get current language from context

  // Get the repositories based on the current language
  const repositories = repositoryData[language] || repositoryData.English;
  const facilities = facilityContent[language];

  return (
    <div className="bg-gray-50">
      {/* Introduction */}
      <section
        id="repositories-intro"
        className="py-16 bg-gradient-to-r from-teal-100 via-teal-0 to-teal-0 text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900 tracking-tight transition-transform transform hover:scale-105">
            {language === 'Tamil'
              ? 'திருக்குறள் பதிவுகள் தமிழ்நாட்டில்'
              : 'Thirukkural Repositories in Tamil Nadu'}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {language === 'Tamil'
              ? 'தமிழ்நாட்டில் உள்ள திருக்குறள் தொடர்பான முக்கியமான பதிவுகளை எளிதாக அணுகுங்கள். இவை ஆராய்ச்சி மற்றும் பாதுகாப்புக்கு மிகவும் முக்கியமானவை. இந்த பதிவுகள் திருக்குறளைப் பற்றிய அனைத்து தகவல்களையும் ஒரே இடத்தில் வழங்குகின்றன.'
              : 'Explore notable repositories in Tamil Nadu that provide access to digitized versions, translations, and more about the Thirukkural. These resources are essential for research and preservation. They offer comprehensive access to all relevant information about the Thirukkural in one place.'}
          </p>
        </div>
      </section>

      {/* Repository Cards */}
      <section id="repositories-list" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
            {language === 'Tamil' ? 'பொதுவான பதிவுகள்' : 'Notable Repositories'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {repositories.map((repo) => (
              <div
                key={repo.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={repo.image}
                  alt={repo.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{repo.name}</h3>
                  <p className="text-gray-600 mb-4">{repo.description}</p>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition-colors"
                  >
                    {language === 'Tamil' ? 'இணையதளத்திற்குச் செல்' : 'Visit Website'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities-section" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
            {facilities.heading}
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            {facilities.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.facilities.map((facility) => (
              <div
                key={facility.title}
                className="group bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-teal-500 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-700 mb-4">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RepositoriesSection;
