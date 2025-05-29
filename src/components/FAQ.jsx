import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is acupuncture?",
      answer: "Acupuncture is a 3,000-year-old healing technique from Traditional Chinese Medicine (TCM) that involves inserting fine, sterile needles into specific points on the body to restore balance, relieve pain, and promote natural healing."
    },
    {
      question: "How does acupuncture work?",
      answer: "From a TCM perspective, acupuncture regulates the flow of Qi (vital energy) through meridians. Western science suggests it stimulates nerves, releases endorphins, and improves blood circulation to affected areas."
    },
    {
      question: "Is acupuncture painful?",
      answer: "Most patients feel minimal discomfort. The needles are much thinner than medical needles (about the width of a hair). You may feel a quick pinch during insertion, followed by a dull ache, warmth, or tingling sensation."
    },
    {
      question: "What conditions can acupuncture treat?",
      answer: "While known for pain relief, acupuncture can help with stress, insomnia, digestive issues, allergies, women's health, and overall wellness. The World Health Organization recognizes its effectiveness for over 100 conditions."
    },
    {
      question: "Do you accept insurance?",
      answer: (
        <div>
          <p className="mb-4">Yes, we accept these insurance plans:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "VA CCN",
              "Elder Plan",
              "Centers Plan",
              "Humana",
              "Wellcare (HMO Dual)",
              "United Health Care",
              "Optum Health",
              "Empire Blue Cross",
              "Aetna"
            ].map((insurance, i) => (
              <div key={i} className="bg-cyan-50 px-4 py-2 rounded-md border border-cyan-100">
                {insurance}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm">
            Coverage varies by plan. Call us at (718) 888-9512 to verify your benefits.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="FAQ" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-cyan-50 transition-colors"
              >
                <h3 className="font-medium text-lg text-gray-900">
                  {item.question}
                </h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-cyan-600" />
                ) : (
                  <FaChevronDown className="text-cyan-600" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-6 text-gray-700">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}