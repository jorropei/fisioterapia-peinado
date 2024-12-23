import React from 'react';
import { ServicePageLayout } from '../components/layout/ServicePageLayout';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function ServiceFisioterapiaGeneral() {
  const navigate = useNavigate();
  useScrollToTop();

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contacto' } });
  };

  return (
    <ServicePageLayout
      title="Fisioterapia general"
      description="Tratamientos personalizados para el alivio del dolor y rehabilitación"
      imagePath="/photos/clinica-box1.jpg"
    >
      <div className="space-y-8">
        <div className="rounded-xl overflow-hidden -mt-2 mb-8">
          <img 
            src="/photos/clinica-box1.jpg"
            alt="Sala de Fisioterapia General"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E2C60] mb-4">
            Nuestro enfoque
          </h2>
          <p className="text-gray-600 mb-4">
            En Fisioterapia Peinado, ofrecemos fisioterapia general en Guadalajara con tratamientos adaptados a tus necesidades. Nuestros expertos utilizan técnicas avanzadas para aliviar el dolor, mejorar la movilidad y garantizar una rehabilitación física efectiva. Nos centramos en tu recuperación para ayudarte a volver a tus actividades diarias con bienestar.
          </p>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1E2C60] mb-4">
            Tratamientos que ofrecemos
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Terapia Manual:</strong> Tratamientos especializados para aliviar el dolor muscular y articular, mejorando la movilidad y relajando tejidos profundos.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Rehabilitación Deportiva:</strong> Programas diseñados para la recuperación de lesiones deportivas y la prevención de recaídas en atletas.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Tratamiento del Dolor:</strong> Técnicas eficaces para el manejo del dolor crónico y agudo, restaurando la calidad de vida.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span><strong>Rehabilitación Postural:</strong> Corrección de problemas posturales y ergonomía para prevenir lesiones y mejorar tu postura.</span>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1E2C60] mb-4">
            ¿Para quién es adecuado?
          </h3>
          <p className="text-gray-600 mb-4">
            Nuestros servicios de fisioterapia general están dirigidos a personas en Guadalajara que:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span>Sufren dolores musculares o articulares.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span>Necesitan rehabilitación post-operatoria o tras una lesión deportiva.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span>Buscan mejorar la postura y movilidad.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-[#009DC4] mr-2 mt-1 flex-shrink-0" />
              <span>Desean prevenir lesiones mediante terapia manual y ejercicios personalizados.</span>
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