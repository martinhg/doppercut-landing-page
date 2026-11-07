import type { ui } from './content';

type Lang = keyof typeof ui;

/** Sample data shown inside the animated "how it works" illustrations. Purely decorative. */
export interface StepDemo {
  greeting: string;
  services: { name: string; duration: string }[];
  hours: string;
  sentAt: string;
  profile: string;
  ready: string;
  link: string;
  today: string;
  full: string;
  newBooking: string;
  bookings: { name: string; when: string }[];
}

const esServices = [
  { name: 'Corte', duration: '30 min' },
  { name: 'Manicura', duration: '45 min' },
  { name: 'Consulta', duration: '60 min' },
];

const esBookings = [
  { name: 'Sofía', when: 'Mañana 10:30' },
  { name: 'Lucas', when: 'Jue 17:00' },
  { name: 'Martina', when: 'Vie 12:15' },
  { name: 'Diego', when: 'Sáb 09:45' },
  { name: 'Valentina', when: 'Hoy 19:30' },
];

export const stepDemos: Record<Lang, StepDemo> = {
  es_ar: {
    greeting: '¡Hola! Te paso mis servicios:',
    services: esServices,
    hours: 'Lun a Sáb · 10 a 20 h',
    sentAt: '10:24',
    profile: 'Tu negocio',
    ready: 'Perfil listo',
    link: 'turnosplus.com/tu-negocio',
    today: 'Agenda de hoy',
    full: 'Agenda llena',
    newBooking: 'Nuevo turno',
    bookings: esBookings,
  },
  es_latam: {
    greeting: '¡Hola! Te comparto mis servicios:',
    services: esServices,
    hours: 'Lun a Sáb · 10 a 20 h',
    sentAt: '10:24',
    profile: 'Tu negocio',
    ready: 'Perfil listo',
    link: 'turnosplus.com/tu-negocio',
    today: 'Agenda de hoy',
    full: 'Agenda llena',
    newBooking: 'Nueva cita',
    bookings: esBookings,
  },
  en: {
    greeting: 'Hi! Here are my services:',
    services: [
      { name: 'Haircut', duration: '30 min' },
      { name: 'Manicure', duration: '45 min' },
      { name: 'Consultation', duration: '60 min' },
    ],
    hours: 'Mon–Sat · 10am–8pm',
    sentAt: '10:24 AM',
    profile: 'Your business',
    ready: 'Profile ready',
    link: 'turnosplus.com/your-business',
    today: "Today's schedule",
    full: 'Fully booked',
    newBooking: 'New booking',
    bookings: [
      { name: 'Sophie', when: 'Tomorrow 10:30 AM' },
      { name: 'Lucas', when: 'Thu 5:00 PM' },
      { name: 'Emma', when: 'Fri 12:15 PM' },
      { name: 'Daniel', when: 'Sat 9:45 AM' },
      { name: 'Olivia', when: 'Today 7:30 PM' },
    ],
  },
  pt: {
    greeting: 'Oi! Seguem meus serviços:',
    services: [
      { name: 'Corte', duration: '30 min' },
      { name: 'Manicure', duration: '45 min' },
      { name: 'Consulta', duration: '60 min' },
    ],
    hours: 'Seg a Sáb · 10h às 20h',
    sentAt: '10:24',
    profile: 'Seu negócio',
    ready: 'Perfil pronto',
    link: 'turnosplus.com/seu-negocio',
    today: 'Agenda de hoje',
    full: 'Agenda cheia',
    newBooking: 'Novo agendamento',
    bookings: [
      { name: 'Sofia', when: 'Amanhã 10:30' },
      { name: 'Lucas', when: 'Qui 17:00' },
      { name: 'Mariana', when: 'Sex 12:15' },
      { name: 'Diego', when: 'Sáb 09:45' },
      { name: 'Beatriz', when: 'Hoje 19:30' },
    ],
  },
};
