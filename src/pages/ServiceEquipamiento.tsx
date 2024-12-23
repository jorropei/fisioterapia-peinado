import React from 'react';
import { ServicePageLayout } from '../components/layout/ServicePageLayout';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function ServiceEquipamiento() {
  const navigate = useNavigate();
  useScrollToTop();

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contacto' } });
  };

  return (
    <ServicePageLayout
      title="Equipamiento de última generación"
      description="Tecnología avanzada para fisioterapia y rehabilitación"
      imagePath="/photos/clinica-box3.jpg"
    >
      <div className="space-y-8">
        <div className="rounded-xl overflow-hidden -mt-2 mb-8">
          <img 
            src="/photos/clinica-box3.jpg"
            alt="Equipamiento de última generación"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E2C60] mb-4">
            Instalaciones modernas
          </h2>
          <p className="text-gray-600 mb-4">
            En Fisioterapia Peinado, nuestra clínica en Guadalajara está equipada con la última tecnología en fisioterapia avanzada. Ofrecemos instalaciones modernas y cómodas para garantizar tratamientos precisos, seguros y efectivos que facilitan tu recuperación y mejoran tu bienestar.
          </p>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1E2C60] mb-4">
            Nuestro equipamiento
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Equipos de electroterapia:</strong> Dispositivos de electroterapia avanzada para tratar el dolor crónico, mejorar la recuperación muscular y optimizar los resultados de la rehabilitación.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Sala de ejercicio terapéutico:</strong> Espacio diseñado con material especializado para ejercicios de rehabilitación física y recuperación funcional, ideal para pacientes con lesiones o necesidades post-operatorias.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Camillas eléctricas:</strong> Camillas ajustables que garantizan comodidad y precisión en cada sesión de fisioterapia.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Material de Pilates:</strong> Equipamiento profesional para pilates terapéutico, adaptado a clases individuales o en grupos reducidos.</span>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1E2C60] mb-4">
            Ventajas de nuestro equipamiento
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Mayor precisión en los tratamientos:</strong> Tecnología avanzada que permite tratamientos personalizados y efectivos.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Recuperación más rápida y efectiva:</strong> Reduce los tiempos de recuperación con herramientas diseñadas para rehabilitación avanzada.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Máxima seguridad en cada sesión:</strong> Garantizamos sesiones seguras y adaptadas a cada paciente.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Adaptabilidad a diferentes necesidades:</strong> Equipamiento flexible para tratar desde lesiones deportivas hasta dolencias crónicas.</span>
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