import React from 'react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E2C60] mb-4">
            Contáctanos
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2C60] mb-6">¿Dónde estamos?</h2>
            <ContactInfo />
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-[#1E2C60] mb-3">
              ¡Solicita más información o reserva tu cita hoy mismo!
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Nuestro equipo de fisioterapeutas expertos está listo para ayudarte.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}