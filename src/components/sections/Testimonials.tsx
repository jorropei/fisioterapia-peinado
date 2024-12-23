import React from 'react';

const testimonials = [
  {
    name: "Laura Prats",
    title: "Jugadora del Celta de Vigo (Primera División)",
    content: "Aunque ahora resido en Vigo, cada vez que voy a Guadalajara, tras mucha carga de entrenamientos y alto estrés competitivo, una buena atención fisioterapéutica es crucial. Confianza plena en Fisioterapia Peinado.",
    image: "/photos/laura.jpg"
  },
  {
    name: "Juan Muro",
    title: "Fisioterapeuta Del Real Madrid y Selección Española de Fútbol",
    content: "Encantado de haber colaborado en el diseño y equipamiento de esta clínica. Además, muy orgulloso de haber contribuido a la formación de estos profesionales. Excelentes fisioterapeutas y grandes amigos.",
    image: "/photos/juan.jpg"
  },
  {
    name: "Nuko",
    title: "Exjugador de Fútbol Sala y escritor",
    content: "Tanto yo como mis padres podemos decir que son profesionales impecables. Destacaría el trato humano y sensibilidad ante la enfermedad familiar. Nos ganasteis y conseguisteis plena confianza en vuestras manos. Nuestros problemas no solo me han preocupado a mi, sino a Fisioterapia Peinado también. Deseo lo mejor para estas grandes personas y profesionales en su nueva etapa.",
    image: "/photos/Nuko.jpg"
  },
  {
    name: "Cristian Fernandez",
    title: "Futbolista Profesional",
    content: "Como futbolista profesional, confiar en un fisioterapeuta es crucial para rendir al máximo. En Fisioterapia Peinado he encontrado un equipo altamente confiable. Su enfoque experto y personalizado ha sido clave para mantener mi rendimiento al más alto nivel. ¡Recomiendo Fisioterapia Peinado a todos los deportistas que buscan excelencia y confianza en su cuidado físico!",
    image: "/photos/Cristian.jpg"
  }
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-[#053078]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Descubre las experiencias de quienes ya han confiado en nosotros
          </p>
        </div>

        {/* Testimonials Grid - Adjusted width */}
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20 flex flex-col items-center"
              >
                {/* Client Photo - Adjusted size */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 md:mb-6 border-2 border-white/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <p className="text-white/90 text-sm md:text-lg mb-4 md:mb-6 text-center">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <h3 className="font-semibold text-white text-base md:text-xl mb-1 md:mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/70 text-sm md:text-lg">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}