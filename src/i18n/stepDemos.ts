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
  /** Sample data for the feature cards ("what the system does for you"). */
  features: {
    whileAsleep: string;
    slots: { time: string; label: string; booked: boolean; isNew?: boolean }[];
    reminder: string;
    reminderSent: string;
    cashToday: string;
    trend: string;
    commissions: string;
    days: string[];
  };
  /** Sample data for the dashboard and booking-page previews. */
  app: {
    nav: string[];
    bookingsToday: string;
    confirmed: string;
    team: string[];
    bookTitle: string;
    chooseDay: string;
    available: string;
    confirm: string;
  };
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
    features: {
      whileAsleep: 'Mientras dormías',
      slots: [{ time: '09:00', label: 'Lucas · Corte', booked: true }, { time: '10:30', label: 'Sofía · Manicura', booked: true, isNew: true }, { time: '12:00', label: 'Libre', booked: false }],
      reminder: 'Hola Sofía 👋 Te recordamos tu turno de mañana a las 10:30.',
      reminderSent: 'Recordatorio enviado',
      cashToday: 'Caja de hoy',
      trend: '+12% vs. semana pasada',
      commissions: 'Comisiones',
      days: ['L', 'M', 'M', 'J', 'V', 'S'],
    },
    app: { nav: ['Agenda', 'Clientes', 'Servicios', 'Caja', 'Equipo'], bookingsToday: 'Turnos hoy', confirmed: 'Confirmados', team: ['Juan', 'Caro', 'Sofi'], bookTitle: 'Reservá tu turno', chooseDay: 'Elegí el día', available: 'Horarios disponibles', confirm: 'Confirmar turno' },
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
    features: {
      whileAsleep: 'Mientras dormías',
      slots: [{ time: '09:00', label: 'Lucas · Corte', booked: true }, { time: '10:30', label: 'Sofía · Manicura', booked: true, isNew: true }, { time: '12:00', label: 'Libre', booked: false }],
      reminder: 'Hola Sofía 👋 Te recordamos tu cita de mañana a las 10:30.',
      reminderSent: 'Recordatorio enviado',
      cashToday: 'Caja de hoy',
      trend: '+12% vs. semana pasada',
      commissions: 'Comisiones',
      days: ['L', 'M', 'M', 'J', 'V', 'S'],
    },
    app: { nav: ['Agenda', 'Clientes', 'Servicios', 'Caja', 'Equipo'], bookingsToday: 'Citas hoy', confirmed: 'Confirmadas', team: ['Juan', 'Caro', 'Sofi'], bookTitle: 'Reserva tu cita', chooseDay: 'Elige el día', available: 'Horarios disponibles', confirm: 'Confirmar cita' },
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
    features: {
      whileAsleep: 'While you slept',
      slots: [{ time: '9:00', label: 'Lucas · Haircut', booked: true }, { time: '10:30', label: 'Sophie · Manicure', booked: true, isNew: true }, { time: '12:00', label: 'Open', booked: false }],
      reminder: 'Hi Sophie 👋 Reminder: your appointment is tomorrow at 10:30 AM.',
      reminderSent: 'Reminder sent',
      cashToday: "Today's cash",
      trend: '+12% vs last week',
      commissions: 'Commissions',
      days: ['M', 'T', 'W', 'T', 'F', 'S'],
    },
    app: { nav: ['Schedule', 'Clients', 'Services', 'Cash', 'Team'], bookingsToday: 'Bookings today', confirmed: 'Confirmed', team: ['John', 'Kate', 'Sam'], bookTitle: 'Book your appointment', chooseDay: 'Pick a day', available: 'Available times', confirm: 'Confirm booking' },
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
    features: {
      whileAsleep: 'Enquanto você dormia',
      slots: [{ time: '09:00', label: 'Lucas · Corte', booked: true }, { time: '10:30', label: 'Sofia · Manicure', booked: true, isNew: true }, { time: '12:00', label: 'Livre', booked: false }],
      reminder: 'Oi Sofia 👋 Lembrete: seu horário é amanhã às 10:30.',
      reminderSent: 'Lembrete enviado',
      cashToday: 'Caixa de hoje',
      trend: '+12% vs semana passada',
      commissions: 'Comissões',
      days: ['S', 'T', 'Q', 'Q', 'S', 'S'],
    },
    app: { nav: ['Agenda', 'Clientes', 'Serviços', 'Caixa', 'Equipe'], bookingsToday: 'Agendamentos hoje', confirmed: 'Confirmados', team: ['João', 'Carol', 'Bia'], bookTitle: 'Agende seu horário', chooseDay: 'Escolha o dia', available: 'Horários disponíveis', confirm: 'Confirmar horário' },
  },
};
