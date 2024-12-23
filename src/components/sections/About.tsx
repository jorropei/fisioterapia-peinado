import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';

export function About() {
  return (
    <section id="sobre-nosotros" className="py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Mobile optimized */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E2C60] mb-3 md:mb-4">Sobre Nosotros</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Nuestro equipo de fisioterapeutas expertos está especializado en terapia manual, osteopatía y rehabilitación avanzada, ayudando a la comunidad a recuperar su bienestar físico.
          </p>
        </div>

        {/* Team Members Grid - Mobile optimized */}
        <div className="flex justify-center mb-12 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1100px]">
            {/* Raúl Peinado Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div className="p-6 md:p-8 flex flex-col items-center">
                <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden mb-4 md:mb-6 ring-4 ring-[#009DC4]/20">
                  <img
                    src="/photos/raul.jpg"
                    alt="Raúl Peinado"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1E2C60] mb-3 md:mb-4 text-center">
                  Raúl Peinado
                </h3>
                <p className="text-sm md:text-lg text-gray-600 text-center">
                Fisioterapeuta especialista en terapia manual, osteopatía y rehabilitación traumatológica, aporta más de 30 años de experiencia como fisioterapeuta en Guadalajara, asegurando tratamientos precisos y personalizados para cada paciente.
                </p>
              </div>
            </div>

            {/* Nacho Peinado Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div className="p-6 md:p-8 flex flex-col items-center">
                <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden mb-4 md:mb-6 ring-4 ring-[#009DC4]/20">
                  <img
                    src="/photos/nacho.jpg"
                    alt="Nacho Peinado"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1E2C60] mb-3 md:mb-4 text-center">
                  Nacho Peinado
                </h3>
                <p className="text-sm md:text-lg text-gray-600 text-center">
                  Fisioterapeuta especializado en osteopatía, EPTE ecoguiada y ondas de choque, ofreciendo tratamientos efectivos y personalizados que promueven la recuperación rápida y la mejora de la calidad de vida de sus pacientes.
                </p>
              </div>
            </div>

            {/* Daniel Peinado Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div className="p-6 md:p-8 flex flex-col items-center">
                <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden mb-4 md:mb-6 ring-4 ring-[#009DC4]/20">
                  <img
                    src="/photos/dani.jpg"
                    alt="Daniel Peinado"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1E2C60] mb-3 md:mb-4 text-center">
                  Daniel Peinado
                </h3>
                <p className="text-sm md:text-lg text-gray-600 text-center">
                Fisioterapeuta y kinesiólogo, especializado en punción seca, electrólisis y pilates terapéutico. Su enfoque integral combina tecnología avanzada y terapia manual para ofrecer tratamientos seguros y efectivos en nuestra clínica de fisioterapia en Guadalajara.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Mobile optimized */}
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-[#009DC4] rounded-xl md:rounded-2xl p-8 md:p-16 text-center transform hover:scale-[1.02] transition-transform shadow-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-8">¡Pide tu cita!</h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-10 max-w-2xl mx-auto px-4">
              Nuestro equipo de expertos está listo para ayudarte a mejorar tu salud y bienestar
            </p>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="inline-flex items-center justify-center text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 bg-white text-[#009DC4] rounded-full hover:bg-white/90 transition-colors font-semibold"
            >
              Reservar ahora
              <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-7 md:w-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}