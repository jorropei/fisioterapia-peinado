import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MiddleNav() {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
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
              className="h-8 w-auto"
            />
            <span className="text-white text-lg font-semibold">
              Fisioterapia Peinado
            </span>
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex items-center justify-end w-full gap-6">
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
                className="bg-white text-[#009DC4] px-6 py-1.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap text-base font-medium"
              >
                Pedir Cita
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 
