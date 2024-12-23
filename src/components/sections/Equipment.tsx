import React from 'react';

export function Equipment() {
  return (
    <section id="equipamiento" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Equipamiento de última generación
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            En nuestro centro, te ofrecemos una experiencia única respaldada por equipamiento de última generación y 
            modernas instalaciones. Desde tecnología avanzada hasta un entorno cómodo, cada detalle está diseñado 
            para potenciar tu bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80"
              alt="Equipamiento 1"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
              alt="Equipamiento 2"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              alt="Equipamiento 3"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}