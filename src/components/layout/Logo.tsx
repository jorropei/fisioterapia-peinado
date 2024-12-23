import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  position?: 'default' | 'top-right';
}

export function Logo({ 
  className = '', 
  size = 'md',
  position = 'default'
}: LogoProps) {
  const sizes = {
    xs: 'w-24 h-24',
    sm: 'w-32 h-32',
    md: 'w-40 h-40',
    lg: 'w-48 h-48'
  };

  const positions = {
    default: '',
    'top-right': 'absolute top-4 right-4'
  };

  return (
    <div className={`relative ${sizes[size]} ${positions[position]} ${className}`}>
      <img
        src="/logo.png"
        alt="Fisioterapia Peinado"
        className="w-full h-full object-contain"
      />
    </div>
  );
}