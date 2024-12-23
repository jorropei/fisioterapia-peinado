import React from 'react';
import { Check, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BookingDetails {
  service: {
    name: string;
    price: number;
  };
  date: string;
  time: string;
  userInfo: {
    fullName: string;
    email: string;
    phone: string;
    notes?: string;
  };
}

const faqs = [
  {
    question: "¿Puedo pedir la cita directamente online?",
    answer: "Sí, puedes reservar tu cita de fisioterapia directamente a través de este sistema online. Selecciona el servicio, elige el día y hora que mejor te convenga, y completa tus datos de contacto. Recibirás una confirmación inmediata de tu reserva."
  },
  {
    question: "¿Qué pasa si no puedo acudir a mi cita de fisioterapia?",
    answer: "Te pedimos que nos avises con al menos 24 horas de antelación si no puedes asistir a tu cita. Esto nos permite reorganizar nuestra agenda y ofrecer ese horario a otros pacientes. Puedes cancelar o reprogramar tu cita llamándonos por teléfono."
  },
  {
    question: "¿Se paga directamente online la reserva de fisioterapia?",
    answer: "No, el pago se realiza directamente en la clínica después de tu sesión. Aceptamos diferentes métodos de pago incluyendo efectivo y tarjeta. La reserva online es completamente gratuita y sin compromiso."
  }
];

export function BookingConfirmation() {
  const location = useLocation();
  const bookingDetails = location.state as BookingDetails;

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/photos/clinica-box1.jpg" 
          alt="Clínica de Fisioterapia" 
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
          {/* Logo - Updated positioning */}
          <div className="md:absolute md:top-1/2 md:right-8 md:-translate-y-1/2 flex justify-center mb-8 md:mb-0">
            <img 
              src="/logo.png" 
              alt="Fisioterapia Peinado" 
              className="h-24 md:h-48 w-auto"
            />
          </div>

          {/* Back to Home Link */}
          <div className="max-w-3xl">
            <Link 
              to="/"
              className="inline-flex items-center text-white mb-4 md:mb-8 hover:text-white/80 transition-colors"
            >
              <ArrowLeft className="w-4 md:w-5 h-4 md:h-5 mr-2" />
              Volver a inicio
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 -mt-8 md:-mt-12 pb-12 md:pb-24">
        {/* Confirmation Component */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 mb-8 md:mb-16 border-2 border-[#009DC4]">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-[#009DC4] rounded-full flex items-center justify-center mb-4 md:mb-6">
              <Check className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1E2C60] mb-3 md:mb-4">
              ¡Reserva confirmada!
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
              Gracias por confiar en Fisioterapia Peinado. Te esperamos en nuestra clínica.
            </p>
          </div>

          {/* Booking Details */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg md:rounded-xl mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-[#1E2C60] mb-3 md:mb-4">
              Detalles de tu reserva
            </h3>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <p><span className="font-medium">Servicio:</span> {bookingDetails?.service.name}</p>
              <p><span className="font-medium">Fecha:</span> {bookingDetails?.date}</p>
              <p><span className="font-medium">Hora:</span> {bookingDetails?.time}</p>
              <p><span className="font-medium">Nombre:</span> {bookingDetails?.userInfo.fullName}</p>
              {bookingDetails?.userInfo.notes && (
                <p>
                  <span className="font-medium">Notas:</span>
                  <br />
                  <span className="text-gray-600">{bookingDetails.userInfo.notes}</span>
                </p>
              )}
              <p className="text-[#009DC4] font-semibold pt-2">
                Total: {bookingDetails?.service.price}€
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-blue-50 p-4 md:p-6 rounded-lg md:rounded-xl mb-6 md:mb-8">
            <h3 className="text-base md:text-lg font-semibold text-[#1E2C60] mb-2">
              Información importante
            </h3>
            <ul className="text-sm md:text-base text-gray-600 space-y-2">
              <li>• Hemos enviado un correo de confirmación a {bookingDetails?.userInfo.email || "tu correo"}</li>
              <li>• Por favor, llega 5-10 minutos antes de tu cita</li>
              <li>• El pago se realizará en la clínica después de tu sesión</li>
              <li>�� Si necesitas cancelar o reprogramar, llámanos con 24h de antelación</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-600 mb-2 md:mb-4">
              ¿Tienes alguna pregunta? Llámanos:
            </p>
            <p className="text-lg md:text-xl font-semibold text-[#1E2C60]">
              681 333 516
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 md:mt-16 bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-[#1E2C60] mb-6 md:mb-8 text-center">
            Preguntas frecuentes
          </h2>
          
          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-gray-200 pb-4 md:pb-6 last:border-0"
              >
                <h3 className="text-base md:text-lg font-semibold text-[#1E2C60] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 