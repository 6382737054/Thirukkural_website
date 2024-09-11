import { motion } from "framer-motion";
const DynamicQuote = () => {
    const quotes = [
      { couplet: "அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.", meaning: "A as its first of letters, every speech maintains; The first and loftiest God is source of this world’s frame." },
      { couplet: "வினை தவறா வினையுடையார் ஆகுபவை திணை தவறா வித்தும் தரும்.", meaning: "The deed, which men of firm resolves have meant, With execution just, to due fulfilment must be bent." },
      { couplet: "அன்பிலார் எல்லாம் தமக்குரியர் அன்புடையார் என்பும் உரியர் பிறர்க்கு.", meaning: "The loveless hold all things as means of gain; The loving hold even their body for others' pain." },
    ];
  
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    return (
      <section className="my-12 text-center">
        <motion.div
          className="relative p-8 bg-teal-100 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-xl font-bold text-teal-700">Random Thirukkural Quote</h4>
          <p className="italic text-gray-800 mt-4">{randomQuote.couplet}</p>
          <p className="text-gray-600 mt-2">"{randomQuote.meaning}"</p>
        </motion.div>
      </section>
    );
  };
  
  export default DynamicQuote;
  