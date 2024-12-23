import emailjs from '@emailjs/browser';
import { EmailJSResponseStatus } from '@emailjs/browser';

// These should match your EmailJS dashboard exactly
const EMAILJS_SERVICE_ID = 'service_fisioterapia';
const EMAILJS_TEMPLATE_ID = 'template_fisioterapia'; 
const EMAILJS_PUBLIC_KEY = 'gqBjcE1opkf20D-VQ';

// Initialize EmailJS once at module level
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<EmailJSResponseStatus> {
  console.log('Starting email send process with data:', {
    ...data,
    email: '***@***.com' // Mask email for privacy in logs
  });

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error('EmailJS configuration is incomplete');
  }

  try {
    // Template parameters must match your EmailJS template variables exactly
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: data.subject || 'Nueva consulta desde la web',
      message: data.message,
      to_name: 'Fisioterapia Peinado'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Email sent successfully:', response);
    return response;

  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}