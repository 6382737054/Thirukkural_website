import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useLanguage } from '../context/LanguageContext';

const YourExistingComponent = () => {
  const { language } = useLanguage();

  const versesContent = {
    English: {
      Aram: [...Array(442).keys()].map(i => ({
        title: `Aram Page ${i + 1}`,
        content: `Content for Aram page ${i + 1}.`,
        image: '/Images/thirukural1.jpg',
      })),
      Porul: [...Array(442).keys()].map(i => ({
        title: `Porul Page ${i + 1}`,
        content: `Content for Porul page ${i + 1}.`,
        image: '/Images/thirukural1.jpg',
      })),
      Inbam: [...Array(442).keys()].map(i => ({
        title: `Inbam Page ${i + 1}`,
        content: `Content for Inbam page ${i + 1}.`,
        image: '/Images/thirukural1.jpg',
      })),
    },
    Tamil: {
      Aram: [...Array(442).keys()].map(i => ({
        title: `அரம் பக்கம் ${i + 1}`,
        content: `அரமுக்கான பக்கம் ${i + 1}க்கான உள்ளடக்கம்.`,
        image: '/Images/thirukural1.jpg',
      })),
      Porul: [...Array(442).keys()].map(i => ({
        title: `பொருள் பக்கம் ${i + 1}`,
        content: `பொருளுக்கான பக்கம் ${i + 1}க்கான உள்ளடக்கம்.`,
        image: '/Images/thirukural1.jpg',
      })),
      Inbam: [...Array(442).keys()].map(i => ({
        title: `இன்பம் பக்கம் ${i + 1}`,
        content: `இன்பத்திற்கு உள்ளடக்கம் ${i + 1}.`,
        image: '/Images/thirukural1.jpg',
      })),
    },
  };

  const currentContent = {
    Aram: versesContent[language].Aram,
    Porul: versesContent[language].Porul,
    Inbam: versesContent[language].Inbam,
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4 sm:p-8 space-y-6 sm:space-y-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
        {language === 'Tamil' ? 'திருக்குறள்: ஞானக் குறள்கள்' : 'Thirukkural: Verses of Wisdom'}
      </h1>

      {/* Flipbook for Aram Section */}
      <div className="w-full max-w-4xl mb-12 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {language === 'Tamil' ? 'அரம்' : 'Aram'}
        </h2>
        <HTMLFlipBook
          width={400}
          height={500}
          size="stretch"
          minWidth={200}
          maxWidth={400}
          minHeight={300}
          maxHeight={600}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          className="shadow-2xl"
        >
          {currentContent.Aram.map((page, index) => (
            <div
              key={index}
              className={`demoPage p-4 sm:p-6 ${index % 2 === 0 ? 'bg-yellow-100' : 'bg-blue-100'} border-2 border-gray-300`}
            >
              {page.image && (
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-full h-auto mb-4 rounded-md shadow-md"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{page.title}</h2>
              <p className="text-gray-700">{page.content}</p>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Flipbook for Porul Section */}
      <div className="w-full max-w-4xl mb-12 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {language === 'Tamil' ? 'பொருள்' : 'Porul'}
        </h2>
        <HTMLFlipBook
          width={400}
          height={500}
          size="stretch"
          minWidth={200}
          maxWidth={400}
          minHeight={300}
          maxHeight={600}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          className="shadow-2xl"
        >
          {currentContent.Porul.map((page, index) => (
            <div
              key={index}
              className={`demoPage p-4 sm:p-6 ${index % 2 === 0 ? 'bg-yellow-100' : 'bg-blue-100'} border-2 border-gray-300`}
            >
              {page.image && (
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-full h-auto mb-4 rounded-md shadow-md"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{page.title}</h2>
              <p className="text-gray-700">{page.content}</p>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Flipbook for Inbam Section */}
      <div className="w-full max-w-4xl mb-12 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {language === 'Tamil' ? 'இன்பம்' : 'Inbam'}
        </h2>
        <HTMLFlipBook
          width={400}
          height={500}
          size="stretch"
          minWidth={200}
          maxWidth={400}
          minHeight={300}
          maxHeight={600}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          className="shadow-2xl"
        >
          {currentContent.Inbam.map((page, index) => (
            <div
              key={index}
              className={`demoPage p-4 sm:p-6 ${index % 2 === 0 ? 'bg-yellow-100' : 'bg-blue-100'} border-2 border-gray-300`}
            >
              {page.image && (
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-full h-auto mb-4 rounded-md shadow-md"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{page.title}</h2>
              <p className="text-gray-700">{page.content}</p>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default YourExistingComponent;
