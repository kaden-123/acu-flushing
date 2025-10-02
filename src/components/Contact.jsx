export default function Contact() {
    const address = "143-26 41st Ave, Flushing, NY 11355";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
    return (
      <section id="contact" className="py-20 bg-cyan-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Clinic
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> {/* Changed to items-stretch */}
            {/* Enhanced Contact Info - Larger Content */}
            <div className="flex flex-col justify-center py-8"> {/* Added padding and centering */}
              <h3 className="text-2xl font-bold text-gray-900 mb-8"> {/* Larger text */}
                Natural Life Acupuncture
              </h3>
              
              <address className="not-italic space-y-6 text-lg"> {/* Increased spacing and text size */}
                <p className="flex items-start">
                  <span className="mr-3 text-xl">📍</span>
                  <a 
                    href={mapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-600 underline underline-offset-4"
                  >
                    {address}
                  </a>
                </p>
                
                <p className="flex items-start">
                  <span className="mr-3 text-xl">📞</span>
                  <a 
                    href="tel:+17188889512" 
                    className="hover:text-cyan-600 text-gray-900"
                  >
                    +1 (718) 888-9512
                  </a>
                </p>
                
                <p className="flex items-start">
                  <span className="mr-3 text-xl">✉️</span>
                  <a 
                    href="mailto:info@acuflushing.com" 
                    className="hover:text-cyan-600 text-gray-900"
                  >
                    acupuncture41ave@gmail.com
                  </a>
                </p>
              </address>
  
              {/* Additional Clinic Info - Fills white space */}
              <div className="mt-12 space-y-4 text-gray-700">
                <h4 className="font-serif text-xl font-semibold text-gray-900">
                  Hours of Operation
                </h4>
                <ul className="space-y-2">
                  <li className="flex justify-between max-w-xs">
                    <span>Monday-Friday:</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Google Maps Embed */}
            <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                aria-label="Clinic Location Map"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }