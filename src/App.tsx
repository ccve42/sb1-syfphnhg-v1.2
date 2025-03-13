import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '/src/components/Navbar';
import Hero from '/src/components/Hero';
import Products from '/src/components/Products';
import Services from '/src/components/Services';
import Footer from '/src/components/Footer';
import About from '/src/pages/About';
import IconHorado from '/src/pages/IconHorado';
import IconArgus from '/src/pages/IconArgus';
import IconMaris from '/src/pages/IconMaris';
import IconDoris from '/src/pages/IconDoris';
import Technology from '/src/pages/Technology';
import Consultancy from '/src/pages/Consultancy';
import Marketing from '/src/pages/Marketing';
import Contact from '/src/pages/Contact';
import { LanguageProvider } from '/src/contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <main>
                <Products />
                <Services />
              </main>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/work-rest-hours" element={<IconHorado />} />
          <Route path="/surveys-inspection" element={<IconArgus />} />
          <Route path="/ship-guard" element={<IconMaris />} />
          <Route path="/ship-spares-logistics" element={<IconDoris />} />
          <Route path="/technology-and-ai" element={<Technology />} />
          <Route path="/chartering-consultancy" element={<Consultancy />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;