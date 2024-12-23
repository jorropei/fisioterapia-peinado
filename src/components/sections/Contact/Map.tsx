import React, { useState } from 'react';
import { MapDisplay } from './MapDisplay';
import { StaticMap } from './StaticMap';

export function Map() {
  const [useStaticMap, setUseStaticMap] = useState(false);

  const handleMapError = () => {
    setUseStaticMap(true);
  };

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      {useStaticMap ? (
        <StaticMap 
          address="Avenida Bulevar del Alto Tajo 7, Guadalajara, Spain"
          className="w-full h-full"
        />
      ) : (
        <MapDisplay onError={handleMapError} />
      )}
    </div>
  );
}