import type { Lang } from '../locale';

/** Stable identifiers, in display order. */
export const industryIds = [
  'barbershops',
  'hair-salons',
  'beauty-salons',
  'aesthetic-centers',
  'spas',
  'nails',
  'brows-lashes',
  'makeup',
  'hair-removal',
  'tattoo',
  'nutrition',
  'psychology',
  'physiotherapy',
  'podiatry',
  'rehabilitation',
  'pediatric-therapy',
  'dentistry',
  'medical-offices',
  'pet-care',
  'fitness',
] as const;

export type IndustryId = (typeof industryIds)[number];

export interface IndustryCopy {
  /** Plural name shown on cards and chips, e.g. "Barberías". */
  name: string;
  /** One line for the strip card: the main pain or win, max ~70 characters. */
  card: string;
  /** <title> without the brand, e.g. "Sistema de citas para barberías". */
  seoTitle: string;
  /** Meta description, max ~155 characters. */
  seoDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  /** Exactly three. */
  pains: { title: string; desc: string }[];
  /** 4 to 6 typical services with duration, shown as a sample agenda. */
  services: { name: string; duration: string }[];
  /** Exactly three; only features the site already promises. */
  benefits: { title: string; desc: string }[];
  /** Exactly three. */
  faqs: { q: string; a: string }[];
}

export type IndustryCopyTable = Partial<Record<IndustryId, IndustryCopy>>;

/** First URL segment after the country, per language. */
export const industrySection: Record<Lang, string> = {
  es_latam: 'rubros',
  pt: 'segmentos',
  en: 'industries',
};

/** URL slug per language. */
export const industrySlugs: Record<IndustryId, Record<Lang, string>> = {
  barbershops: { es_latam: 'barberias', pt: 'barbearias', en: 'barbershops' },
  'hair-salons': { es_latam: 'peluquerias', pt: 'saloes-de-cabeleireiro', en: 'hair-salons' },
  'beauty-salons': { es_latam: 'salones-de-belleza', pt: 'saloes-de-beleza', en: 'beauty-salons' },
  'aesthetic-centers': { es_latam: 'centros-de-estetica', pt: 'clinicas-de-estetica', en: 'aesthetic-clinics' },
  spas: { es_latam: 'spa-y-masajes', pt: 'spa-e-massagem', en: 'spas-and-massage' },
  nails: { es_latam: 'unas', pt: 'manicure-e-pedicure', en: 'nail-salons' },
  'brows-lashes': { es_latam: 'cejas-y-pestanas', pt: 'sobrancelhas-e-cilios', en: 'brows-and-lashes' },
  makeup: { es_latam: 'maquillaje', pt: 'maquiagem', en: 'makeup-artists' },
  'hair-removal': { es_latam: 'depilacion', pt: 'depilacao', en: 'hair-removal' },
  tattoo: { es_latam: 'tatuajes-y-piercing', pt: 'tatuagem-e-piercing', en: 'tattoo-and-piercing' },
  nutrition: { es_latam: 'nutricion', pt: 'nutricao', en: 'nutritionists' },
  psychology: { es_latam: 'psicologia', pt: 'psicologia', en: 'psychologists' },
  physiotherapy: { es_latam: 'kinesiologia-y-fisioterapia', pt: 'fisioterapia', en: 'physical-therapy' },
  podiatry: { es_latam: 'podologia', pt: 'podologia', en: 'podiatry' },
  rehabilitation: { es_latam: 'centros-de-rehabilitacion', pt: 'centros-de-reabilitacao', en: 'rehabilitation-centers' },
  'pediatric-therapy': { es_latam: 'terapias-infantiles', pt: 'terapias-infantis', en: 'pediatric-therapy' },
  dentistry: { es_latam: 'odontologia', pt: 'odontologia', en: 'dental-clinics' },
  'medical-offices': { es_latam: 'consultorios-medicos', pt: 'consultorios-medicos', en: 'medical-practices' },
  'pet-care': { es_latam: 'veterinarias-y-peluqueria-canina', pt: 'pet-shops-e-veterinarias', en: 'vets-and-pet-grooming' },
  fitness: { es_latam: 'entrenamiento-pilates-y-yoga', pt: 'personal-pilates-e-yoga', en: 'fitness-pilates-and-yoga' },
};

