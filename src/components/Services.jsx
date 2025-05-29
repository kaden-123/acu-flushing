import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Acupuncture",
      description: "Uses fine needles to stimulate specific points, restoring energy flow and promoting natural healing.",
      // Using first letter as visual element
      symbol: "A"
    },
    {
      title: "Gua Sha",
      description: "Scraping technique using smooth tools to improve circulation and release muscle tension.",
      symbol: "G"
    },
    {
      title: "Cupping",
      description: "Glass cups create suction on the skin to enhance blood flow and relieve muscle stiffness.",
      symbol: "C"
    },
    {
      title: "Moxibustion",
      description: "Burning mugwort near acupuncture points to warm and invigorate energy flow.",
      symbol: "M"
    },
    {
      title: "Tui Na",
      description: "Therapeutic massage targeting meridians to balance organ function and relieve pain.",
      symbol: "T"
    },
    {
      title: "Herbal Medicine",
      description: "Customized plant-based formulas to address root causes of imbalance.",
      symbol: "H"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Our Treatments
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        {/* Services Grid - Icon-Free Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 hover:border-cyan-300 transition-all shadow-sm hover:shadow-md"
            >
              {/* Decorative colored bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div>
              
              <div className="p-6">
                {/* First letter as decorative element */}
                <div className="mb-4">
                  <span className="font-serif text-5xl font-bold text-cyan-600 opacity-20">
                    {service.symbol}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative">
                  <span className="relative z-10">{service.title}</span>
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-cyan-400"></span>
                </h3>
                
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}