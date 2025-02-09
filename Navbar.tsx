import React from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute w-full z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end h-24 items-center">
          <div className="hidden md:flex items-center lg:ml-[40%] w-[60%]">
            <div className="flex items-center justify-between w-[90%] mx-auto">
              <a href="#inicio" className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-lg px-4">
                Inicio
              </a>
              <a href="#servicios" className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-lg px-4">
                Servicios
              </a>
              <a href="#sobre-nosotros" className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-lg px-4">
                Sobre Nosotros
              </a>
              <a href="#contacto" className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-lg px-4">
                Contacto
              </a>
              <div className="flex items-center gap-2 whitespace-nowrap text-lg px-4">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white font-medium">614 164 215</span>
              </div>
              <button 
                onClick={scrollToContact}
                className="bg-white text-[#005BA7] px-8 py-2 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap text-lg font-medium ml-4"
              >
                Pedir Cita
              </button>
            </div>
          </div>

          <div className="md:hidden px-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0">
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
    </nav>
  );
}
