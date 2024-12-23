import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full font-medium transition-colors duration-200';
  
  const variants = {
    primary: 'bg-[#00B8A9] text-white hover:bg-[#00B8A9]/90',
    secondary: 'bg-white text-[#1E3A8A] hover:bg-gray-100',
    outline: 'border-2 border-white text-white hover:bg-white/10'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}