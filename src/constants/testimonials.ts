export interface Testimonial {
  name: string;
  title: string;
  content: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sofia Cristóbal",
    title: "Paciente de Fisioterapia",
    content: "Excelente atención profesional. El tratamiento fue muy efectivo y el equipo es muy amable. Totalmente recomendable.",
    image: "/testimonials/patient1.jpg"
  },
  {
    name: "Montserrat Peinado",
    title: "Paciente de Pilates",
    content: "Las clases de pilates han mejorado significativamente mi postura y dolor de espalda. Los profesionales son muy atentos y conocedores.",
    image: "/testimonials/patient2.jpg"
  },
  {
    name: "Mario Nogueras",
    title: "Paciente de Fisioterapia",
    content: "Gracias al tratamiento personalizado he recuperado la movilidad después de mi lesión. El equipo es muy profesional.",
    image: "/testimonials/patient3.jpg"
  },
  {
    name: "Jorge Roche",
    title: "Paciente de Fisioterapia",
    content: "Un equipo excepcional. Su enfoque personalizado y profesionalidad han sido clave en mi recuperación. Muy satisfecho.",
    image: "/testimonials/patient4.jpg"
  }
];