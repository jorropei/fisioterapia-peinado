import React from 'react';
import { ServicePageLayout } from '../components/layout/ServicePageLayout';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function ServicePilatesTerapeutico() {
  const navigate = useNavigate();
  useScrollToTop();

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contacto' } });
  };

  return (
    <ServicePageLayout
      title="Pilates terapéutico"
      description="Fortalece tu cuerpo y recupera tu bienestar con nuestro programa especializado"
      imagePath="/photos/clinica-gym.jpg"
    >
      <div className="space-y-8">
        <div className="rounded-xl overflow-hidden -mt-2 mb-8">
          <img 
            src="/photos/clinica-gym.jpg"
            alt="Sala de Pilates Terapéutico"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E2C60] mb-4">
            ¿Qué es el Pilates terapéutico?
          </h2>
          <p className="text-gray-600 mb-4">
            Nuestro Pilates terapéutico en Guadalajara es una versión especializada del método pilates tradicional, diseñada para la rehabilitación física y el fortalecimiento muscular. Adaptamos los ejercicios a tus necesidades individuales, ayudándote a mejorar la postura, la flexibilidad y la recuperación de lesiones de forma segura y efectiva.
          </p>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1E2C60] mb-4">
            Beneficios principales
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Fortalecimiento del core:</strong> Ejercicios enfocados en la estabilidad y el fortalecimiento de la zona abdominal, esenciales para prevenir lesiones y mejorar el equilibrio.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Flexibilidad:</strong> Aumenta tu rango de movimiento y elasticidad muscular, recuperando la movilidad con ejercicios suaves y controlados.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Postura:</strong> Corrige la alineación corporal y mejora tu postura con técnicas de pilates terapéutico supervisadas por expertos.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Rehabilitación:</strong> Facilita una recuperación efectiva de lesiones musculares, articulares y dolencias crónicas mediante ejercicios adaptados.</span>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1E2C60] mb-4">
            Nuestras clases
          </h3>
          <p className="text-gray-600 mb-4">
            En Fisioterapia Peinado, ofrecemos clases de pilates terapéutico en Guadalajara adaptadas a cada nivel y necesidad:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span>Sesiones individuales personalizadas para un enfoque detallado.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span>Clases en grupos reducidos (máximo 4 personas) para una atención cercana y efectiva.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span>Programas específicos de rehabilitación para recuperación post-lesión o postoperatoria.</span>
            </li>
          </ul>
        </section>

        <div className="pt-6 md:pt-8">
          <button
            onClick={handleContactClick}
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 text-lg font-semibold text-white bg-[#009DC4] rounded-full hover:bg-[#008DB4] transition-colors"
          >
            Reservar cita
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </ServicePageLayout>
  );
}