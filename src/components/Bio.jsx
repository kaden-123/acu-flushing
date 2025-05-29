import { motion } from 'framer-motion';
import { FaGraduationCap, FaMicroscope, FaLeaf } from 'react-icons/fa';
import bio from '../assets/images/bio.jpg';


export default function Bio() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Acupuncturist Jiang
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        {/* Bio Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-cyan-100 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all"></div>
              <div className="relative bg-white p-1 rounded-2xl shadow-md">
                <div className="w-72 h-72 rounded-xl bg-cyan-50 overflow-hidden border-2 border-white flex items-center justify-center">
                  <img 
                    src= {bio} 
                    alt="Acupuncturist Jiang"
                    className="w-full h-full object-cover"
                    loading = "lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              Acupuncturist Jiang, L.Ac., M.S.
            </h3>
            
            <div className="prose max-w-none text-gray-700 space-y-4 mb-6">
              <p>
              Acupuncturist Jiang is a New York State licensed acupuncturist with many 
              years of experience. She received her degree in traditional Chinese medicine 
              from Beijing University of Chinese Medicine and a Masters in Molecular Biology and Biostatistics 
              from the University of Illinois. 
              </p>
              
              <p>
                Her lifelong interest in health, nutrition, and treatment began at a young age. 
                Through acupuncture and Chinese medicine, she delivers the natural healing and health 
                augmentation her patients need, specializing in pain relief and long-term wellness.
              </p>

              <p>
                She believes in treating the root cause of imbalance rather than just symptoms, 
                helping patients achieve sustainable health improvements.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <FaGraduationCap className="text-2xl text-cyan-600" />,
                  title: "Education",
                  text: "Beijing University of Chinese Medicine, University of Illinois"
                },
                {
                  icon: <FaMicroscope className="text-2xl text-cyan-600" />,
                  title: "Specialized Approach",
                  text: "Combines TCM with modern scientific understanding"
                },
                {
                  icon: <FaLeaf className="text-2xl text-cyan-600" />,
                  title: "Treatment Focus",
                  text: "Root-cause analysis for long-term healing"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-cyan-50 p-4 rounded-lg border border-cyan-100 hover:border-cyan-300 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}