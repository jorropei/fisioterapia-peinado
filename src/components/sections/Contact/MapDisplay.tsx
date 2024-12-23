import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapError } from './MapError';
import { MapLoading } from './MapLoading';
import { config } from '../../../config/environment';
import { MAP_CENTER, MAP_CONTAINER_STYLE } from './map.constants';

interface MapDisplayProps {
  onError?: () => void;
}

export function MapDisplay({ onError }: MapDisplayProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<Error | null>(null);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback((error: Error) => {
    console.error('Error loading Google Maps:', error);
    setLoadError(error);
    setIsLoading(false);
    onError?.();
  }, [onError]);

  if (loadError) {
    return <MapError />;
  }

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      {isLoading && <MapLoading />}
      
      <LoadScript
        googleMapsApiKey={config.googleMaps.apiKey}
        onLoad={handleLoad}
        onError={handleError}
      >
        <GoogleMap
          mapContainerStyle={MAP_CONTAINER_STYLE}
          center={MAP_CENTER}
          zoom={config.googleMaps.defaultZoom}
        >
          <Marker position={MAP_CENTER} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}