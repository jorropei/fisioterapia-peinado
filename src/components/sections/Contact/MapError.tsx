import React from 'react';

export function MapError() {
  return (
    <div className="w-full h-[400px] rounded-lg bg-gray-100 flex items-center justify-center">
      <p className="text-gray-600 text-center px-4">
        No se pudo cargar el mapa. Por favor, contacta con nosotros para obtener indicaciones.
      </p>
    </div>
  );
}