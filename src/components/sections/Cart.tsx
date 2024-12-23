import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
}

interface UserInfo {
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

const availableServices: Service[] = [
  { id: '1', name: 'Fisioterapia General', duration: '45 min', price: 35 },
  { id: '2', name: 'Pilates Terapéutico', duration: '60 min', price: 40 },
  { id: '3', name: 'Osteopatía', duration: '45 min', price: 45 },
  { id: '4', name: 'Punción Seca', duration: '30 min', price: 30 },
];

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

export function Cart() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [isBooked, setIsBooked] = useState(false);
  const navigate = useNavigate();

  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00', 
    '16:00', '17:00', '18:00', '19:00'
  ];

  const handleUserInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = () => {
    return userInfo.fullName.trim() !== '' && 
           userInfo.phone.trim() !== '' && 
           selectedService && 
           selectedDate && 
           selectedTime;
  };

  const handleBooking = () => {
    // Prepare booking details
    const bookingDetails = {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      userInfo: userInfo
    };

    // Navigate to confirmation page with booking details
    navigate('/reserva-confirmada', { state: bookingDetails });
  };

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

          {/* Content */}
          <div className="max-w-3xl">
            <Link 
              to="/"
              className="inline-flex items-center text-white mb-4 md:mb-8 hover:text-white/80 transition-colors"
            >
              <ArrowLeft className="w-4 md:w-5 h-4 md:h-5 mr-2" />
              Volver a inicio
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">Reserva tu cita</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Selecciona el servicio que necesitas y encuentra el horario que mejor se adapte a ti
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 -mt-8 md:-mt-12 pb-12 md:pb-24">
        {/* Service Selection */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-[#1E2C60] mb-4 md:mb-6 flex items-center">
            <User className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#009DC4]" />
            Selecciona el servicio
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {availableServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`p-4 md:p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg ${
                  selectedService?.id === service.id
                    ? 'border-[#009DC4] bg-[#009DC4]/5 shadow-[#009DC4]/10'
                    : 'border-gray-200 hover:border-[#009DC4]/50'
                }`}
              >
                <h3 className="font-semibold text-base md:text-lg mb-2 text-[#1E2C60]">{service.name}</h3>
                <div className="text-sm md:text-base text-gray-600">
                  <p className="mb-1">Duración: {service.duration}</p>
                  <p className="text-[#009DC4] font-semibold">{service.price}€</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedService && (
          <div className="space-y-6 md:space-y-8">
            {/* Date Selection */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#1E2C60] mb-4 md:mb-6 flex items-center">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#009DC4]" />
                Selecciona el día
              </h2>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:border-[#009DC4] focus:ring-1 focus:ring-[#009DC4] text-base md:text-lg"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E2C60] mb-4 md:mb-6 flex items-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#009DC4]" />
                  Selecciona la hora
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 md:p-4 rounded-xl border-2 text-center transition-all text-base md:text-lg hover:shadow-md ${
                        selectedTime === time
                          ? 'border-[#009DC4] bg-[#009DC4]/5 shadow-[#009DC4]/10'
                          : 'border-gray-200 hover:border-[#009DC4]/50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Details */}
            {selectedTime && (
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E2C60] mb-4 md:mb-6">
                  Datos de contacto
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-base md:text-lg font-medium text-[#1E2C60] mb-2">
                      Nombre y apellidos *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={userInfo.fullName}
                      onChange={handleUserInfoChange}
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:border-[#009DC4] focus:ring-1 focus:ring-[#009DC4]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-base md:text-lg font-medium text-[#1E2C60] mb-2">
                      Email (opcional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleUserInfoChange}
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:border-[#009DC4] focus:ring-1 focus:ring-[#009DC4]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-base md:text-lg font-medium text-[#1E2C60] mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={userInfo.phone}
                      onChange={handleUserInfoChange}
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:border-[#009DC4] focus:ring-1 focus:ring-[#009DC4]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-base md:text-lg font-medium text-[#1E2C60] mb-2">
                      Notas (opcional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={userInfo.notes}
                      onChange={handleUserInfoChange}
                      placeholder="Añade cualquier comentario o información adicional que consideres relevante"
                      rows={4}
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:border-[#009DC4] focus:ring-1 focus:ring-[#009DC4] resize-none"
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-gray-50 p-4 md:p-6 rounded-xl mt-6 md:mt-8">
                    <h3 className="text-lg md:text-xl font-semibold text-[#1E2C60] mb-3 md:mb-4">
                      Resumen de la reserva
                    </h3>
                    <div className="space-y-2 text-sm md:text-base">
                      <p><span className="font-medium">Servicio:</span> {selectedService.name}</p>
                      <p><span className="font-medium">Fecha:</span> {selectedDate}</p>
                      <p><span className="font-medium">Hora:</span> {selectedTime}</p>
                      {userInfo.notes && (
                        <p>
                          <span className="font-medium">Notas:</span>
                          <br />
                          <span className="text-gray-600 text-base">{userInfo.notes}</span>
                        </p>
                      )}
                      <p className="text-[#009DC4] font-semibold mt-4">Total: {selectedService.price}€</p>
                    </div>
                  </div>

                  <button 
                    className={`w-full py-4 md:py-6 rounded-xl font-semibold text-lg md:text-xl transition-all flex items-center justify-center ${
                      isFormValid()
                        ? 'bg-[#009DC4] text-white hover:bg-[#008DB4]'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!isFormValid()}
                    onClick={handleBooking}
                  >
                    Confirmar reserva
                    <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

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