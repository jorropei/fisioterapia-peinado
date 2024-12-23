import { LucideIcon, Activity, Dumbbell, Heart, Brain, Stethoscope, Users } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Activity,
    title: 'Fisioterapia Traumatológica',
    description: 'Tratamiento de lesiones musculares, articulares y tendinosas. Rehabilitación post-quirúrgica.'
  },
  {
    icon: Brain,
    title: 'Fisioterapia Neurológica',
    description: 'Tratamiento de patologías neurológicas como ictus, parkinson, esclerosis múltiple, etc.'
  },
  {
    icon: Heart,
    title: 'Fisioterapia Respiratoria',
    description: 'Tratamiento de patologías respiratorias, mejora de la capacidad pulmonar.'
  },
  {
    icon: Stethoscope,
    title: 'Punción Seca',
    description: 'Técnica invasiva para el tratamiento de puntos gatillo miofasciales.'
  },
  {
    icon: Users,
    title: 'Pilates Terapéutico',
    description: 'Ejercicios específicos para problemas de espalda, control postural y rehabilitación.'
  },
  {
    icon: Dumbbell,
    title: 'Ejercicio Terapéutico',
    description: 'Programas de ejercicios personalizados para rehabilitación y prevención.'
  }
];