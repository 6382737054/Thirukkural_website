import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useLanguage } from '../context/LanguageContext';

const YourExistingComponent = () => {
  const { language } = useLanguage();

  const versesContent = {
    English: [
      {
        title: 'Page 1 - Introduction',
        content: 'This is the first page of the Thirukkural. The Thirukkural is a significant literary and philosophical work that encompasses various aspects of life, morality, and ethics.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'Page 2 - Wisdom of Life',
        content: 'This page covers the wisdom about life. The teachings and insights in this text are applicable to every stage of life, guiding individuals in their personal and social responsibilities.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'Page 3 - Morality',
        content: 'Morality forms the basis of a good life. It covers topics such as ethics, virtue, and righteousness, emphasizing the importance of moral values in our actions and decisions.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'Page 4 - Virtue',
        content: 'Virtue is a recurring theme in Thirukkural. The teachings promote living well and ethically, highlighting virtues such as honesty, compassion, and self-discipline.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'Page 5 - Leadership',
        content: 'Thirukkural offers advice on leadership, emphasizing the importance of guiding others positively. It teaches that a true leader inspires trust and respect through their actions and integrity.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'Page 6 - Friendship',
        content: 'The value of friendship is deeply explored in Thirukkural. It illustrates how genuine friendships are built on trust, support, and mutual respect, contributing significantly to personal happiness.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'Page 7 - Education',
        content: 'Education is portrayed as a powerful tool for personal and societal growth. Thirukkural emphasizes the need for continuous learning and the pursuit of knowledge for a fulfilling life.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'Page 8 - Love and Relationships',
        content: 'This page delves into love and relationships, discussing the qualities that make relationships strong and enduring, including patience, understanding, and empathy.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'Page 9 - Conclusion',
        content: 'The final page summarizes the teachings of Thirukkural, emphasizing that these timeless insights help enhance our thoughts and behaviors, guiding us towards a more virtuous and meaningful life.',
        image: '/Images/thirukural1.jpg',
      },
    ],
    Tamil: [
      {
        title: 'பக்கம் 1 - அறிமுகம்',
        content: 'இது திருக்குறளின் முதல் பக்கம். திருக்குறள் என்பது இலக்கியம் மற்றும் தத்துவம் சார்ந்த ஒரு முக்கியமான புத்தகம் ஆகும், இது வாழ்க்கை, நெறிமுறை மற்றும் ஒழுக்கம் போன்ற பல விசயங்களை உள்ளடக்கியது.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'பக்கம் 2 - வாழ்க்கை அறிவு',
        content: 'இந்த பக்கம் வாழ்க்கையின் முக்கியமான கூறுகளைப் பற்றியது. இதில் உள்ள அறிவுரைகள் மற்றும் கருத்துக்கள் வாழ்க்கையின் ஒவ்வொரு கட்டத்திற்கும் பொருந்துபவை, தனிப்பட்ட மற்றும் சமூகப் பொறுப்புகளை வழிநடத்துகிறது.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'பக்கம் 3 - நெறிமுறை',
        content: 'நெறிமுறை ஒரு நல்ல வாழ்க்கையின் அடிப்படையாகும். இது ஒழுக்கம், அறம் மற்றும் நெறிகள் போன்ற தலைப்புகளை உள்ளடக்கியது, நமது செயல்கள் மற்றும் தீர்மானங்களில் ஒழுக்கமரியாதையின் முக்கியத்துவத்தை வலியுறுத்துகிறது.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'பக்கம் 4 - அறம்',
        content: 'அறம் திருக்குறளின் முக்கியமான கருத்தாகும். வாழ்வதற்கான வழிகாட்டி கற்றுத்தருகிறது, நெறிகள், கருணை மற்றும் சுயஒழுக்கம் போன்றவற்றை வலியுறுத்துகிறது.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'பக்கம் 5 - தலைவர்',
        content: 'திருக்குறள் தலைமை பற்றிய அறிவுரைகளை வழங்குகிறது. ஒரு உண்மையான தலைவர் தனது செயல்கள் மற்றும் ஒழுக்கத்தின் மூலம் நம்பிக்கை மற்றும் மரியாதையை பெற வேண்டும்.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'பக்கம் 6 - நட்பு',
        content: 'நட்பின் மதிப்பை ஆழமாக ஆராய்கிறது. உண்மையான நட்புகள் நம்பிக்கை, ஆதரவு மற்றும் பரஸ்பர மரியாதை ஆகியவற்றின் அடிப்படையில் உருவாகின்றன, தனிப்பட்ட மகிழ்ச்சிக்கு முக்கிய பங்கு வகிக்கின்றன.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'பக்கம் 7 - கல்வி',
        content: 'கல்வி என்பது தனிநபர் மற்றும் சமூக வளர்ச்சிக்கான ஒரு சக்தி வாய்ந்த கருவியாக விளக்கப்படுகிறது. திருக்குறள் தொடர்ந்த கற்றலும் அறிவின் தேடலையும் முக்கியத்துவம் அளிக்கிறது.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'பக்கம் 8 - காதல் மற்றும் உறவுகள்',
        content: 'இந்த பக்கம் காதல் மற்றும் உறவுகளை உள்ளடக்கியது, உறவுகளை பலவாகவும் நிலையானதாகவும் கொண்டுவரும் பண்புகளை விவரிக்கிறது, அதில் பொறுமை, புரிதல் மற்றும் அன்பு ஆகியவை உள்ளன.',
        image: '/Images/thirukural1.jpg',
      },
      {
        title: 'பக்கம் 9 - முடிவுரை',
        content: 'கடைசி பக்கம் திருக்குறளின் கற்பனைகளை தெளிவுபடுத்துகிறது. இந்த காலத்திற்கேற்பமான அறிவுரைகள் நம் நடத்தையையும் சிந்தனையையும் மேம்படுத்த உதவுகின்றன, மேலும் நம் வாழ்வை மிகவும் அர்த்தமுள்ளதாக மாற்றுகின்றன.',
        image: '/Images/thirukural1.jpg',
      },
    ],
  };

  const currentContent = versesContent[language];

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gray-100 p-4 sm:p-8 space-y-6 sm:space-y-12">
      {/* Your Existing Flipbook */}
      <div className="w-full max-w-4xl mb-12 flex justify-center">
        <HTMLFlipBook
          width={400} // Fixed width
          height={500}
          size="stretch"
          minWidth={200}
          maxWidth={400} // Kept maxWidth same as width
          minHeight={300}
          maxHeight={600}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="shadow-2xl"
        >
          {/* Add your existing flipbook pages here */}
          {/* Example existing pages */}
          {/* <div className="demoPage">Your existing content here</div> */}
        </HTMLFlipBook>
      </div>

      {/* Verses of Wisdom Section */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
        {language === 'Tamil' ? 'திருக்குறள்: ஞானக் குறள்கள்' : 'Thirukkural: Verses of Wisdom'}
      </h1>

      <div className="w-full max-w-4xl mb-12 flex justify-center">
        <HTMLFlipBook
          width={400} // Fixed width
          height={500}
          size="stretch"
          minWidth={200}
          maxWidth={400} // Kept maxWidth same as width
          minHeight={300}
          maxHeight={600}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="shadow-2xl"
        >
          {currentContent.map((page, index) => (
            <div
              key={index}
              className={`demoPage p-4 sm:p-6 ${index % 2 === 0 ? 'bg-yellow-100' : 'bg-blue-100'} border-2 border-gray-300`}
            >
              <img
                src={page.image}
                alt={page.title}
                className="w-full h-auto mb-4 rounded-md" // Adjust image styling as needed
              />
              <h2 className="text-lg sm:text-xl font-bold">{page.title}</h2>
              <p className="mt-2">{page.content}</p>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default YourExistingComponent;
