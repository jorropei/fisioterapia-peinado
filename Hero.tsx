import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { TestimonialSwimlane } from './TestimonialSwimlane';
import { MiddleNav } from '../layout/MiddleNav';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';

export function Hero() {
  return (
    <>
      <div id="inicio" className="relative">
        <div className="min-h-screen lg:min-h-[125vh] relative">
          {/* Background setup */}
          <div className="absolute inset-0">
            {/* Mobile background */}
            <div className="lg:hidden absolute inset-0">
              <img 
                src="/photos/clinica-box1.jpg" 
                alt="Clínica de Fisioterapia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#009DC4] opacity-75" />
            </div>

            {/* Desktop layout */}
            <div className="hidden lg:grid lg:grid-cols-5 h-full">
              {/* Blue section with image and overlay */}
              <div className="col-span-2 relative">
                <img 
                  src="/photos/clinica-box1.jpg" 
                  alt="Clínica de Fisioterapia" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#009DC4] opacity-90" />
              </div>
              
              {/* Brown section remains solid */}
              <div className="col-span-3 bg-[#2B1810] relative">
                {/* Bamboo texture overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('/backgrounds/bamboo-texture.jpg')`,
                    backgroundSize: '400px 400px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                    opacity: 0.1
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="relative h-full">
            {/* Mobile Content - Restored to original */}
            <div className="lg:hidden flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-12 text-center">
              <div className="max-w-xl">
                <div className="mb-8">
                  <img 
                    src="/logo.png" 
                    alt="Fisioterapia Peinado" 
                    className="h-32 w-auto mx-auto"
                  />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
                  Fisioterapia Peinado
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-8 md:mb-10">
                  Fisioterapia general y pilates terapéutico en Guadalajara
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
                  <button 
                    onClick={() => scrollToSection('contacto')}
                    className="inline-flex items-center justify-center text-lg px-8 py-4 font-semibold bg-white text-[#009DC4] rounded-full hover:bg-white/90 transition-colors"
                  >
                    Pedir Cita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <Button 
                    variant="outline"
                    className="inline-flex items-center justify-center text-lg px-8 py-4 text-white border-2 border-white hover:bg-white/10 font-semibold"
                    onClick={() => scrollToSection('servicios')}
                  >
                    Más Información
                  </Button>
                </div>
              </div>

              <div className="w-full mt-12">
                <TestimonialSwimlane />
              </div>
            </div>

            {/* Desktop Content */}
            <div className="hidden lg:grid lg:grid-cols-5 h-full">
              {/* Left Column - Text Content */}
              <div className="col-span-2 relative flex items-start pt-56 justify-center">
                <div className="max-w-xl px-8 text-center">
                  <div className="mb-12">
                    <img 
                      src="/logo.png" 
                      alt="Fisioterapia Peinado" 
                      className="h-32 w-auto mx-auto"
                    />
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8">
                    Fisioterapia Peinado
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12">
                    Tu clínica de fisioterapia general y pilates terapéutico en Guadalajara
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-8">
                    <button 
                      onClick={() => scrollToSection('contacto')}
                      className="inline-flex items-center justify-center text-xl px-12 py-6 font-semibold bg-white text-[#009DC4] rounded-full hover:bg-white/90 transition-colors"
                    >
                      Pedir Cita
                      <ArrowRight className="ml-3 h-7 w-7" />
                    </button>
                    <Button 
                      variant="outline"
                      className="inline-flex items-center justify-center text-xl px-12 py-6 text-white border-2 border-white hover:bg-white/10 font-semibold"
                      onClick={() => scrollToSection('servicios')}
                    >
                      Más Información
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column - Video and Testimonials */}
              <div className="col-span-3 relative flex flex-col">
                <div className="flex-1 flex items-start pt-64 justify-center px-12">
                  <div className="w-full max-w-4xl">
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto object-cover"
                      >
                        <source src="/videos/clinic-tour.mp4" type="video/mp4" />
                        <img
                          src="/backgrounds/hero-image.jpg"
                          alt="Clínica de Fisioterapia"
                          className="w-full h-auto object-cover"
                        />
                      </video>
                    </div>
                    <h2 className="text-4xl font-bold text-white text-center mt-8 mb-16">
                      ¡Visítanos en Guadalajara!
                    </h2>
                  </div>
                </div>

                <div className="px-12 pb-8 mt-8">
                  <TestimonialSwimlane />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Middle Navigation Bar */}
      <div>
        <MiddleNav />
      </div>
    </>
  );
}