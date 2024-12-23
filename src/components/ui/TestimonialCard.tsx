import React from 'react';

interface TestimonialProps {
  name: string;
  title: string;
  content: string;
  image: string;
}

export function TestimonialCard({ name, title, content, image }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}