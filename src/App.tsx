import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { ServiceFisioterapiaGeneral } from './pages/ServiceFisioterapiaGeneral';
import { ServicePilatesTerapeutico } from './pages/ServicePilatesTerapeutico';
import { ServiceEquipamiento } from './pages/ServiceEquipamiento';
import { scrollToSection } from './utils/scrollToSection';
import emailjs from '@emailjs/browser';

// Initialize EmailJS at the app level
emailjs.init("gqBjcE1opkf20D-VQ");

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/fisioterapia-general" element={<ServiceFisioterapiaGeneral />} />
          <Route path="/servicios/pilates-terapeutico" element={<ServicePilatesTerapeutico />} />
          <Route path="/servicios/equipamiento" element={<ServiceEquipamiento />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;