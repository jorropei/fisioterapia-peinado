import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

console.log("Environment check:", {
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  isDefined: !!import.meta.env.VITE_GOOGLE_MAPS_API_KEY
});

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";
console.log("API Key:", GOOGLE_MAPS_API_KEY);

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.send(
        'service_fisioterapia',
        'template_fisioterapia',
        {
          to_name: 'Fisioterapia Peinado',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        'gqBjcE1opkf20D-VQ'
      );

      setSubmitStatus({
        type: 'success',
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E2C60] mb-4">
            Contáctanos
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#1E2C60] mb-6">¿Dónde estamos?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#1E2C60] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1E2C60]">Dirección</h3>
                  <p className="text-gray-600">Avenida Bulevar del Alto Tajo, 7, Guadalajara</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#1E2C60] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1E2C60]">Teléfono</h3>
                  <p className="text-gray-600">681 333 516 / 676 394 904 / 648 866 886</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#1E2C60] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1E2C60]">Email</h3>
                  <p className="text-gray-600">fisioterapiapeinado@gmail.com</p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1513.8408853822782!2d-3.1481302353477822!3d40.63689949674511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43aba8a536dc63%3A0x9d9afadc41466c46!2sAv.%20Bulevar%20del%20Alto%20Tajo%2C%2019005%20Guadalajara!5e0!3m2!1sen!2ses!4v1734950001725!5m2!1sen!2ses"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="shadow-sm"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2C60] mb-3">
              ¡Solicita más información o reserva tu cita hoy mismo!
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Nuestro equipo de fisioterapeutas expertos está listo para ayudarte.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre (requerido)"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E2C60] focus:ring-[#1E2C60]"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Tu correo electrónico (requerido)"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E2C60] focus:ring-[#1E2C60]"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Tu número de teléfono (requerido)"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E2C60] focus:ring-[#1E2C60]"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Asunto"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E2C60] focus:ring-[#1E2C60]"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tu mensaje (requerido)"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E2C60] focus:ring-[#1E2C60]"
                  required
                ></textarea>
              </div>

              {submitStatus.message && (
                <div
                  className={`p-4 rounded-md ${
                    submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#009DC4] text-white px-6 py-3 rounded-md hover:bg-[#008DB4] transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}