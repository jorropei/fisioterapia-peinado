import React from 'react';
import { StaticMap } from './StaticMap';

export function MapContainer() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden bg-gray-100">
      <StaticMap 
        address="Avenida Bulevar del Alto Tajo 7, Guadalajara, Spain"
        className="w-full h-full"
      />
    </div>
  );
}