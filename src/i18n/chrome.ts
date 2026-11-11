import type { ui } from './content';

type Lang = keyof typeof ui;

/** Site-wide UI strings that live outside the page content (layout, forms, legal links). */
export const chrome: Record<
  Lang,
  {
    skip: string;
    menu_open: string;
    nav_label: string;
    menu_close: string;
    country_label: string;
    whatsapp_label: string;
    whatsapp_message: string;
    cookie_text: string;
    cookie_link: string;
    cookie_ok: string;
    form_sending: string;
    form_success: string;
    form_error: string;
    form_too_fast: string;
    form_required: string;
    legal_notice: string;
    cookies: string;
    not_found_title: string;
    not_found_text: string;
    not_found_cta: string;
    logo_alt: string;
    seo_title: string;
    seo_short: string;
    seo_description: string;
  }
> = {
  es_latam: {
    skip: 'Saltar al contenido',
    menu_open: 'Abrir menú',
    nav_label: 'Principal',
    menu_close: 'Cerrar menú',
    country_label: 'Elige tu país',
    whatsapp_label: 'Escríbenos por WhatsApp',
    whatsapp_message: 'Hola TurnosPlus, quiero más información del sistema de citas.',
    cookie_text: 'Usamos solo cookies técnicas y una analítica que no te identifica. No hay publicidad ni rastreo entre sitios.',
    cookie_link: 'Ver política de cookies',
    cookie_ok: 'Entendido',
    form_sending: 'Enviando...',
    form_success: '¡Recibido! Te escribimos por WhatsApp en breve.',
    form_error: 'No pudimos enviar el formulario. Inténtalo de nuevo o escríbenos por WhatsApp.',
    form_too_fast: 'Tómate unos segundos para revisar los datos y vuelve a enviar.',
    form_required: 'Completa los campos obligatorios.',
    legal_notice: 'Aviso legal',
    cookies: 'Política de cookies',
    not_found_title: 'Esta página no existe',
    not_found_text: 'Puede que el enlace esté mal escrito o que la página se haya movido.',
    not_found_cta: 'Volver al inicio',
    logo_alt: 'TurnosPlus',
    seo_title: 'Sistema de citas online para profesionales y negocios',
    seo_short: 'Sistema de citas online',
    seo_description: 'Agenda online 24/7, recordatorios por WhatsApp y control financiero para barberías, peluquerías, estética y consultorios. Prueba TurnosPlus 14 días gratis.',
  },
  en: {
    skip: 'Skip to content',
    menu_open: 'Open menu',
    nav_label: 'Main',
    menu_close: 'Close menu',
    country_label: 'Choose your country',
    whatsapp_label: 'Message us on WhatsApp',
    whatsapp_message: 'Hi TurnosPlus, I would like more information about the booking system.',
    cookie_text: 'We only use essential cookies and privacy-friendly analytics that do not identify you. No ads, no cross-site tracking.',
    cookie_link: 'Read the cookie policy',
    cookie_ok: 'Got it',
    form_sending: 'Sending...',
    form_success: 'Received! We will message you on WhatsApp shortly.',
    form_error: 'We could not send the form. Try again or message us on WhatsApp.',
    form_too_fast: 'Take a few seconds to review your details, then send again.',
    form_required: 'Fill in the required fields.',
    legal_notice: 'Legal notice',
    cookies: 'Cookie policy',
    not_found_title: 'This page does not exist',
    not_found_text: 'The link may be mistyped or the page may have moved.',
    not_found_cta: 'Back to home',
    logo_alt: 'TurnosPlus',
    seo_title: 'Online booking software for professionals and businesses',
    seo_short: 'Online booking software',
    seo_description: '24/7 online booking, WhatsApp reminders and cash control for barbershops, salons, spas and clinics. Try TurnosPlus free for 14 days.',
  },
  pt: {
    skip: 'Pular para o conteúdo',
    menu_open: 'Abrir menu',
    nav_label: 'Principal',
    menu_close: 'Fechar menu',
    country_label: 'Escolha seu país',
    whatsapp_label: 'Fale conosco pelo WhatsApp',
    whatsapp_message: 'Olá TurnosPlus, quero mais informações sobre o sistema de agendamento.',
    cookie_text: 'Usamos apenas cookies essenciais e uma análise que não identifica você. Sem publicidade nem rastreamento entre sites.',
    cookie_link: 'Ver política de cookies',
    cookie_ok: 'Entendi',
    form_sending: 'Enviando...',
    form_success: 'Recebido! Vamos falar com você pelo WhatsApp em breve.',
    form_error: 'Não conseguimos enviar o formulário. Tente de novo ou fale conosco pelo WhatsApp.',
    form_too_fast: 'Revise seus dados por alguns segundos e envie de novo.',
    form_required: 'Preencha os campos obrigatórios.',
    legal_notice: 'Aviso legal',
    cookies: 'Política de cookies',
    not_found_title: 'Esta página não existe',
    not_found_text: 'O link pode estar errado ou a página pode ter mudado de lugar.',
    not_found_cta: 'Voltar ao início',
    logo_alt: 'TurnosPlus',
    seo_title: 'Sistema de agendamento online para profissionais e negócios',
    seo_short: 'Sistema de agendamento online',
    seo_description: 'Agenda online 24/7, lembretes pelo WhatsApp e controle de caixa para barbearias, salões, estética e consultórios. Teste o TurnosPlus grátis por 14 dias.',
  },
};
