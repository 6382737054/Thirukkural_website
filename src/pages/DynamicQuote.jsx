import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext'; // Import the language context

const DynamicQuote = () => {
  const { language } = useLanguage(); // Access the language from context

  const quotes = [
    { couplet: "அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.", meaning: "A as its first of letters, every speech maintains; The first and loftiest God is source of this world’s frame." },
    { couplet: "வினை தவறா வினையுடையார் ஆகுபவை திணை தவறா வித்தும் தரும்.", meaning: "The deed, which men of firm resolves have meant, With execution just, to due fulfilment must be bent." },
    { couplet: "அன்பிலார் எல்லாம் தமக்குரியர் அன்புடையார் என்பும் உரியர் பிறர்க்கு.", meaning: "The loveless hold all things as means of gain; The loving hold even their body for others' pain." },
    { couplet: "கற்றது கைமணிந்து, கற்றது கைமண்; அதற்கு நீ றென்று கூறுவது கூடுமா.", meaning: "What you have learned is but a handful; what you have yet to learn is the world." },
    { couplet: "நடந்தால் நாட்டுக்கு உளது; நடத்தை இல்லை எனும் தன்மை.", meaning: "To be a king, one must first be a man; it's no kingly virtue to be unmanly." },
    { couplet: "இருக்கும் இடம் உயர்வு; அன்பின் பரிதி உற்றது.", meaning: "An abode is exalted when love has no bounds." },
    { couplet: "அஞ்சலான் அன்றே எண்ணம் உடைமை; குற்றம் இளந்த வலியைக் கண்ணும் காணுமா?", meaning: "One who is fearful, even with wealth will never be free from blame." },
    { couplet: "மன்னவன் தன்மானமும் நன்கே தக்க வரின்; தன்னொடு உள்ள காதல் யார்.", meaning: "The king's honor is secured by those who stand firm beside him." },
    { couplet: "நன்மை என்றால் யார் ஒருவனைப் புகழ்தல்; அன்ன குற்றம் அதுபோல் மன்னனே.", meaning: "Praise is the true wealth of a king; it is the best of all possessions." },
    { couplet: "கயல் என்ப கண்ணீ; அதற்கண் மன்னிக்கும் கண்ணீ.", meaning: "Beauty in eyes like a fish; for the love of the one who sees." },
  ];

  const [randomQuote, setRandomQuote] = useState(quotes[0]);

  useEffect(() => {
    const getRandomQuote = () => {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      setRandomQuote(quote);
    };
    getRandomQuote();
    const interval = setInterval(getRandomQuote, 5000); // Change quote every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const title = language === 'Tamil' ? 'சீர்கொள் துறுக்குறள்' : 'Random Thirukkural Quote'; // Adjust the title based on language

  return (
    <section className="my-12 text-center">
      <motion.div
        className="relative p-8 bg-teal-100 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4 className="text-xl font-bold text-teal-700">{title}</h4>
        <p className="italic text-gray-800 mt-4">{randomQuote.couplet}</p>
        <p className="text-gray-600 mt-2">"{randomQuote.meaning}"</p>
      </motion.div>
    </section>
  );
};

export default DynamicQuote;
