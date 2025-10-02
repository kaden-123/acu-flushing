import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/images/logo.webp';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: "HOME", href: "home" },
    { name: "ABOUT", href: "about" },
    { name: "SERVICES", href: "services" },
    { name: "CONTACT", href: "contact" },
    { name: "FAQ", href: "FAQ" }
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      navLinks.forEach(({ href }) => {
        const section = document.getElementById(href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(href);
          }
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load Zocdoc script once
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://offsiteschedule.zocdoc.com/plugin/embed";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>AcuFlushing | Natural Healing</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          @keyframes pulse-slow {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.6);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 0 0 10px rgba(6, 182, 212, 0);
            }
          }
          .animate-pulse-slow {
            animation: pulse-slow 2s infinite;
          }
        `}</style>
      </Helmet>

      {/* Contact Info Bar */}
      <div className="bg-cyan-50 py-3 px-4 text-center text-sm border-b border-cyan-100">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=143-26+41st+Ave,+Flushing,+NY+11355" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 hover:text-cyan-600 transition-colors"
          >
            <FiMapPin className="text-cyan-600" />
            <span>143-26 41st Ave, Flushing NY 11355</span>
          </a>
          
          <div className="hidden md:block text-gray-300">|</div>
        
          <a href="mailto:info@acuflushing.com" className="flex items-center gap-2 text-gray-800 hover:text-cyan-600 transition-colors">
            <FiMail className="text-cyan-600" />
            <span>info@acuflushing.com</span>
          </a>
        
          <div className="hidden md:block text-gray-300">|</div>
        
          <a href="tel:+17188889512" className="flex items-center gap-2 text-gray-800 hover:text-cyan-600 transition-colors">
            <FiPhone className="text-cyan-600" />
            <span>+1 718-888-9512</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 font-sans">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div 
            onClick={() => handleScrollTo('home')} 
            className="cursor-pointer flex items-center space-x-4 hover:opacity-90 transition-opacity"
          >
            <img 
              src={logo} 
              alt="AcuFlushing Logo" 
              className="h-24 w-auto md:h-28"
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <button
                  onClick={() => handleScrollTo(link.href)}
                  className={`py-2 px-1 font-medium ${
                    activeSection === link.href 
                      ? 'text-gray-900' 
                      : 'text-gray-600 hover:text-cyan-600'
                  } transition-colors`}
                >
                  {link.name}
                </button>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </div>
            ))}

            {/* Pulsing Zocdoc Button */}
            <a
              href="https://www.zocdoc.com/practice/natural-life-acupuncture-pc-148498?lock=true&isNewPatient=false&referrerType=widget"
              className="zd-plugin bg-cyan-500 text-white px-4 py-2 rounded-lg shadow hover:bg-cyan-600 transition-colors font-medium animate-pulse-slow"
              data-type="book-button"
              data-practice-id="148498"
              title="Natural Life Acupuncture, PC"
            >
              Book Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-4 px-4 space-y-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScrollTo(link.href)}
                className={`block py-3 px-2 w-full text-left font-medium rounded ${
                  activeSection === link.href 
                    ? 'bg-cyan-50 text-cyan-600 border-l-4 border-cyan-400' 
                    : 'text-gray-700 hover:bg-cyan-50'
                } transition-colors`}
              >
                {link.name}
              </button>
            ))}

            {/* Mobile Pulsing Zocdoc Button */}
            <a
              href="https://www.zocdoc.com/practice/natural-life-acupuncture-pc-148498?lock=true&isNewPatient=false&referrerType=widget"
              className="zd-plugin block bg-cyan-500 text-white px-4 py-3 rounded-lg shadow hover:bg-cyan-600 transition-colors font-medium text-center animate-pulse-slow"
              data-type="book-button"
              data-practice-id="148498"
              title="Natural Life Acupuncture, PC"
            >
              Book Online
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
