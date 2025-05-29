import './App.css'
import { useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Services from './components/Services'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <Bio></Bio>
      <Services></Services>
      <Contact></Contact>
      <FAQ></FAQ>
      <Footer></Footer>


      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Natural life Acupuncture",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "143-26 41st Ave",
            "addressLocality": "Flushing",
            "addressRegion": "NY",
            "postalCode": "11355"
          },
          "telephone": "+17188889512",
          "openingHours": "Mo-Fr 09:00-19:00, Sa 10:00-16:00"
        })}
      </script>
    </div>
  )
}

export default App