/** Inner markup of a 24x24 stroke icon (stroke-width 2, round caps), rendered with currentColor. */
export const industryIcons: Record<IndustryId, string> = {
  barbershops: '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
  'hair-salons': '<path d="M3 7h18v3H3z"/><path d="M5 10v8M8 10v6M11 10v8M14 10v6M17 10v8M20 10v6"/>',
  'beauty-salons': '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
  'aesthetic-centers':
    '<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96l-6.14 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0Z"/>',
  spas: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  nails:
    '<path d="M18 11V6a2 2 0 0 0-4 0"/><path d="M14 10V4a2 2 0 0 0-4 0v2"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
  'brows-lashes': '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  makeup:
    '<path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02Z"/>',
  'hair-removal': '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z"/>',
  tattoo:
    '<path d="M15.7 21.3a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 1 0-1.4l5.6-5.6a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4Z"/><path d="m18 13-1.4-6.9a1 1 0 0 0-.7-.8L3.2 2a1 1 0 0 0-1.2 1.2L5.4 15.9a1 1 0 0 0 .7.7L13 18"/><path d="m2.3 2.3 7.3 7.3"/><circle cx="11" cy="11" r="2"/>',
  nutrition:
    '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/>',
  psychology: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.35a2.42 2.42 0 1 0-3.42 3.42L12 16.4l3.8-3.7a2.5 2.5 0 0 0 0-3.5Z"/>',
  physiotherapy: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  podiatry:
    '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/>',
  rehabilitation:
    '<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/>',
  'pediatric-therapy':
    '<path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>',
  dentistry:
    '<path d="M7 3C4.5 3 3 5 3 7.5c0 2 1 3.5 1.5 5.5.6 2.5.8 8 2.8 8 1.6 0 1.7-5 4.7-5s3.1 5 4.7 5c2 0 2.2-5.5 2.8-8 .5-2 1.5-3.5 1.5-5.5C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3Z"/>',
  'medical-offices':
    '<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
  'pet-care':
    '<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.05Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',
  fitness:
    '<path d="M14.4 14.4 9.6 9.6"/><path d="M18.66 21.49a2 2 0 1 1-2.83-2.83l-1.77 1.77a2 2 0 1 1-2.83-2.83l6.36-6.36a2 2 0 1 1 2.83 2.83l-1.77 1.77a2 2 0 1 1 2.83 2.83Z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.4 12.77a2 2 0 1 1-2.83-2.83l1.77-1.77a2 2 0 1 1-2.83-2.83l2.83-2.83a2 2 0 1 1 2.83 2.83l1.77-1.77a2 2 0 1 1 2.83 2.83Z"/>',
};

/** Page and strip labels per language. */
export const industryUi: Record<Lang, Record<string, string>> = {
  es_latam: {
    stripTitle: 'Hecho para tu rubro',
    stripAll: 'Ver todos los rubros',
    indexTitle: 'Un sistema de citas para cada rubro',
    indexSubtitle: 'Elige tu rubro y mira cómo TurnosPlus se adapta a tu forma de trabajar.',
    breadcrumb: 'Rubros',
    painsTitle: 'Lo que hoy te complica',
    servicesTitle: 'Así se ve tu agenda',
    servicesCaption: 'Servicios de ejemplo. Nosotros cargamos los tuyos.',
    servicesToday: 'Hoy',
    benefitsTitle: 'Cómo te ayuda TurnosPlus',
    faqTitle: 'Preguntas frecuentes',
    otherTitle: 'Otros rubros',
    ctaTitle: 'Empieza tus 14 días gratis',
    ctaDesc: 'Nosotros cargamos tus servicios y horarios y te entregamos la cuenta lista.',
    ctaButton: 'Empieza tus 14 días gratis',
    ctaWhatsapp: 'Escríbenos por WhatsApp',
    footerTitle: 'Rubros',
  },
  pt: {
    stripTitle: 'Feito para o seu segmento',
    stripAll: 'Ver todos os segmentos',
    indexTitle: 'Um sistema de agendamento para cada segmento',
    indexSubtitle: 'Escolha o seu segmento e veja como o TurnosPlus se adapta ao seu jeito de trabalhar.',
    breadcrumb: 'Segmentos',
    painsTitle: 'O que hoje complica a sua rotina',
    servicesTitle: 'Assim fica a sua agenda',
    servicesCaption: 'Serviços de exemplo. Nós cadastramos os seus.',
    servicesToday: 'Hoje',
    benefitsTitle: 'Como o TurnosPlus ajuda',
    faqTitle: 'Perguntas frequentes',
    otherTitle: 'Outros segmentos',
    ctaTitle: 'Comece seus 14 dias grátis',
    ctaDesc: 'Nós cadastramos seus serviços e horários e entregamos a conta pronta.',
    ctaButton: 'Comece seus 14 dias grátis',
    ctaWhatsapp: 'Fale conosco no WhatsApp',
    footerTitle: 'Segmentos',
  },
  en: {
    stripTitle: 'Built for your business',
    stripAll: 'See all industries',
    indexTitle: 'A booking system for every industry',
    indexSubtitle: 'Pick your industry and see how TurnosPlus fits the way you work.',
    breadcrumb: 'Industries',
    painsTitle: 'What gets in your way today',
    servicesTitle: 'What your schedule looks like',
    servicesCaption: 'Sample services. We set up yours.',
    servicesToday: 'Today',
    benefitsTitle: 'How TurnosPlus helps',
    faqTitle: 'Frequently asked questions',
    otherTitle: 'Other industries',
    ctaTitle: 'Start your 14-day free trial',
    ctaDesc: 'We load your services and hours and hand you a ready-to-use account.',
    ctaButton: 'Start your 14-day free trial',
    ctaWhatsapp: 'Text us on WhatsApp',
    footerTitle: 'Industries',
  },
};

/** Industries shown in the footer column (the rest live on the index page). */
export const footerIndustries: IndustryId[] = ['barbershops', 'hair-salons', 'aesthetic-centers', 'nails', 'psychology', 'physiotherapy'];
