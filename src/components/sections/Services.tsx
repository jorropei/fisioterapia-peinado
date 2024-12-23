import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  return (
    <section id="servicios" className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Mobile optimized */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E2C60] mb-3 md:mb-4">
            Nuestros servicios
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Nos enorgullece ofrecer servicios de fisioterapia de última generación con un equipo altamente cualificado.
            Garantizamos atención personalizada y efectiva, abordando tus objetivos de salud de manera única.
          </p>
        </div>

        {/* Services Grid - Adjusted width */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1100px]">
            {/* Fisioterapia General Card */}
            <Link 
              to="/servicios/fisioterapia-general"
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="h-48 md:h-64 overflow-hidden">
                <img 
                  src="/photos/clinica-box1.jpg" 
                  alt="Fisioterapia General"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col h-[calc(100%-12rem)] md:h-[calc(100%-16rem)]">
                <h3 className="text-xl md:text-2xl font-bold text-[#1E2C60] mb-4">
                  Fisioterapia general
                </h3>
                <p className="text-sm md:text-lg text-gray-600 mb-6">
                Nuestra clínica de fisioterapia en Guadalajara ofrece sesiones de fisioterapia general personalizadas. Mejoramos la movilidad, reducimos el dolor y facilitamos tu recuperación con tratamientos efectivos y adaptados a tus necesidades.
                </p>
                <button className="mt-auto inline-flex items-center justify-center text-base md:text-lg px-6 md:px-8 py-2 md:py-3 rounded-full bg-[#009DC4] text-white hover:bg-[#008DB4] transition-colors">
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            </Link>

            {/* Pilates Card */}
            <Link 
              to="/servicios/pilates-terapeutico"
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="h-48 md:h-64 overflow-hidden">
                <img 
                  src="/photos/clinica-gym.jpg" 
                  alt="Pilates Terapéutico"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col h-[calc(100%-12rem)] md:h-[calc(100%-16rem)]">
                <h3 className="text-xl md:text-2xl font-bold text-[#1E2C60] mb-4">
                  Pilates terapéutico
                </h3>
                <p className="text-sm md:text-lg text-gray-600 mb-6">
                Nuestra clínica de fisioterapia en Guadalajara cuenta con equipamiento de última generación para tratamientos avanzados. Cada herramienta está diseñada para garantizar una recuperación efectiva y personalizada.
                </p>
                <button className="mt-auto inline-flex items-center justify-center text-base md:text-lg px-6 md:px-8 py-2 md:py-3 rounded-full bg-[#009DC4] text-white hover:bg-[#008DB4] transition-colors">
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            </Link>

            {/* Equipamiento Card */}
            <Link 
              to="/servicios/equipamiento"
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="h-48 md:h-64 overflow-hidden">
                <img 
                  src="/photos/clinica-box3.jpg" 
                  alt="Equipamiento de última generación"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col h-[calc(100%-12rem)] md:h-[calc(100%-16rem)]">
                <h3 className="text-xl md:text-2xl font-bold text-[#1E2C60] mb-4">
                  Equipamiento de última generación
                </h3>
                <p className="text-sm md:text-lg text-gray-600 mb-6">
                  Experimenta bienestar con equipamiento moderno en instalaciones actualizadas. Cada detalle está diseñado para potenciar tu salud.
                </p>
                <button className="mt-auto inline-flex items-center justify-center text-base md:text-lg px-6 md:px-8 py-2 md:py-3 rounded-full bg-[#009DC4] text-white hover:bg-[#008DB4] transition-colors">
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}