import React from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="absolute w-full z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end h-16 items-center">
          <div className="hidden md:flex items-center lg:ml-[40%] w-[60%]">
            <div className="flex items-center justify-between w-[90%] mx-auto">
              <a href="#inicio" className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-base px-3">
                Inicio
              </a>
              <a href="#servicios" className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-base px-3">
                Servicios
              </a>
              <a href="#sobre-nosotros" className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-base px-3">
                Sobre Nosotros
              </a>
              <a href="#contacto" className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-base px-3">
                Contacto
              </a>
              <div className="flex items-center gap-2 whitespace-nowrap text-base px-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white font-medium">614 164 215</span>
              </div>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-white text-[#005BA7] px-6 py-1.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap text-base font-medium ml-4"
              >
                Pedir Cita
              </button>
            </div>
          </div>

          <div className="md:hidden px-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white relative z-50">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm">
          <div className="h-full flex flex-col pt-20 px-2 pb-2 space-y-1 sm:px-3">
            <a 
              href="#inicio" 
              className="block px-3 py-1.5 text-white hover:text-white/80"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="block px-3 py-1.5 text-white hover:text-white/80"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#sobre-nosotros" 
              className="block px-3 py-1.5 text-white hover:text-white/80"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nosotros
            </a>
            <a 
              href="#contacto" 
              className="block px-3 py-1.5 text-white hover:text-white/80"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
            <button 
              onClick={() => {
                scrollToSection('contacto');
                setIsOpen(false);
              }}
              className="w-full mt-4 bg-white text-[#005BA7] px-6 py-2 rounded-full hover:bg-white/90 transition-colors text-center block"
            >
              Pedir Cita
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
