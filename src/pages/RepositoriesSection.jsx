import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Repositories data
const repositoryData = {
  Tamil: [
    {
      name: 'தமிழ் டிஜிட்டல் நூலகம்',
      url: 'https://www.tamildigitallibrary.in/',
      description: 'தமிழ்நாட்டில் அமைந்த முழுமையான டிஜிட்டல் நூலகம், திருக்குறள் உட்பட பல தமிழ் இலக்கியங்களை கொண்டுள்ளது.',
      image: '/Images/tamil-digital-library.jpg',
    },
    {
      name: 'தமிழ் இணைய பல்கலைக்கழக நூலகம்',
      url: 'https://www.tamilvu.org/',
      description: 'தமிழ்நாட்டில் உள்ள ஒரு டிஜிட்டல் நூலகம், தமிழ் இலக்கிய வேலைகளுக்கு மற்றும் ஆராய்ச்சி படைப்புகளுக்கு அணுகலை வழங்குகிறது.',
      image: '/Images/tamil-virtual-university.jpg',
    },
    {
      name: 'திருக்குறள் டிஜிட்டல் அருவை',
      url: 'https://www.tamilvu.org/ta/library-suvadi-s210-html-s2100001-212219',
      description: 'திருக்குறள் கையெழுத்துக்களை பாதுகாப்பது மற்றும் டிஜிட்டல் மாற்றுவதற்காக அருவை, பல பதிப்புகள் மற்றும் மொழிபெயர்ப்புகளை கொண்டுள்ளது.',
      image: '/Images/thirukkural-digital-archive.jpg',
    },
    {
      name: 'தமிழ்நாடு மாநில நூலகம்',
      url: 'https://www.tndigitallibrary.ac.in/',
      description: 'தமிழ்நாட்டின் மாநில நூலகம், இலக்கிய வேலைகள் மற்றும் வரலாற்றுப் ஆவணங்களை டிஜிட்டல் மாற்றியிருப்பது.',
      image: '/Images/tamil-nadu-state-library.jpg',
    },
  ],
  English: [
    {
      name: 'Tamil Digital Library',
      url: 'https://www.tamildigitallibrary.in/',
      description: 'A comprehensive digital library based in Tamil Nadu with a vast collection of Tamil literature, including the Thirukkural.',
      image: '/Images/tamil-digital-library.jpg',
    },
    {
      name: 'Tamil Virtual University Library',
      url: 'https://www.tamilvu.org/',
      description: 'A digital library from Tamil Nadu providing access to various Tamil literary works and research materials.',
      image: '/Images/tamil-virtual-university.jpg',
    },
    {
      name: 'Thirukkural Digital Archive',
      url: 'https://www.tamilvu.org/ta/library-suvadi-s210-html-s2100001-212219',
      description: 'An archive dedicated to preserving and digitizing manuscripts of the Thirukkural, with various editions and translations.',
      image: '/Images/thirukkural-digital-archive.jpg',
    },
    {
      name: 'Tamil Nadu State Library',
      url: 'https://www.tndigitallibrary.ac.in/',
      description: 'The state library of Tamil Nadu with digitized resources, including literary works and historical documents related to the Thirukkural.',
      image: '/Images/tamil-nadu-state-library.jpg',
    },
  ],
};

const RepositoriesSection = () => {
  const { language } = useLanguage(); // Get current language from context

  // Get the repositories based on the current language
  const repositories = repositoryData[language] || repositoryData.English;

  return (
    <div className="bg-gray-100">
      {/* Introduction */}
      <section id="repositories-intro" className="py-12 bg-[#e8f0f2] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
            {language === 'Tamil' ? 'திருக்குறள் பதிவுகள் தமிழ்நாட்டில்' : 'Thirukkural Repositories in Tamil Nadu'}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {language === 'Tamil'
              ? 'தமிழ்நாட்டில் உள்ள திருக்குறள் தொடர்பான முக்கியமான பதிவுகளை எளிதில் அணுகுங்கள். இவை ஆராய்ச்சி மற்றும் பாதுகாப்புக்கு மிகவும் முக்கியமானவை. இந்த பதிவுகள் திருக்குறளைப் பற்றிய அனைத்து தகவல்களையும் ஒரே இடத்தில் வழங்குகின்றன.'
              : 'Explore notable repositories in Tamil Nadu that provide access to digitized versions, translations, and more about the Thirukkural. These resources are essential for research and preservation. They offer comprehensive access to all relevant information about the Thirukkural in one place.'}
          </p>
        </div>
      </section>

      {/* Repository Cards */}
      <section id="repositories-list" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            {language === 'Tamil' ? 'பொதுவான பதிவுகள்' : 'Notable Repositories'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {repositories.map(repo => (
              <div key={repo.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={repo.image} alt={repo.name} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{repo.name}</h3>
                  <p className="text-gray-600 mb-4">{repo.description}</p>
                  <a
                    href={repo.url}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language === 'Tamil' ? 'பதிவுக்கு செல்' : 'Visit Repository'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RepositoriesSection;
