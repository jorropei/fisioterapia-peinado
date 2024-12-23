import React, { useRef } from 'react';
import { testimonials } from '../../constants/testimonials';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialSwimlane() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1.5 md:p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1.5 md:p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
      </button>

      {/* Testimonial Cards */}
      <section className="py-2 md:py-4">
        <div className="overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-none w-[280px] md:w-[350px] bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Header with name and stars */}
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-lg">
                    {testimonial.name}
                  </h3>
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial content */}
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed line-clamp-4">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 