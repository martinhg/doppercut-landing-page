import { resolveLocale } from '../../i18n/locale';
import { site } from '../../config/site';

/** Languages the legal pages are written in. Every Spanish variant maps to 'es'. */
export type LegalLang = 'es' | 'pt' | 'en';

export const legalLangFor = (country: unknown): LegalLang => {
  const lang = String(resolveLocale(country).lang);
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('pt')) return 'pt';
  return 'en';
};

/** UI strings rendered by the LegalPage layout itself. */
export const legalUi: Record<LegalLang, { updatedLabel: string }> = {
  es: { updatedLabel: 'Última actualización' },
  pt: { updatedLabel: 'Última atualização' },
  en: { updatedLabel: 'Last updated' },
};

export const legalUpdated: Record<LegalLang, string> = {
  es: 'noviembre de 2026',
  pt: 'novembro de 2026',
  en: 'November 2026',
};

interface PageMeta {
  title: string;
  description: string;
  summary?: string;
}

const domain = new URL(site.url).host;

export const legalMeta: Record<'privacy' | 'terms' | 'legalNotice' | 'cookies', Record<LegalLang, PageMeta>> = {
  privacy: {
    es: {
      title: 'Política de privacidad',
      description: `Cómo ${site.name} recopila, usa y protege los datos de tu negocio y de tus clientes. Tus datos son tuyos y no los vendemos a terceros.`,
      summary: 'Tus datos son tuyos. No vendemos tu información a terceros, usamos conexiones cifradas y cumplimos con la Ley 25.326 de Protección de Datos Personales de la República Argentina.',
    },
    pt: {
      title: 'Política de privacidade',
      description: `Como o ${site.name} coleta, usa e protege os dados do seu negócio e dos seus clientes. Seus dados são seus e não os vendemos a terceiros.`,
      summary: 'Seus dados são seus. Não vendemos suas informações a terceiros, usamos conexões criptografadas e cumprimos a Lei 25.326 de Proteção de Dados Pessoais da República Argentina.',
    },
    en: {
      title: 'Privacy policy',
      description: `How ${site.name} collects, uses and protects your business and customer data. Your data is yours and we do not sell it to third parties.`,
      summary: 'Your data is yours. We do not sell your information to third parties, we use encrypted connections and we comply with Law 25,326 on Personal Data Protection of the Argentine Republic.',
    },
  },
  terms: {
    es: {
      title: 'Términos y condiciones de uso',
      description: `Condiciones de uso de ${site.name}: período de prueba, suscripción, pagos, propiedad de los datos y responsabilidades al usar la plataforma.`,
    },
    pt: {
      title: 'Termos e condições de uso',
      description: `Condições de uso do ${site.name}: período de teste, assinatura, pagamentos, propriedade dos dados e responsabilidades ao usar a plataforma.`,
    },
    en: {
      title: 'Terms and conditions of use',
      description: `${site.name} terms of use: trial period, subscription, payments, data ownership and responsibilities when using the platform.`,
    },
  },
  legalNotice: {
    es: {
      title: 'Aviso legal',
      description: `Datos identificatorios del titular de ${domain}, condiciones de uso del sitio, propiedad intelectual y legislación aplicable.`,
    },
    pt: {
      title: 'Aviso legal',
      description: `Dados de identificação do titular de ${domain}, condições de uso do site, propriedade intelectual e legislação aplicável.`,
    },
    en: {
      title: 'Legal notice',
      description: `Identification details of the owner of ${domain}, site terms of use, intellectual property and applicable law.`,
    },
  },
  cookies: {
    es: {
      title: 'Política de cookies',
      description: `Qué cookies y almacenamiento local usa ${site.name}, para qué sirven y cómo puedes borrarlos. Sin publicidad ni rastreo entre sitios.`,
      summary: 'Este sitio no usa cookies publicitarias ni de rastreo. Solo guardamos en tu navegador que ya leíste el aviso de cookies, y medimos visitas con una analítica que no usa cookies ni te identifica.',
    },
    pt: {
      title: 'Política de cookies',
      description: `Quais cookies e armazenamento local o ${site.name} usa, para que servem e como você pode apagá-los. Sem publicidade nem rastreamento entre sites.`,
      summary: 'Este site não usa cookies de publicidade nem de rastreamento. Só guardamos no seu navegador que você já leu o aviso de cookies, e medimos as visitas com uma análise que não usa cookies nem identifica você.',
    },
    en: {
      title: 'Cookie policy',
      description: `Which cookies and local storage ${site.name} uses, what they are for and how you can delete them. No advertising or cross-site tracking.`,
      summary: 'This site does not use advertising or tracking cookies. We only store in your browser that you have already read the cookie notice, and we measure visits with analytics that use no cookies and do not identify you.',
    },
  },
};
