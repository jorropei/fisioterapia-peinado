import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
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

      <div className="flex items-start space-x-4">
        <Clock className="w-6 h-6 text-[#1E2C60] mt-1" />
        <div>
          <h3 className="font-semibold text-[#1E2C60]">Horario</h3>
          <div className="text-gray-600">
            <p>Lunes a Viernes: 9:00 - 20:00</p>
            <p>Sábados: 9:00 - 14:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}