import React, { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  imagePath: string;
  children: ReactNode;
}

export function ServicePageLayout({ 
  title, 
  description, 
  imagePath, 
  children 
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src={imagePath}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#009DC4] opacity-75" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 bg-[#2B1810]/90 pb-12 md:pb-20 pt-20 md:pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('/backgrounds/bamboo-texture.jpg')`,
              backgroundSize: '400px 400px',
              backgroundPosition: 'center',
              backgroundRepeat: 'repeat'
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Logo */}
          <div className="md:absolute md:top-1/2 md:right-8 md:-translate-y-1/2 flex justify-center mb-8 md:mb-0">
            <img 
              src="/logo.png" 
              alt="Fisioterapia Peinado" 
              className="h-24 md:h-48 w-auto"
            />
          </div>

          {/* Content */}
          <div className="max-w-3xl">
            <Link 
              to="/"
              className="inline-flex items-center text-white mb-4 md:mb-8 hover:text-white/80 transition-colors"
            >
              <ArrowLeft className="w-4 md:w-5 h-4 md:h-5 mr-2" />
              Volver a inicio
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">{title}</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 -mt-8 md:-mt-12 pb-12 md:pb-24">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
} 