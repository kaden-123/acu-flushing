import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Traditional <span className="text-cyan-600">Acupuncture</span> Care in Flushing
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-gray-700 mb-8">
            Restore balance and vitality through centuries-old healing techniques
          </p>

          {/* Simple CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </motion.a>
            
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 hover:border-cyan-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Our Services
            </motion.a>
          </div>

          {/* Decorative elements  */}
          <div className="mt-16 flex justify-center space-x-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-2 w-2 bg-cyan-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}