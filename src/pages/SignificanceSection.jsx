import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Slider from 'react-slick'; // Importing react-slick

// Carousel images
const carouselImages = [
  '/Images/thirukkural1.jpg',
  '/Images/thirukkural2.jpg',
  '/Images/thirukkural3.jpg',
  '/Images/thirukkural4.jpg',
  '/Images/thirukkural5.jpg',
];

const SignificanceSection = () => {
  const { language } = useLanguage(); // Get current language from context

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable arrows
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-[#e5e4cd] py-16"> {/* Updated background color */}
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {language === 'Tamil' ? 'திருக்குறளின் முக்கியத்துவம்' : 'Significance of Thirukkural'}
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Text Content */}
          <div className="flex-1">
            <p className="text-lg text-gray-800 mb-6">
              {language === 'Tamil'
                ? 'திருக்குறள் தமிழ் இலக்கியத்தின் அடித்தளம் ஆகும். திருக்குறளில் காணப்படும் கருத்துகள், பயன்மிக்க அறிவு மற்றும் வாழ்வியல் தத்துவங்கள் பொதுமக்களுக்கு மிகுந்த பயனுள்ளவையாகும். இது அன்றைய சமூகத்தின் உள் மற்றும் வெளியுறவு கருத்துகளை வலுப்படுத்துகிறது.'
                : 'The Thirukkural is a cornerstone of Tamil literature. The concepts, practical wisdom, and philosophical insights contained in the Thirukkural provide significant value to the public. It strengthens both the internal and external reflections of society.'}
            </p>
            <p className="text-lg text-gray-800 mb-6">
              {language === 'Tamil'
                ? 'தற்காலத்திலும் தத்துவப் பரிமாணங்கள் மற்றும் சமூக நியாயங்களை பற்றிய அவரது ஆழமான கவனிப்புகள், முறைமை மற்றும் படிப்பு நுணுக்கங்களை வளர்க்க உதவுகிறது.'
                : 'Its timeless observations on philosophical dimensions and social justice continue to aid in the development of systematic and nuanced studies.'}
            </p>
            <p className="text-lg text-gray-800">
              {language === 'Tamil'
                ? 'இது, கவிஞர்களுக்கும், சிந்தனையர்களுக்கும், மற்றும் சமூக ஆர்வலர்களுக்கும் ஒரு முறை வகை ஆகும். இது பயனுள்ள அறிவின் அடிப்படையாகவும், தத்துவ அறியாமை மற்றும் நன்மை குறித்த வரலாற்றுப் புரிதலாகவும் அமைந்துள்ளது.'
                : 'It serves as a model for poets, philosophers, and social enthusiasts. It stands as a foundation for useful knowledge and historical understanding regarding philosophical ignorance and virtue.'}
            </p>
          </div>

          {/* Right Column: Interactive Elements */}
          <div className="flex-1">
            {/* Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="card-animation bg-white p-6 rounded-lg shadow-lg">
                <div className="card-animation-content">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {language === 'Tamil' ? 'தத்துவத்தியல்' : 'Philosophical Insights'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'Tamil'
                      ? 'திருக்குறளில் தத்துவத்தியல் மற்றும் நீதி பற்றி ஆழமான கருத்துகள் உள்ளன. இது உலக சமுதாயத்தின் தத்துவத்தை புரிந்து கொள்ள உதவுகிறது.'
                      : 'The Thirukkural contains deep insights into philosophy and ethics. It aids in understanding the philosophical dimensions of the world society.'}
                  </p>
                </div>
              </div>
              <div className="card-animation bg-white p-6 rounded-lg shadow-lg">
                <div className="card-animation-content">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {language === 'Tamil' ? 'அரசியல் அறிவு' : 'Political Wisdom'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'Tamil'
                      ? 'திருக்குறளின் அரசியல் அறிவு, கல்வி மற்றும் சமூக நீதியை பற்றிய உள்ளடக்கம், சமூக வரலாற்றை புரிந்து கொள்ள உதவுகிறது.'
                      : 'The political wisdom in Thirukkural, including content on governance, education, and social justice, helps in understanding societal history.'}
                  </p>
                </div>
              </div>
              <div className="card-animation bg-white p-6 rounded-lg shadow-lg">
                <div className="card-animation-content">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {language === 'Tamil' ? 'சமூகவியல்' : 'Sociological Aspects'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'Tamil'
                      ? 'திருக்குறளின் சமூகவியல் சார்ந்த கருத்துகள், மனித உறவுகளை மற்றும் சமூக அமைப்புகளை விவரிக்கிறது. இது சமூக நீதிக்கு வழிகாட்டுகிறது.'
                      : 'The sociological aspects of Thirukkural describe human relationships and social structures. It guides towards social justice.'}
                  </p>
                </div>
              </div>
              <div className="card-animation bg-white p-6 rounded-lg shadow-lg">
                <div className="card-animation-content">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {language === 'Tamil' ? 'உலகநிலை' : 'Global Impact'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'Tamil'
                      ? 'திருக்குறளின் உலகளாவிய தாக்கம், முறைவியல் மற்றும் சமுதாய அமைப்புகள் குறித்து அவற்றின் பங்களிப்புகளை அலசுகிறது.'
                      : 'The global impact of Thirukkural examines its contributions to ethics and societal structures worldwide.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
              {language === 'Tamil' ? 'திருக்குறளின் புகைப்படங்கள்' : 'Images of Thirukkural'}
            </h3>
            <Slider {...carouselSettings}>
              {carouselImages.map((img, index) => (
                <div key={index} className="p-4">
                  <img src={img} alt={`Thirukkural ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-lg" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignificanceSection;
