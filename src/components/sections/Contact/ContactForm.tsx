import React, { useState } from 'react';
import { sendEmail, EmailData } from '../../../utils/email';

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export function ContactForm() {
  const [formData, setFormData] = useState<EmailData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submission started');

    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: 'Por favor, completa todos los campos requeridos.'
      });
      return;
    }

    setFormState({
      isSubmitting: true,
      isSuccess: false,
      error: null
    });

    try {
      await sendEmail(formData);
      
      setFormState({
        isSubmitting: false,
        isSuccess: true,
        error: null
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error in form submission:', error);
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre (requerido)"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E2C60] focus:ring-[#1E2C60]"
          required
          disabled={formState.isSubmitting}
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Tu correo electrónico (requerido)"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E2C60] focus:ring-[#1E2C60]"
          required
          disabled={formState.isSubmitting}
        />
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Tu número de teléfono (requerido)"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E2C60] focus:ring-[#1E2C60]"
          required
          disabled={formState.isSubmitting}
        />
      </div>

      <div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Asunto"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E2C60] focus:ring-[#1E2C60]"
          disabled={formState.isSubmitting}
        />
      </div>

      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tu mensaje (requerido)"
          rows={4}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E2C60] focus:ring-[#1E2C60]"
          required
          disabled={formState.isSubmitting}
        />
      </div>

      {formState.error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600 text-sm">{formState.error}</p>
        </div>
      )}

      {formState.isSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-600 text-sm">
            ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
          </p>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-[#009DC4] text-white px-6 py-3 rounded-md hover:bg-[#008DB4] transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={formState.isSubmitting}
      >
        {formState.isSubmitting ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'}
      </button>
    </form>
  );
}