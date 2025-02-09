import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MiddleNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('inicio');
    
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-100px 0px 0px 0px'
      }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`w-full bg-[#009DC4] py-3 fixed top-0 z-50 transition-all duration-500 ease-in-out transform ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4">
            <div className="flex items-center gap-4">
              <img 
                src="/logo.png" 
                alt="Fisioterapia Peinado" 
                className="h-10 w-auto"
              />
              <span className="text-white text-lg font-semibold">
                Fisioterapia Peinado
              </span>
            </div>

            <div className="hidden md:flex items-center">
              <div className="flex items-center justify-end w-full gap-8">
                <a href="#inicio" className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-lg">
                  Inicio
                </a>
                <a href="#servicios" className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-lg">
                  Servicios
                </a>
                <a href="#sobre-nosotros" className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-lg">
                  Sobre Nosotros
                </a>
                <a href="#contacto" className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-lg">
                  Contacto
                </a>
                <div className="flex items-center gap-2 whitespace-nowrap text-lg">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">614 164 215</span>
                </div>
                <Link 
                  to="/reservar"
                  className="bg-white text-[#009DC4] px-8 py-2 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap text-lg font-medium"
                >
                  Pedir Cita
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)} className="text-white">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div className="fixed inset-0 bg-[#2C4C58] bg-opacity-95">
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-6">
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex flex-col px-8 space-y-8">
                <a 
                  href="#inicio" 
                  className="text-white hover:text-white/80 text-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </a>
                <a 
                  href="#servicios" 
                  className="text-white hover:text-white/80 text-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  Servicios
                </a>
                <a 
                  href="#sobre-nosotros" 
                  className="text-white hover:text-white/80 text-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre Nosotros
                </a>
                <a 
                  href="#contacto" 
                  className="text-white hover:text-white/80 text-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </a>
                <button 
                  onClick={() => {
                    scrollToContact();
                    setIsOpen(false);
                  }}
                  className="w-full mt-4 bg-white text-[#009DC4] px-6 py-3 rounded-full hover:bg-white/90 transition-colors text-center text-xl font-medium"
                >
                  Pedir Cita
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 
