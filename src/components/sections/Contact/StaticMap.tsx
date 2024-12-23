import React from 'react';

interface StaticMapProps {
  address: string;
  className?: string;
}

export function StaticMap({ address, className = '' }: StaticMapProps) {
  // Create a static map URL using OpenStreetMap
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=-3.1726,40.6287,-3.1526,40.6487&layer=mapnik&marker=40.6387,-3.1626`;

  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="100%"
      frameBorder="0"
      className={className}
      title={`Ubicación: ${address}`}
      loading="lazy"
      allowFullScreen
    />
  );
}